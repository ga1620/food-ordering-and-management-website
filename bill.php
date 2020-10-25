<html>

<head>
    <title>Bill page</title>
    <style type="text/css">
        img {
            position: absolute;
            left: 15%;
            width: 70%;
            height: 95%;
            -webkit-box-shadow: 10px 10px 131px 53px rgba(240, 224, 51, 1);
            -moz-box-shadow: 10px 10px 131px 53px rgba(240, 224, 51, 1);
            box-shadow: 10px 10px 131px 53px rgba(240, 224, 51, 1);
            z-index: 777;
        }
        
        div {
            position: absolute;
            left: 40%;
            top: 15%;
            width: 20%;
            height: 50%;
            z-index: 1000;
        }
        
        p {
            font-size: 50px;
            transform: rotate(-10deg);
            text-transform: capitalize;
        }
       h1{ 
           position: absolute;
           top: -10%;
           left: 20%;
           font-size: 90px;
           color: #ffffff;
           z-index: 999;
           opacity: 1;
           text-shadow: 5px 5px #ffca40;
       }
    </style>
    <?php
            $bill = $_POST['tdata'];
            $mo=$_POST['mdata'];
            $con=new mysqli('localhost','root','','customer');
            $sql = "UPDATE customerinformation SET Bill=$bill WHERE MobileNo=$mo";
            $con->query($sql);
            $con->close();
     ?>       
</head>

<body>
    <h1>w3 Cafe</h1>
    <div>
        <p>!!<?php echo $_POST['ndata'];?> Your Order is Placed.....!!<br/><br/>Total bill is <?php echo $_POST['tdata']; ?>/-</p>
    </div>
    <img src="7639.jpg">
</body>

</html>