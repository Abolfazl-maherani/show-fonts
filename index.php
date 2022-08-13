<!DOCTYPE html>
<html lang="en" dir="rtl" class="loader-active">
<head>
    <meta charset="UTF-8">
    <title>نمایش متن و فونت لوکال هاست</title>
    <link rel="shortcut icon" href="assets/ico/font.jpg" type="image/x-icon">
    <link rel="stylesheet" href="assets/css/normalize.css">
    <link rel="stylesheet" href="assets/css/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="top">
<div class="loader ">
    <div class="position-relative">
        <img src="assets/ico/font1.png" alt="">
    </div>

</div>
<div class="container">

<section id="main-box" class="d-flex align-items-center justify-content-center">

    <div class="box-modal mt-3  shadow rounded bg-light">

        <ul class="nav nav-pills d-flex align-items-center justify-content-between bg-dark border py-2 px-5 position-relative" id="pills-tab" role="tablist">

            <li class="nav-item">
                <div class="form-group m-0">
                    <input maxlength="50" placeholder="نوشته ی دلخواه را وارد کنید" type="text" class="form-control" id="text-test"
                           aria-describedby="emailHelp"></input>

                </div>
            </li>

            <li class="counter-box  d-flex flex-column" >
            <b id="count-font"  class="count-font bg-info  mb-1 text-white"></b>
            <b id="avaleble-font"  class="count-font bg-success  text-white"> </b>
            </li>
        </ul>
        <div class="tab-content " id="pills-tabContent">

            <div class="tab-pane  show active  fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                <div class="body-tab table-fonts">
                    <table  id="tbl-font" class="table table-hover ">
                        <tbody id="fonts-tbl" class=" px-5">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</section>
</div>

<!--JQUERY-->
<script src="assets/js/jquery/jquery-3.5.1.js" type="text/javascript"></script>
<script src="assets/js/jquery/jquery-3.5.1.min.js" type="text/javascript"></script>
<script type="text/javascript" src="assets/css/bootstrap/js/bootstrap.min.js" async></script>
<!--JS-->
<script src="assets/js/js.js" type="text/javascript"></script>
<script>

</script>
</body>
</html>