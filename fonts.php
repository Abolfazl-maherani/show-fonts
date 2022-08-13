<?php
error_reporting(~E_ALL);

include 'font-Class.php';

define("root", $_SERVER['SystemRoot']);
define("full_path", root . DIRECTORY_SEPARATOR . 'Fonts/');

//get all font in the path (*.ttf)
 


if (!function_exists("fontfamily")) {
    function fontfamily()
    {
        $infoFont = [];
        if (file_exists(full_path)) {
            $arrFont_ttf = glob(full_path . "/*.ttf");
            if (isset($arrFont_ttf) && !empty($arrFont_ttf)) {
                $i = 0;
                foreach ($arrFont_ttf as $item) {
                    $result[] = getFontInfo($item);
                    //key =fontFamily and value = font type
                    $infoFont["allfont"][$result[$i][1]] = $result[$i][2];
                    $i++;
                }
            }
            //count font family
            $infoFont['numberfont'] = count($infoFont['allfont']);
            ksort($infoFont['allfont']);
        }

        return $infoFont;
    }
}
if (!function_exists("sendfont")) {
    function sendfont()
    {
        $font = fontfamily();
        if (isset($_POST['fonts'])){
            try {
                $jsObj = json_decode($_POST['fonts'], true);
                $jsObj['allfont'] = $font['allfont'];
                $jsObj['numberfont'] = $font['numberfont'];

            }catch (Exception $e){
                $jsObj['error'] = json_last_error_msg();
                echo "error in php file: " .$e->getMessage();
            }
            return json_encode($jsObj);

        }



    }
}

echo sendfont();

