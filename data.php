<html>

<head>
    <title>Information</title>
    <style type="text/css">
        img {
            width: 100%;
            height: 100%;
            filter: brightness(30%);
        }
        
        h1 {
            position: absolute;
            top: -2%;
            left: 4%;
            font-size: 50px;
            color: #ffffff;
            z-index: 999;
            opacity: 1;
            text-shadow: 3px 3px #ffca40;
        }
        
        h3 {
            position: absolute;
            top: 8%;
            left: 9%;
            font-size: 20px;
            color: #ffffff;
            z-index: 999;
            opacity: 1;
            text-shadow: 1px 1px #ffca40;
        }
        table{
            position:absolute;
            top:16%;
            left:24%;
        }
        td{
            font-size:30px;
            color: #ffffff;
            z-index: 999;
            opacity: 1;
            text-shadow: 1px 1px #ffca40;
            padding-left:36px;
            padding-top:10px;
        }
        .tt{
            padding-bottom:22px;
            background-color:grey;
            text-shadow: 1px 1px black;

        }
  </style>
    <?php
              $date=$_GET['dateform'];
              $con=new mysqli('localhost','root','','customer');
              $st ="SELECT Name,MobileNo,IdNo,Gender,Bill,Date FROM customerinformation WHERE Date='$date' ";
              $result = $con->query($st); 
              $con->close();  
    ?>
</head>

<body>
    <img src="inf.jpg" />
    <h1>w3 Cafe</h1>
    <h3>Management</h3>
    <table>
             <tr>
               <td class="tt">Name</td>
               <td class="tt">MobileNo</td>
               <td class="tt">IdNo</td>
               <td class="tt" style="padding-right:10px;">Gender</td>
               <td class="tt" style="padding-left:10px;">Bill</td>
               <td class="tt">Date</td>
             </tr>
              
              <?php  
              $qt=0;   
              while($rows=$result->fetch_assoc()) 
              { 
              ?> 
               <?php $qt+=$rows['Bill'];  ?>
              <tr>  
              <td><?php echo $rows['Name'];?></td> 
              <td><?php echo $rows['MobileNo'];?></td> 
              <td><?php echo $rows['IdNo'];?></td> 
              <td><?php echo $rows['Gender'];?></td> 
              <td><?php echo $rows['Bill'];?> /-</td>
              <td><?php echo $rows['Date'];?></td>
             </tr> 
          <?php 
              } 
           ?> 
    </table>   
    <h1 style="top:80%; left:5%; font-size:30px; text-shadow: 1px 1px #ffca40;">Total Amount Collected :</h1>
    <h1 style="top:76%; left:33%; background-color:grey; width:8%; padding-left:20px; border-radius:7px;"><?php echo $qt;?></h1>
</body>

</html>