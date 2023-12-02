<?php
// Define variables to store user input and error messages
$name = "";
$email = "";

// Function to sanitize and validate input
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Check if the form is submitted
// $_SERVER =>superglobal array in PHP that provides information about the server
// $_POST => superglobal array in php used to collect form data submitted with the HTTP POST method

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate name and email using our sanitizeInput function 
    $name = sanitizeInput($_POST["name"]);
    $email = sanitizeInput($_POST["email"]);

    // Check if the name contains only letters 
    // preg_match => pattern matching function in php
    // /^[a-zA-Z ]*$/  => regular expression for indicating all combination of a-z & A-Z alphabhets
    // /^ => start of pattern,  / => end of the pattern. $ => asserts end of the string


    if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
        $nameErr = "Only letters and white space allowed";
    }
    
    // Check if the email address is in valid format
    // filter_var() => function to check validity of a variable in php. FILTER_VALIDATE_EMAIL => validate for email

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Invalid email format";
    }
}
?>
<!-- here goes the code for html form -->

<!DOCTYPE html>
<html>
<head>
    <title>Form Validation in PHP</title>
</head>
<body>

<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    Name: <input type="text" name="name" value="<?php echo $name;?>">
   
    Email: <input type="text" name="email" value="<?php echo $email;?>">
    
    <input type="submit" name="submit" value="Submit">
</form>

</body>
</html>
