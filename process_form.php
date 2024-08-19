<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "demo";
$con = mysqli_connect($host, $user, $password, $database);
if (mysqli_connect_errno()){
    echo "Connection Fail: ".mysqli_connect_errno();exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Kiểm tra xem các trường 'name', 'email', và 'message' có tồn tại hay không
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        
        // Chèn dữ liệu vào bảng "lienhe"
        $sql = "INSERT INTO lienhe (name, email, message) VALUES ('$name', '$email', '$message')";
        
        if ($con->query($sql) === TRUE) {
            echo "Cảm ơn bạn đã liên hệ với tôi! Tôi sẽ phản hồi bạn sớm nhất có thể.";
        } else {
            echo "Error: " . $sql . "<br>" . $con->error;
        }
    }
}


// Đóng kết nối
$con->close();
?>
