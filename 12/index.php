<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>

    <style>
        .container {
            margin: 50px auto;
            width: 400px;
            padding: 30px;
            background-color: #f5f5f5;
            border-radius: 10px;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
        }

        input {
            font-size: 12px;
            padding: 10px;
            margin: 5px;
            border-radius: 2px;
            width: 70%;
        }
    </style>

</head>
<body>
    <div class="container">
        <h2>Login</h2>
        <form action="" method="POST">
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username"><br><br>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br><br>
            <button type="submit">Login</button>
        </form>
    </div>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $uname = $_POST["username"];
        $pass = $_POST["password"];
        $file = fopen("login.txt", "r");
        
        $is_valid = false;

        while (($line = fgets($file)) !== false) {
            $content = trim($line);
            if ($content == $uname . ":" . $pass) {
                $is_valid = true;
                break;
            }
        }
        fclose($file);

        if ($is_valid) {
            echo "<script>alert('Access granted!');</script>";
        } else {
            echo "<script>alert('Incorrect');</script>";
        }
    }
    ?>
</body>
</html>
