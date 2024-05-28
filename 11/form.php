<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the information from the form
    $info = $_POST["info"];

    // Validate if the information is not empty
    if (!empty($info)) {
        // Open a text file to store the information
        $file = fopen("form.txt", "a"); // "a" mode for appending

        // Write the information to the text file
        fwrite($file, $info . "\n");

        // Close the file
        fclose($file);

        // Display a success message
        echo "Information submitted successfully!";
    } else {
        // Display an error message if information is empty
        echo "Please enter some information!";
    }
}
?>
