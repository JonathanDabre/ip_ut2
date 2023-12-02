<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>
    <?php 
      $num = 5;
      $fact = 1;

    if(!$num == 0){
      for($i = 1; $i <= $num; $i++){
        $fact = $fact * $i;
      }
    }

      echo "$fact";
    ?>

  <script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
  </body>
</html>
