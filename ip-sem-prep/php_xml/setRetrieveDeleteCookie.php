<?php
    $cookie_name = "user";
    $cookie_value = "abcd xyz"

    setcookie($cookie_name, $cookie_value, time() + (60*60*24*30), '/')
    // expiry time is in seconds
?>
<!-- html code kept below setcookie() -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php

        if(!isset($_COOKIE[$cookie_name])){
            echo "Cookie: " . $cookie_name . "value is not set";
        }
        else{
            echo "User is " . $_COOKIE[$cookie_name]; //prints value of user cookie
        }
    ?>
    

    <!-- Delete cookie -->
    <?php
        setcookie("user", "", time()-(60*60))
    ?>

    <!-- Check if cookies are enabled in the browser -->
    <?php
        if(count($_COOKIE) > 0){
            // means there are some cookies
            echo "cookies are enabled"
        }
        else{
            echo "cookies are disabled"
        }
    ?>

</body>
</html>