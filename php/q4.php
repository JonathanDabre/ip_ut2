<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>
    <?php 
// isset function if the given array is set and is not null.
    if(isset($_POST['name'])){
      echo '<h1>Hello ' . $_POST['name'] . '</h1>';
    }
        
    ?> 

    <form method="POST" action ="">
        <label>Name</label>
      <input type="text" name="name">
      <input type="submit" value="Submit">
      
    </form>

 
  <script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
  </body>
</html>