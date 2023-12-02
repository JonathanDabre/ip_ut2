<?php 
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <!-- SET session variables -->
    <?php

        $_SESSION['favcolor'] = "blue";
        $_SESSION['favanimal'] = 'dog';

        echo 'Session variables are set.';
    ?>

    <!-- RETRIEVE Session variables -->
    <!-- Usually done on different page, sessions are not passed to every page, instead retrieved at start using session_start() -->
    <?php

        echo "Favourite Color: " . $_SESSION['favcolor'];
        echo "Favourite Animal: " . $_SESSION['favanimal'];

        // OR

        print_r($_SESSION);
        // print_r() => printing human readable information about a variable. 
        // print_r() is preferred over echo When dealing with Array or any complex data structure

    ?>


    <!-- MODIFY Session variables -->
    <!--just overwrite the previous ones  -->
    <?php 

        $_SESSION["favcolor"] = "blue it is!!";
        $_SESSION['favanimal'] = "cat";

        print_r($_SESSION);
    ?>



</body>
</html>