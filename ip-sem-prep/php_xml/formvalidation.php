<?php
// Define variables to store user input and error messages
$name = "";
$nameErr = "";

// Function to sanitize and validate input
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate name and email using our sanitizeInput function 
    $name = sanitizeInput($_POST["name"]);
    $email = sanitizeInput($_POST["email"]);

    // Check if the name contains only letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
        $nameErr = "Only letters and white space allowed";
    }
    
    // Check if the email address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Invalid email format";
    }
}
?>
<!-- here goes the code for html form -->