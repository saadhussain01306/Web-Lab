<?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $uname = $_POST["username"];
            $pass = $_POST["password"];
            $file = fopen("login.txt", "r");

            $content = fgets($file);
            if ($content == $uname . ":" . $pass) {
                echo "alert('Access granted!')";
            } else {
                echo "alert('Incorrect')";
            }
        }
        ?>