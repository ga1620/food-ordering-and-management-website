<html>

<head>
    <title>Welcome to cafe</title>
    <link rel="stylesheet" href="secondpagecss.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="secondjs.js"></script>
    <?php
            $Name = $_POST['name'];
            $Mobileno = $_POST['mobile'];
            $Idno = $_POST['idno'];
            $Gender = $_POST['gender'];
            $con=new mysqli('localhost','root','','customer');
            $date = date('Y-m-d');
         $stm=$con->prepare("INSERT INTO customerinformation(Name,MobileNO,IdNo,Gender,Date) VALUES (?,?,?,?,?)");
         $stm->bind_param("siiss",$Name,$Mobileno,$Idno,$Gender,$date);
         $stm->execute();
         $stm->close();
         $con->close();                    
    ?> 
</head>

<body>
    <h1 id="mainh">w3 Cafe</h1>
    <img id="background" src="background.jpg" />
    <div>
        <section id="pizza">
            <img src="pizza.jpg" />
            <h4 align="center">Pizza</h4>
        </section>

        <section id="burger">
            <img src="burger.jpg" />
            <h4 align="center">Burger</h4>
        </section>
        <section id="sandwitch">
            <img src="sandwitch.jpg" />
            <h4 align="center">Sandwich</h4>
        </section>
        <section id="coffie">
            <img src="coffie.jpg" />
            <h4 align="center">Coffee</h4>
        </section>
        <section id="noddles">
            <img src="noddles.jpg" />
            <h4 align="center">Noddles</h4>
        </section>
        <section id="salad">
            <img src="salad.jpg" />
            <h4 align="center">Salad</h4>
        </section>
        <section id="sup">
            <img src="sup.jpg" />
            <h4 align="center">Sup</h4>
        </section>
        <section id="frenchtost">
            <img src="frenchtost.jpg" />
            <h4 align="center">Frenchtoast</h4>
        </section>
        <section id="icecream">
            <img src="icecream.jpg" />
            <h4 align="center">Icecream</h4>
        </section>
        <section id="coc">
            <img src="coc.jpg" />
            <h4 align="center">Soft Drink</h4>
        </section>
        <section id="juice">
            <img src="juice.jpg" />
            <h4 align="center">Juice</h4>
        </section>

        <section id="chocolate">
            <img src="chocolate.jpg" />
            <h4 align="center">Chocolate</h4>
        </section>

        <section id="cake">
            <img src="cake.jpg" />
            <h4 align="center">Cake</h4>
        </section>

        <section id="sweet">
            <img src="sweet.jpg" />
            <h4 align="center">Sweet</h4>
        </section>

        <section id="desert">
            <img src="desert.jpg" />
            <h4 align="center">Dessert</h4>
        </section>

    </div>
    <div id="divlogo">
        <img src="profile.png" class="logo" id="plogo" />
        <img src="cart.png" class="logo" id="clogo" />
    </div>
    <div id="pdiv">
        <img src="profile.png" align="center" style="width:70px; height: 70px; margin-left:100%;" />
        <table style="margin-top: 70%; margin-left:-50%;">
            <tr>
                <td>
                    <h5 style="font-size: 35px; margin-bottom: 40px; font-style:italic; color: black; text-transform: capitalize;"><?php echo $_POST['name']; ?></h5>
                </td>
            </tr>
            <tr style="margin-top: -5%;">
                <td>
                    <h5 style="font-size: 20px; margin-top:1px;"><?php echo $_POST['mobile']; ?></h5>
                </td>
            </tr>
            <tr style="margin-top:-5%;">
                <td>
                    <h5 style="font-size: 20px; margin-top:-6px;"><?php echo $_POST['idno']; ?></h5>
                </td>
            </tr>
        </table>
    </div>
    <div id="cdiv" style="display: none;">
        <div id="dt">
            <p id="divthough" style="z-index:12000; position:absolute; left:40%; color: #f8f8f7; font-size: 300%; transform: rotate(5deg);">opps!!..Your Plate is empty</p>
        </div>
        <img id="cimg" src="cimg1.jpg" />
        <button id="x">X</button>
        <form action="bill.php" method="POST">
            <input type="text" id="ndata" name="ndata" style="display: none;" value="<?php echo $_POST['name'] ?>" />
            <input type="text" id="mdata" name="mdata" style="display: none;" value="<?php echo $_POST['mobile'] ?>"/>
            <input type="text" id="tdata" name="tdata" style="display: none;" />
            <input type="submit" id="order" value="Order" style="display: none;" />
        </form>
        <button id="tbutton" style="display: none;"></button>>
    </div>
    <div class="menue" id="divpizza">
        <div class="back"></div>
        <img class="divimg" src="pizza.jpg" />
        <h1 class="mhead" align="center">Pizza</h1>
        <form class="form" onsubmit="return false">
            <table>
                <tr>
                    <td>
                        <h3>Chess Pizza</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cchesspizza" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fchesspizza" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">200/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Chicken Pizza</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cchickenpizza" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fchickenpizza" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">250/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Veg Pizza</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cvegpizza" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fvegpizza" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">200/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Deep-Dish Pizza</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cdeepdishpizza" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fdeepdishpizza" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">300/-</h3>
                    </td>
                </tr>
            </table>

            <input class="button1" id="pb" type="submit" value="ADD" />
            <input class="button2" type="reset" />
        </form>
    </div>
    <div class="menue" id="divburger">
        <img class="divimg" src="burger.jpg" />
        <div class="back"></div>
        <h1 class="mhead" align="center">Burger</h1>
        <form class="form" onsubmit="return false">
            <table>
                <tr>
                    <td>
                        <h3>Paneer Burger</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cpaneerburger" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fpaneerburger" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">100/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Cheesy Burger</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="ccheesyburger" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fcheesyburger" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">120/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Aloo Tikki Burger</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="calootikkiburger" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="falootikkiburger" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">150/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Chicken Burger</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cchickenburger" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fchickenburger" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">200/-</h3>
                    </td>
                </tr>
            </table>

            <input class="button1" id="bb" type="submit" value="ADD" />
            <input class="button2" type="reset" />
        </form>
    </div>
    <div class="menue" id="divsandwitch">
        <img class="divimg" src="sandwitch.jpg" />
        <div class="back"></div>
        <h1 class="mhead" align="center">Sandwich</h1>
        <form class="form" onsubmit="return false">
            <table>
                <tr>
                    <td>
                        <h3>Paneer Sandwich</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cpaneersandwich" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fpaneersandwich" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">50/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Veg Masala Sandwich</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cvegmasalasandwich" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fvegmasalasandwich" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">80/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Chocolate Sandwich</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="chocolatesandwich" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fhocolatesandwich" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">100/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Egg Sandwich</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="ceggsandwich" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="feggsandwich" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">150/-</h3>
                    </td>
                </tr>
            </table>

            <input class="button1" id="sb" type="submit" value="ADD" />
            <input class="button2" type="reset" />
        </form>
    </div>
    <div class="menue" id="divcoffie">
        <img class="divimg" src="coffie.jpg" />
        <div class="back"></div>
        <h1 class="mhead" align="center">Coffie</h1>
        <form class="form" onsubmit="return false">
            <table>
                <tr>
                    <td>
                        <h3>Affogata Coffee</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="caffogotacoffee" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="faffogotacoffee" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">100/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Cappuccino</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="ccappuccino" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fcappuccino" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">120/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Cold Cofiee</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="ccoldcoffee" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fcoldcoffee" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">150/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Flat White</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cflatwhite" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fflatwhite" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">200/-</h3>
                    </td>
                </tr>
            </table>

            <input class="button1" id="cb" type="submit" value="ADD" />
            <input class="button2" type="reset" />
        </form>
    </div>
    <div class="menue" id="divcake">
        <img class="divimg" src="cake.jpg" />
        <div class="back"></div>
        <h1 class="mhead" align="center">Cake</h1>
        <form class="form" onsubmit="return false">
            <table>
                <tr>
                    <td>
                        <h3>Egg Cake</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="ceggcake" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="feggcake" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">200/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Ice Cake</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cicecake" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="ficecake" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">250/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Pound Cake</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cpoundcake" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fpoundcake" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">300/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Chiffon Cake</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cchiffoncake" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fchiffoncake" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">400/-</h3>
                    </td>
                </tr>
            </table>

            <input class="button1" id="cakeb" type="submit" value="ADD" />
            <input class="button2" type="reset" />
        </form>
    </div>
    <div class="menue" id="divchocolate">
        <img class="divimg" src="chocolate.jpg" />
        <div class="back"></div>
        <h1 class="mhead" align="center">Chocolate</h1>
        <form class="form" onsubmit="return false">
            <table>
                <tr>
                    <td>
                        <h3>Swiss Milk</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cswissmilk" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fswissmilk" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">60/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>White Chocolate</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cwhitechocolate" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fwhitechocolate" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">80/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Caremal</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="ccaremal" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fcaremal" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">100/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Dark Chocolate</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cdarkchocolate" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fdarkchocolate" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">120/-</h3>
                    </td>
                </tr>
            </table>

            <input class="button1" id="chocolateb" type="submit" value="ADD" />
            <input class="button2" type="reset" />
        </form>
    </div>
    <div class="menue" id="divcoc">
        <img class="divimg" src="coc.jpg" />
        <div class="back"></div>
        <h1 class="mhead" align="center">Soft Drink</h1>
        <form class="form" onsubmit="return false">
            <table>
                <tr>
                    <td>
                        <h3>Cocacola</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="ccocacola" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fcocacola" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">30/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Pepsi-cola</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cpepsicola" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fpepsicola" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">30/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Mountain Dew</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cmountaindew" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fmountaindew" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">30/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Sprite</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="csprite" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fsprite" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">30/-</h3>
                    </td>
                </tr>
            </table>

            <input class="button1" id="cocb" type="submit" value="ADD" />
            <input class="button2" type="reset" />
        </form>
    </div>
    <div class="menue" id="divdesert">
        <img class="divimg" src="desert.jpg" />
        <div class="back"></div>
        <h1 class="mhead" align="center">Dessert</h1>
        <form class="form" onsubmit="return false">
            <table>
                <tr>
                    <td>
                        <h3>Pound</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cpound" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fpound" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">100/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Red Velvet</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="credvelvet" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fredvelvet" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">150/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Sponge Cake</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cspongecake" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fspongecake" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">200/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Chiffon Cake</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cchiffoncake" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fchiffoncake" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">200/-</h3>
                    </td>
                </tr>
            </table>

            <input class="button1" id="desertb" type="submit" value="ADD" />
            <input class="button2" type="reset" />
        </form>
    </div>
    <div class="menue" id="divfrenchtost">
        <img class="divimg" src="frenchtost.jpg" />
        <div class="back"></div>
        <h1 class="mhead" align="center">French Toast</h1>
        <form class="form" onsubmit="return false">
            <table>
                <tr>
                    <td>
                        <h3>Challah Toast</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cchallahtoast" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fchallahtoast" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">130/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Chocolate Toast</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cchocolatetoast" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fchocolatetoast" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">130/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Corn Toast</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="ccorntoast" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fcorntoast" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">150/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Cinnamon sugar</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="ccinnamonsugar" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fcinnamonsugar" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">200/-</h3>
                    </td>
                </tr>
            </table>

            <input class="button1" id="fb" type="submit" value="ADD" />
            <input class="button2" type="reset" />
        </form>
    </div>
    <div class="menue" id="divicecream">
        <img class="divimg" src="icecream.jpg" />
        <div class="back"></div>
        <h1 class="mhead" align="center">Icecream</h1>
        <form class="form" onsubmit="return false">
            <table>
                <tr>
                    <td>
                        <h3>Vanilla </h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cvanilla" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fvanilla" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">100/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Chocolate</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cchocolate" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fchocolate" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">120/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Buttered</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cbuttered" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fbuttered" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">120/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Strawberry</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cstrawberry" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fstrawberry" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">150/-</h3>
                    </td>
                </tr>
            </table>

            <input class="button1" id="ib" type="submit" value="ADD" />
            <input class="button2" type="reset" />
        </form>
    </div>
    <div class="menue" id="divjuice">
        <img class="divimg" src="juice.jpg" />
        <div class="back"></div>
        <h1 class="mhead" align="center">Juice</h1>
        <form class="form" onsubmit="return false">
            <table>
                <tr>
                    <td>
                        <h3>Mango Juice</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cmangojuice" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fmangojuice" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">40/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Apple Juice</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="capplejuice" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fapplejuice" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">40/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Strawberry Juice</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cstrawberryjuice" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fstrawberryjuice" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">60/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Cocktail</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="ccocktail" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fcocktail" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">100/-</h3>
                    </td>
                </tr>
            </table>

            <input class="button1" id="jb" type="submit" value="ADD" />
            <input class="button2" type="reset" />
        </form>
    </div>
    <div class="menue" id="divnoddles">
        <img class="divimg" src="noddles.jpg" />
        <div class="back"></div>
        <h1 class="mhead" align="center">Noddles</h1>
        <form class="form" onsubmit="return false">
            <table>
                <tr>
                    <td>
                        <h3>Veg Noddles</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cvegnoddles" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fvegnoddles" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">100/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Chicken Noddles</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cchickennoddles" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fchickennoddles" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">150/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Manchurin Noddles</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cmanchurinnoddles" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fmanchurinnoddles" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">150/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Chocolate Noddles</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cchocolatenoddles" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fchocolatenoddles" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">200/-</h3>
                    </td>
                </tr>
            </table>

            <input class="button1" id="nb" type="submit" value="ADD" />
            <input class="button2" type="reset" />
        </form>
    </div>
    <div class="menue" id="divpasta">
        <img class="divimg" src="pasta.jpg" />
        <div class="back"></div>
        <h1 class="mhead" align="center">Pasta</h1>
        <form class="form" onsubmit="return false">
            <table>
                <tr>
                    <td>
                        <h3>Penne pasta</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cpennepasta" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fpennepasta" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">100/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Pappardelle</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cpappardelle" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fpappardelle" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">150/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Veg Pasta</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cvegpasta" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fvegpasta" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">200/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Deep-Dish Pasta</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cdeepdishpasta" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fdeepdishpasta" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">200/-</h3>
                    </td>
                </tr>
            </table>

            <input class="button1" id="pastab" type="submit" value="ADD" />
            <input class="button2" type="reset" />
        </form>
    </div>
    <div class="menue" id="divsalad">
        <img class="divimg" src="salad.jpg" />
        <div class="back"></div>
        <h1 class="mhead" align="center">Salad</h1>
        <form class="form" onsubmit="return false">
            <table>
                <tr>
                    <td>
                        <h3>Green salad</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cgreensalad" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fgreensalad" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">110/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Fruit salads</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cfruitsalad" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="ffruitsalad" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">120/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Bound salad</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cboundsalad" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fboundsalad" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">150/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Dinner salad</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cdinnersalad" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fdinnersalad" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">200/-</h3>
                    </td>
                </tr>
            </table>

            <input class="button1" id="saladb" type="submit" value="ADD" />
            <input class="button2" type="reset" />
        </form>
    </div>
    <div class="menue" id="divsup">
        <img class="divimg" src="sup.jpg" />
        <div class="back"></div>
        <h1 class="mhead" align="center">Sup</h1>
        <form class="form" onsubmit="return false">
            <table>
                <tr>
                    <td>
                        <h3>Veg sup</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cvegsup" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fvegsup" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">50/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Chicken sup</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cchickensup" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fchickensup" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">80/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Tomato sup</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="ctomatosup" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="ftomatosup" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">50/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Corn sup</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="ccornsup" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fcornsup" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">100/-</h3>
                    </td>
                </tr>
            </table>

            <input class="button1" id="supb" type="submit" value="ADD" />
            <input class="button2" type="reset" />
        </form>
    </div>
    <div class="menue" id="divsweet">
        <img class="divimg" src="sweet.jpg" />
        <div class="back"></div>
        <h1 class="mhead" align="center">Sweets</h1>
        <form class="form" onsubmit="return false">
            <table>
                <tr>
                    <td>
                        <h3>Kaju</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="ckaju" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fkaju" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">100/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Shahi tukda</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cshahitukda" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fshahitukda" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">150/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Gulab jamun</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cgulabjamun" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fgulabjamun" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">200/-</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Modak</h3>
                    </td>
                    <td><input class="checkbox" type="checkbox" id="cmodak" /></td>
                    <td>
                        <input class="feild" type="number" placeholder="Qt" id="fmodak" />
                    </td>
                    <td>
                        <h3 style="margin-left:20px; margin-top:25%;">200/-</h3>
                    </td>
                </tr>
            </table>

            <input class="button1" id="sweetb" type="submit" value="ADD" />
            <input class="button2" type="reset" />
        </form>
    </div>
    <div id="pmenue">
        <p id="though">!! Food tastes better when you eat it with your family!!</p>
    </div>



</body>

</html>