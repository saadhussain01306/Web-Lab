<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission</title>
</head>
<body>
    <h2>Enter Your Information</h2>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
        <label for="info">Information:</label><br>
        <!-- Textarea for multiline input -->
        <textarea id="info" name="info" rows="6" cols="50"></textarea><br><br>
        <input type="submit" value="Submit">
        <input type="reset" value="Reset">
    </form>

    <?php
   
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
</body>
</html>
