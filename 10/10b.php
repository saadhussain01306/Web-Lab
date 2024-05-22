<!DOCTYPE html>
<html>
<head>
  <title>Prime Number Checker</title>
</head>
<body>
  <h1>Prime Number Checker</h1>
  <form method="POST">
    <label>Number</label>
    <input name="num" required/>
    <button type="submit">Check!</button>
  </form>
    <p>
  <?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $num = $_POST["num"];
    if ($num == 1 || $num == 0) {
      echo "The number $num is neither prime nor not prime";
      return;
    }
    $flag = 0;
    for ($i = 2; $i <= sqrt($num); $i++) {
    if ($num % $i == 0) {
        $flag = 1;
        break;
    }
    }
    if ($flag == 1) 
    echo "The number $num is not a prime number";
    else
    echo "The number $num is a prime number";
  }
  ?>
    </p>
</body>
</html>
