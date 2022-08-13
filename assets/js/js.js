"use strict";
let fonts;
$(document).ready(function () {
    // clean input after refresh
    $("#text-test").val("");

    $(function () {
        $("#tbl-font").on("click", "tr.row-tbl", function (event) {

            let family = $(this).find(".family").text().trim();

            if ($(event.target).hasClass("copy") || $(event.target).parent().hasClass('copy')) {

                let txtSelect = document.createElement("textArea");
                $(txtSelect).css("opacity", "0");
                $(txtSelect).val(family);
                $("body").append(txtSelect);
                $(txtSelect).select();
                if (document.execCommand("copy")) {
                    $(this).find(".copy").addClass("bg-success");
                    $(this).find(".copy").removeClass("bg-secondary");
                }
                var btnCopy = $(this).find(".copy");
                setTimeout(function () {
                    $(btnCopy).removeClass("bg-success");
                    $(btnCopy).addClass("bg-secondary");
                }, 1000)


                $(txtSelect).remove();
            }

        });
    })


    // send request side server for get font
    var xhr = new XMLHttpRequest();

    // def text
    let textText = "متن تست (test text)";

    function getfont() {
        let fonts = {}
        let str = JSON.stringify(fonts);
        xhr.open("POST", './fonts.php', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("fonts=" + str);
    }

    getfont();
    // check response
    xhr.onreadystatechange = function (e) {
        let arr_font = [];
        if (this.status === 200 && this.readyState === 4) {
            let objResponse = JSON.parse(this.responseText);
            console.log(objResponse);
            $(".loader").hide();
            $("html").removeClass("loader-active");
            let i = 0
            let tblBody = $("#fonts-tbl");
            for (const eKey in objResponse.allfont) {
                arr_font.push(eKey);
            }
            const fontCheck = new Set(arr_font);

            async function Availablefont() {
                await document.fonts.ready;
                const fontAvailable = new Set();
                for (const font of fontCheck.values()) {
                    if (document.fonts.check(`13px "${font}"`)) {
                        fontAvailable.add(font);
                    }
                }
                return ([...fontAvailable.values()]);
            };
            let arravalable = Availablefont();
            arravalable.then(function (resul) {
                for (const eKey in resul) {
                    i++;
                    tblBody.append($(`<tr class="row-tbl">
               
                    <td  style="font-family:${resul[eKey]}; font-size: 22px"  class="text px-4">${textText}</td>
                    <td class="font_name text-left px-4">
                     
                            <span class="family"> ${resul[eKey]} </span>      
                                <div class="d-flex justify-content-end pt-3">
                                    <button   title=" کپی اسم فونت" class="border-0 copy text-white bg-secondary mx-2"> <i class="fa fa-copy"></i></button>
                                    <button id="add-fav"  title="افزودن منتخب" class="border-0 add-fav bg-transparent">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart-fill" viewBox="0 0 16 16">
  <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
</svg>
                                    </button>
                                </div>
                                
                     </td>
                
                    </tr>`));
                }
                $("#count-font").text("  فونت های موجود  " + objResponse.numberfont);
                $("#avaleble-font").text(" فونت های فعال   " + resul.length);
            });
        }
        if (this.status === 404) {
            console.log(this.statusText);
        }
    }



    $("#text-test").on("keyup keydown", function () {

        let lengthLimited = 30;
        let tblText = $(".text");
        let inptText = $("#text-test");
        let text = inptText.val().trim();

        if ($(inptText).prop("maxlength") !== lengthLimited) {
            $(inptText).prop("maxlength", lengthLimited);
        }
        if (text.length >= 1 && text.length <= lengthLimited) {

            tblText.text(text);

        } else if (text == false) {
            tblText.text(textText);
        }

        if (text.length == lengthLimited) {
            $(tblText).append("...");
        }
    });
});