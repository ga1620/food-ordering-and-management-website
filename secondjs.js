$(document).ready(function() {

    var total = 0;

    $("#burger").click(function() {
        $("#divburger").show();
        $("#divcake").hide();
        $("#divchocolate").hide();
        $("#divcoc").hide();
        $("#divcoffie").hide();
        $("#divdesert").hide();
        $("#divfrenchtost").hide();
        $("#divicecream").hide();
        $("#divjuice").hide();
        $("#divnoddles").hide();
        $("#divpasta").hide();
        $("#divpizza").hide();
        $("#divsalad").hide();
        $("#divsandwitch").hide();
        $("#divsup").hide();
        $("#divsweet").hide();
    });
    $("#cake").click(function() {
        $("#divburger").hide();
        $("#divcake").show();
        $("#divchocolate").hide();
        $("#divcoc").hide();
        $("#divcoffie").hide();
        $("#divdesert").hide();
        $("#divfrenchtost").hide();
        $("#divicecream").hide();
        $("#divjuice").hide();
        $("#divnoddles").hide();
        $("#divpasta").hide();
        $("#divpizza").hide();
        $("#divsalad").hide();
        $("#divsandwitch").hide();
        $("#divsup").hide();
        $("#divsweet").hide();
    });
    $("#chocolate").click(function() {
        $("#divburger").hide();
        $("#divcake").hide();
        $("#divchocolate").show();
        $("#divcoc").hide();
        $("#divcoffie").hide();
        $("#divdesert").hide();
        $("#divfrenchtost").hide();
        $("#divicecream").hide();
        $("#divjuice").hide();
        $("#divnoddles").hide();
        $("#divpasta").hide();
        $("#divpizza").hide();
        $("#divsalad").hide();
        $("#divsandwitch").hide();
        $("#divsup").hide();
        $("#divsweet").hide();
    });
    $("#coc").click(function() {
        $("#divburger").hide();
        $("#divcake").hide();
        $("#divchocolate").hide();
        $("#divcoc").show();
        $("#divcoffie").hide();
        $("#divdesert").hide();
        $("#divfrenchtost").hide();
        $("#divicecream").hide();
        $("#divjuice").hide();
        $("#divnoddles").hide();
        $("#divpasta").hide();
        $("#divpizza").hide();
        $("#divsalad").hide();
        $("#divsandwitch").hide();
        $("#divsup").hide();
        $("#divsweet").hide();
    });
    $("#coffie").click(function() {
        $("#divburger").hide();
        $("#divcake").hide();
        $("#divchocolate").hide();
        $("#divcoc").hide();
        $("#divcoffie").show();
        $("#divdesert").hide();
        $("#divfrenchtost").hide();
        $("#divicecream").hide();
        $("#divjuice").hide();
        $("#divnoddles").hide();
        $("#divpasta").hide();
        $("#divpizza").hide();
        $("#divsalad").hide();
        $("#divsandwitch").hide();
        $("#divsup").hide();
        $("#divsweet").hide();
    });
    $("#desert").click(function() {
        $("#divburger").hide();
        $("#divcake").hide();
        $("#divchocolate").hide();
        $("#divcoc").hide();
        $("#divcoffie").hide();
        $("#divdesert").show();
        $("#divfrenchtost").hide();
        $("#divicecream").hide();
        $("#divjuice").hide();
        $("#divnoddles").hide();
        $("#divpasta").hide();
        $("#divpizza").hide();
        $("#divsalad").hide();
        $("#divsandwitch").hide();
        $("#divsup").hide();
        $("#divsweet").hide();
    });
    $("#frenchtost").click(function() {
        $("#divburger").hide();
        $("#divcake").hide();
        $("#divchocolate").hide();
        $("#divcoc").hide();
        $("#divcoffie").hide();
        $("#divdesert").hide();
        $("#divfrenchtost").show();
        $("#divicecream").hide();
        $("#divjuice").hide();
        $("#divnoddles").hide();
        $("#divpasta").hide();
        $("#divpizza").hide();
        $("#divsalad").hide();
        $("#divsandwitch").hide();
        $("#divsup").hide();
        $("#divsweet").hide();
    });
    $("#icecream").click(function() {
        $("#divburger").hide();
        $("#divcake").hide();
        $("#divchocolate").hide();
        $("#divcoc").hide();
        $("#divcoffie").hide();
        $("#divdesert").hide();
        $("#divfrenchtost").hide();
        $("#divicecream").show();
        $("#divjuice").hide();
        $("#divnoddles").hide();
        $("#divpasta").hide();
        $("#divpizza").hide();
        $("#divsalad").hide();
        $("#divsandwitch").hide();
        $("#divsup").hide();
        $("#divsweet").hide();
    });
    $("#juice").click(function() {
        $("#divburger").hide();
        $("#divcake").hide();
        $("#divchocolate").hide();
        $("#divcoc").hide();
        $("#divcoffie").hide();
        $("#divdesert").hide();
        $("#divfrenchtost").hide();
        $("#divicecream").hide();
        $("#divjuice").show();
        $("#divnoddles").hide();
        $("#divpasta").hide();
        $("#divpizza").hide();
        $("#divsalad").hide();
        $("#divsandwitch").hide();
        $("#divsup").hide();
        $("#divsweet").hide();
    });
    $("#noddles").click(function() {
        $("#divburger").hide();
        $("#divcake").hide();
        $("#divchocolate").hide();
        $("#divcoc").hide();
        $("#divcoffie").hide();
        $("#divdesert").hide();
        $("#divfrenchtost").hide();
        $("#divicecream").hide();
        $("#divjuice").hide();
        $("#divnoddles").show();
        $("#divpasta").hide();
        $("#divpizza").hide();
        $("#divsalad").hide();
        $("#divsandwitch").hide();
        $("#divsup").hide();
        $("#divsweet").hide();
    });
    $("#pasta").click(function() {
        $("#divburger").hide();
        $("#divcake").hide();
        $("#divchocolate").hide();
        $("#divcoc").hide();
        $("#divcoffie").hide();
        $("#divdesert").hide();
        $("#divfrenchtost").hide();
        $("#divicecream").hide();
        $("#divjuice").hide();
        $("#divnoddles").hide();
        $("#divpasta").show();
        $("#divpizza").hide();
        $("#divsalad").hide();
        $("#divsandwitch").hide();
        $("#divsup").hide();
        $("#divsweet").hide();
    });
    $("#pizza").click(function() {
        $("#divburger").hide();
        $("#divcake").hide();
        $("#divchocolate").hide();
        $("#divcoc").hide();
        $("#divcoffie").hide();
        $("#divdesert").hide();
        $("#divfrenchtost").hide();
        $("#divicecream").hide();
        $("#divjuice").hide();
        $("#divnoddles").hide();
        $("#divpasta").hide();
        $("#divpizza").show();
        $("#divsalad").hide();
        $("#divsandwitch").hide();
        $("#divsup").hide();
        $("#divsweet").hide();
    });
    $("#salad").click(function() {
        $("#divburger").hide();
        $("#divcake").hide();
        $("#divchocolate").hide();
        $("#divcoc").hide();
        $("#divcoffie").hide();
        $("#divdesert").hide();
        $("#divfrenchtost").hide();
        $("#divicecream").hide();
        $("#divjuice").hide();
        $("#divnoddles").hide();
        $("#divpasta").hide();
        $("#divpizza").hide();
        $("#divsalad").show();
        $("#divsandwitch").hide();
        $("#divsup").hide();
        $("#divsweet").hide();
    });
    $("#sandwitch").click(function() {
        $("#divburger").hide();
        $("#divcake").hide();
        $("#divchocolate").hide();
        $("#divcoc").hide();
        $("#divcoffie").hide();
        $("#divdesert").hide();
        $("#divfrenchtost").hide();
        $("#divicecream").hide();
        $("#divjuice").hide();
        $("#divnoddles").hide();
        $("#divpasta").hide();
        $("#divpizza").hide();
        $("#divsalad").hide();
        $("#divsandwitch").show();
        $("#divsup").hide();
        $("#divsweet").hide();
    });
    $("#sup").click(function() {
        $("#divburger").hide();
        $("#divcake").hide();
        $("#divchocolate").hide();
        $("#divcoc").hide();
        $("#divcoffie").hide();
        $("#divdesert").hide();
        $("#divfrenchtost").hide();
        $("#divicecream").hide();
        $("#divjuice").hide();
        $("#divnoddles").hide();
        $("#divpasta").hide();
        $("#divpizza").hide();
        $("#divsalad").hide();
        $("#divsandwitch").hide();
        $("#divsup").show();
        $("#divsweet").hide();
    });

    $("#sweet").click(function() {
        $("#divburger").hide();
        $("#divcake").hide();
        $("#divchocolate").hide();
        $("#divcoc").hide();
        $("#divcoffie").hide();
        $("#divdesert").hide();
        $("#divfrenchtost").hide();
        $("#divicecream").hide();
        $("#divjuice").hide();
        $("#divnoddles").hide();
        $("#divpasta").hide();
        $("#divpizza").hide();
        $("#divsalad").hide();
        $("#divsandwitch").hide();
        $("#divsup").hide();
        $("#divsweet").show();
    });
    $("#plogo").mouseenter(function() {
        $("#pdiv").show();
    });

    $("#plogo").mouseleave(function() {
        $("#pdiv").hide();
    });
    $('input[type="checkbox"]').click(function() {
        ///////////pizza
        $("#pb").click(function() {
            if ($("#cchesspizza").prop("checked") == true && $("#fchesspizza").val()) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Chesspizza              Qunt = ' + ($("#fchesspizza").val()) + "    Amount = " + (($("#fchesspizza").val()) * 200) + " /-" + "<p>");
                total = total + (($("#fchesspizza").val()) * 200);
            }
            if ($("#cchickenpizza").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Chickenpizza          Qunt = ' + ($("#fchickenpizza").val()) + "    Amount = " + (($("#fchickenpizza").val()) * 250) + " /-" + "<p>");
                total = total + (($("#fchickenpizza").val()) * 250);
            }
            if ($("#cvegpizza").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Vegpizza                 Qunt = ' + ($("#fvegpizza").val()) + "    Amount = " + (($("#fvegpizza").val()) * 200) + " /-" + "<p>");
                total = total + (($("#fvegpizza").val()) * 200);

            }
            if ($("#cdeepdishpizza").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Deepdishpizza        Qunt = ' + ($("#fdeepdishpizza").val()) + "    Amount = " + (($("#fdeepdishpizza").val()) * 300) + " /-" + "<p>");
                total = total + (($("#fdeepdishpizza").val()) * 300);
            }
            $("#cimg").css("filter", "brightness(50%)");
            $("#divpizza").hide();
            $(".form")[0].reset();
            $("#dt").hide();
            $("#tbutton").show();
            $("#order").show();


        });
        //////////burger
        $("#bb").click(function() {
            if ($("#cpaneerburger").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Paneerburger          Qunt = ' + ($("#fpaneerburger").val()) + "    Amount = " + (($("#fpaneerburger").val()) * 100) + " /-" + "<p>");
                total = total + (($("#fpaneerburger").val()) * 100);
            }
            if ($("#ccheesyburger").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Cheesyburger         Qunt = ' + ($("#fcheesyburger").val()) + "    Amount = " + (($("#fcheesyburger").val()) * 120) + " /-" + "<p>");
                total = total + (($("#fcheesyburger").val()) * 120);
            }
            if ($("#calootikkiburger").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Alootikkiburger      Qunt = ' + ($("#falootikkiburger").val()) + "    Amount = " + (($("#falootikkiburger").val()) * 150) + " /-" + "<p>");
                total = total + (($("#falootikkiburger").val()) * 150);
            }
            if ($("#cchickenburger").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Chickenburger        Qunt = ' + ($("#fchickenburger").val()) + "    Amount = " + (($("#fchickenburger").val()) * 200) + " /-" + "<p>");
                total = total + (($("#fchickenburger").val()) * 200);
            }
            $("#cimg").css("filter", "brightness(50%)");
            $("#divburger").hide();
            $(".form")[1].reset();
            $("#dt").hide();
            $("#tbutton").show();
            $("#order").show();


        });

        /////////sandwich
        $("#sb").click(function() {
            if ($("#cpaneersandwich").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Paneersandwich      Qunt = ' + ($("#fpaneersandwich").val()) + "    Amount = " + (($("#fpaneersandwich").val()) * 50) + " /-" + "<p>");
                total = total + (($("#fpaneersandwich").val()) * 50);
            }
            if ($("#cvegmasalasandwich").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Vegmasalasandwich    Qunt = ' + ($("#fvegmasalasandwich").val()) + "    Amount = " + (($("#fvegmasalasandwich").val()) * 80) + " /-" + "<p>");
                total = total + (($("#fvegmasalasandwich").val()) * 80);
            }
            if ($("#cchocolatesandwich").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Chocolatesandwich    Qunt = ' + ($("#fchocolatesandwich").val()) + "    Amount = " + (($("#fchocolatesandwich").val()) * 100) + " /-" + "<p>");
                total = total + (($("#fchocolatesandwich").val()) * 100);
            }
            if ($("#ceggsandwich").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Eggsandwich          Qunt = ' + ($("#feggsandwich").val()) + "    Amount = " + (($("#feggsandwich").val()) * 150) + " /-" + "<p>");
                total = total + (($("#feggsandwich").val()) * 150);
            }
            $("#cimg").css("filter", "brightness(50%)");
            $("#divsandwitch").hide();
            $(".form")[2].reset();
            $("#dt").hide();
            $("#tbutton").show();
            $("#order").show();


        });

        /////////coffie
        $("#cb").click(function() {
            if ($("#caffogotacoffee").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Affogotacoffee       Qunt = ' + ($("#faffogotacoffee").val()) + "    Amount = " + (($("#faffogotacoffee").val()) * 100) + " /-" + "<p>");
                total = total + (($("#faffogotacoffee").val()) * 100);
            }
            if ($("#ccappuccino").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Cappuccino            Qunt = ' + ($("#fcappuccino").val()) + "    Amount = " + (($("#fcappuccino").val()) * 120) + " /-" + "<p>");
                total = total + (($("#fcappuccino").val()) * 120);
            }
            if ($("#ccoldcoffee").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Coldcoffee             Qunt = ' + ($("#fcoldcoffee").val()) + "    Amount = " + (($("#fcoldcoffee").val()) * 150) + " /-" + "<p>");
                total = total + (($("#fcoldcoffee").val()) * 150);
            }
            if ($("#cflatwhite").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Flatwhite                Qunt = ' + ($("#fflatwhite").val()) + "    Amount = " + (($("#fflatwhite").val()) * 200) + " /-" + "<p>");
                total = total + (($("#fflatwhite").val()) * 200);
            }
            $("#cimg").css("filter", "brightness(50%)");
            $("#divcoffie").hide();
            $(".form")[3].reset();
            $("#dt").hide();
            $("#tbutton").show();
            $("#order").show();


        });

        ///////////cake
        $("#cakeb").click(function() {
            if ($("#ceggcake").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Eggcake                  Qunt = ' + ($("#feggcake").val()) + "    Amount = " + (($("#feggcake").val()) * 200) + " /-" + "<p>");
                total = total + (($("#feggcake").val()) * 200);
            }
            if ($("#cicecake").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Icecake                    Qunt = ' + ($("#ficecake").val()) + "    Amount = " + (($("#ficecake").val()) * 250) + " /-" + "<p>");
                total = total + (($("#ficecake").val()) * 250);
            }
            if ($("#cpoundcake").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Poundcake               Qunt = ' + ($("#fpoundcake").val()) + "    Amount = " + (($("#fpoundcake").val()) * 300) + " /-" + "<p>");
                total = total + (($("#fpoundcake").val()) * 300);
            }
            if ($("#cchiffoncake").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Chiffoncake             Qunt = ' + ($("#fchiffoncake").val()) + "    Amount = " + (($("#fchiffoncake").val()) * 400) + " /-" + "<p>");
                total = total + (($("#fchiffoncake").val()) * 400);
            }
            $("#cimg").css("filter", "brightness(50%)");
            $("#divcake").hide();
            $(".form")[4].reset();
            $("#dt").hide();
            $("#tbutton").show();
            $("#order").show();


        });

        ///////////chocolate
        $("#chocolateb").click(function() {
            if ($("#cswissmilk").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Swissmilk                Qunt = ' + ($("#fswissmilk").val()) + "    Amount = " + (($("#fswissmilk").val()) * 60) + " /-" + "<p>");
                total = total + (($("#fswissmilk").val()) * 60);
            }
            if ($("#cwhitechocolate").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Whitechocolate        Qunt = ' + ($("#fwhitechocolate").val()) + "    Amount = " + (($("#fwhitechocolate").val()) * 80) + " /-" + "<p>");
                total = total + (($("#fwhitechocolate").val()) * 80);
            }
            if ($("#ccaremal").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * caremal                    Qunt = ' + ($("#fcaremal").val()) + "    Amount = " + (($("#fcaremal").val()) * 100) + " /-" + "<p>");
                total = total + (($("#fcaremal").val()) * 100);
            }
            if ($("#cdarkchocolate").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Darkchocolate         Qunt = ' + ($("#fdarkchocolate").val()) + "    Amount = " + (($("#fdarkchocolate").val()) * 120) + " /-" + "<p>");
                total = total + (($("#fdarkchocolate").val()) * 120);
            }
            $("#cimg").css("filter", "brightness(50%)");
            $("#divchocolate").hide();
            $(".form")[5].reset();
            $("#dt").hide();
            $("#tbutton").show();
            $("#order").show();


        });

        /////////////softdrink
        $("#cocb").click(function() {
            if ($("#ccocacola").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Cocacola                  Qunt = ' + ($("#fcocacola").val()) + "    Amount = " + (($("#fcocacola").val()) * 30) + " /-" + "<p>");
                total = total + (($("#fcocacola").val()) * 30);
            }
            if ($("#cpepsicola").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Pepsicola                 Qunt = ' + ($("#fpepsicola").val()) + "    Amount = " + (($("#fpepsicola").val()) * 30) + " /-" + "<p>");
                total = total + (($("#fpepsicola").val()) * 30);
            }
            if ($("#cmountaindew").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Mountaindew          Qunt = ' + ($("#fmountaindew").val()) + "    Amount = " + (($("#fmountaindew").val()) * 30) + " /-" + "<p>");
                total = total + (($("#fmountaindew").val()) * 30);
            }
            if ($("#csprite").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Sprite                      Qunt = ' + ($("#fsprite").val()) + "    Amount = " + (($("#fsprite").val()) * 30) + " /-" + "<p>");
                total = total + (($("#fsprite").val()) * 30);
            }
            $("#cimg").css("filter", "brightness(50%)");
            $("#divcoc").hide();
            $(".form")[6].reset();
            $("#dt").hide();
            $("#tbutton").show();
            $("#order").show();


        });

        ////////////desert
        $("#desertb").click(function() {
            if ($("#cpound").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Pound                     Qunt = ' + ($("#fpound").val()) + "    Amount = " + (($("#fpound").val()) * 100) + " /-" + "<p>");
                total = total + (($("#fpound").val()) * 100);
            }
            if ($("#credvelvet").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Redvelvet               Qunt = ' + ($("#fredvelvet").val()) + "    Amount = " + (($("#fredvelvet").val()) * 150) + " /-" + "<p>");
                total = total + (($("#fredvelvet").val()) * 150);
            }
            if ($("#cspongecake").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Spongecake            Qunt = ' + ($("#fspongecake").val()) + "    Amount = " + (($("#fspongecake").val()) * 200) + " /-" + "<p>");
                total = total + (($("#fspongecake").val()) * 200);
            }
            if ($("#cchiffoncake").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Chiffoncake          Qunt = ' + ($("#fchiffoncake").val()) + "    Amount = " + (($("#fchiffoncake").val()) * 200) + " /-" + "<p>");
                total = total + (($("#fchiffoncake").val()) * 200);
            }
            $("#cimg").css("filter", "brightness(50%)");
            $("#divdesert").hide();
            $(".form")[7].reset();
            $("#dt").hide();
            $("#tbutton").show();
            $("#order").show();


        });

        ////////////frenchtost
        $("#fb").click(function() {
            if ($("#cchallahtoast").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Challahtoast            Qunt = ' + ($("#fchallahtoast").val()) + "    Amount = " + (($("#fchallahtoast").val()) * 130) + " /-" + "<p>");
                total = total + (($("#fchallahtoast").val()) * 130);
            }
            if ($("#cchocolatetoast").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Chocolatetoast          Qunt = ' + ($("#fchocolatetoast").val()) + "    Amount = " + (($("#fchocolatetoast").val()) * 130) + " /-" + "<p>");
                total = total + (($("#fchocolatetoast").val()) * 130);
            }
            if ($("#ccorntoast").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Corntoast                 Qunt = ' + ($("#fcorntoast").val()) + "    Amount = " + (($("#fcorntoast").val()) * 150) + " /-" + "<p>");
                total = total + (($("#fcorntoast").val()) * 150);
            }
            if ($("#ccinnamonsugar").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Cinnamonsugar        Qunt = ' + ($("#fcinnamonsugar").val()) + "    Amount = " + (($("#fcinnamonsugar").val()) * 200) + " /-" + "<p>");
                total = total + (($("#fcinnamonsugar").val()) * 200);
            }
            $("#cimg").css("filter", "brightness(50%)");
            $("#divfrenchtost").hide();
            $(".form")[8].reset();
            $("#dt").hide();
            $("#tbutton").show();
            $("#order").show();


        });

        /////////////icecream
        $("#ib").click(function() {
            if ($("#cvanilla").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Vanilla                     Qunt = ' + ($("#fvanilla").val()) + "    Amount = " + (($("#fvanilla").val()) * 100) + " /-" + "<p>");
                total = total + (($("#fvanilla").val()) * 100);
            }
            if ($("#cchocolate").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Chocolate                Qunt = ' + ($("#fchocolate").val()) + "    Amount = " + (($("#fchocolate").val()) * 120) + " /-" + "<p>");
                total = total + (($("#fchocolate").val()) * 120);
            }
            if ($("#cbuttered").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Buttered                  Qunt = ' + ($("#fbuttered").val()) + "    Amount = " + (($("#fbuttered").val()) * 120) + " /-" + "<p>");
                total = total + (($("#fbuttered").val()) * 120);
            }
            if ($("#cstrawberry").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Strawberry              Qunt = ' + ($("#fstrawberry").val()) + "    Amount = " + (($("#fstrawberry").val()) * 150) + " /-" + "<p>");
                total = total + (($("#fstrawberry").val()) * 150);
            }
            $("#cimg").css("filter", "brightness(50%)");
            $("#divicecream").hide();
            $(".form")[9].reset();
            $("#dt").hide();
            $("#tbutton").show();
            $("#order").show();


        });

        ////////////juice
        $("#jb").click(function() {
            if ($("#cmangojuice").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Mangojuice               Qunt = ' + ($("#fmangojuice").val()) + "    Amount = " + (($("#fmangojuice").val()) * 40) + " /-" + "<p>");
                total = total + (($("#fmangojuice").val()) * 40);
            }
            if ($("#capplejuice").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Applejuice                Qunt = ' + ($("#fapplejuice").val()) + "    Amount = " + (($("#fapplejuice").val()) * 40) + " /-" + "<p>");
                total = total + (($("#fapplejuice").val()) * 40);
            }
            if ($("#cstrawberryjuice").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Strawberryjuice        Qunt = ' + ($("#fstrawberryjuice").val()) + "    Amount = " + (($("#fstrawberryjuice").val()) * 60) + " /-" + "<p>");
                total = total + (($("#fstrawberryjuice").val()) * 60);
            }
            if ($("#ccocktail").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Cocktail                   Qunt = ' + ($("#fcocktail").val()) + "    Amount = " + (($("#fcocktail").val()) * 100) + " /-" + "<p>");
                total = total + (($("#fcocktail").val()) * 100);
            }
            $("#cimg").css("filter", "brightness(50%)");
            $("#divjuice").hide();
            $(".form")[10].reset();
            $("#dt").hide();
            $("#tbutton").show();
            $("#order").show();


        });

        //////////////noddles
        $("#nb").click(function() {
            if ($("#cvegnoddles").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Vegnoddles              Qunt = ' + ($("#fvegnoddles").val()) + "    Amount = " + (($("#fvegnoddles").val()) * 100) + " /-" + "<p>");
                total = total + (($("#fvegnoddles").val()) * 100);
            }
            if ($("#cchickennoddles").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Chickennoddles       Qunt = ' + ($("#fchickennoddles").val()) + "    Amount = " + (($("#fchickennoddles").val()) * 150) + " /-" + "<p>");
                total = total + (($("#fchickennoddles").val()) * 150);
            }
            if ($("#cmanchurinnoddles").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Manchurinnoddles   Qunt = ' + ($("#fmanchurinnoddles").val()) + "    Amount = " + (($("#fmanchurinnoddles").val()) * 150) + " /-" + "<p>");
                total = total + (($("#fmanchurinnoddles").val()) * 150);
            }
            if ($("#cchocolatenoddles").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Chocolatenoddles    Qunt = ' + ($("#fchocolatenoddles").val()) + "    Amount = " + (($("#fchocolatenoddles").val()) * 200) + " /-" + "<p>");
                total = total + (($("#fchocolatenoddles").val()) * 200);
            }
            $("#cimg").css("filter", "brightness(50%)");
            $("#divnoddles").hide();
            $(".form")[11].reset();
            $("#dt").hide();
            $("#tbutton").show();
            $("#order").show();


        });

        ////////////pasta
        /* $("#pastab").click(function() {
             if ($("#cswissmilk").prop("checked") == true) {
                 $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * swissmilk            Qunt = ' + ($("#fswissmilk").val()) + "    Amount = " + (($("#fswissmilk").val()) * 100) + " /-" + "<p>");
             }
             if ($("#cwhitechocolate").prop("checked") == true) {
                 $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * whitechocolate          Qunt = ' + ($("#fwhitechocolate").val()) + "    Amount = " + (($("#fwhitechocolate").val()) * 120) + " /-" + "<p>");
             }
             if ($("#ccaremal").prop("checked") == true) {
                 $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * caremal                 Qunt = ' + ($("#fcaremal").val()) + "    Amount = " + (($("#fcaremal").val()) * 200) + " /-" + "<p>");
             }
             if ($("#cchiffoncake").prop("checked") == true) {
                 $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * chiffoncake        Qunt = ' + ($("#fchiffoncake").val()) + "    Amount = " + (($("#fchiffoncake").val()) * 300) + " /-" + "<p>");
             }
             $("#cimg").css("filter", "brightness(50%)");
             $("#divburger").hide();
             $(".form")[12].reset();
             $("#dt").hide();
             
$("#tbutton").show();
$("#order").show();
             

         });  */

        ///////////salad
        $("#saladb").click(function() {
            if ($("#cgreensalad").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Greensalad                Qunt = ' + ($("#fgreensalad").val()) + "    Amount = " + (($("#fgreensalad").val()) * 110) + " /-" + "<p>");
                total = total + (($("#fgreensalad").val()) * 110);
            }
            if ($("#cfruitsalad").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Fruitsalad                 Qunt = ' + ($("#ffruitsalad").val()) + "    Amount = " + (($("#ffruitsalad").val()) * 120) + " /-" + "<p>");
                total = total + (($("#ffruitsalad").val()) * 120);
            }
            if ($("#cboundsalad").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Boundsalad              Qunt = ' + ($("#fboundsalad").val()) + "    Amount = " + (($("#fboundsalad").val()) * 150) + " /-" + "<p>");
                total = total + (($("#fboundsalad").val()) * 150);
            }
            if ($("#cdinnersalad").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Dinnersalad             Qunt = ' + ($("#fdinnersalad").val()) + "    Amount = " + (($("#fdinnersalad").val()) * 200) + " /-" + "<p>");
                total = total + (($("#fdinnersalad").val()) * 200);
            }
            $("#cimg").css("filter", "brightness(50%)");
            $("#divsalad").hide();
            $(".form")[13].reset();
            $("#dt").hide();
            $("#tbutton").show();
            $("#order").show();


        });

        //////////sup
        $("#supb").click(function() {
            if ($("#cvegsup").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Vegsup                     Qunt = ' + ($("#fvegsup").val()) + "    Amount = " + (($("#fvegsup").val()) * 50) + " /-" + "<p>");
                total = total + (($("#fvegsup").val()) * 50);
            }
            if ($("#cchickensup").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Chickensup              Qunt = ' + ($("#fchickensup").val()) + "    Amount = " + (($("#fchickensup").val()) * 80) + " /-" + "<p>");
                total = total + (($("#fchickensup").val()) * 80);
            }
            if ($("#ctomatosup").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Tomatosup                Qunt = ' + ($("#ftomatosup").val()) + "    Amount = " + (($("#ftomatosup").val()) * 50) + " /-" + "<p>");
                total = total + (($("#ftomatosup").val()) * 50);
            }
            if ($("#ccornsup").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Cornsup                   Qunt = ' + ($("#fcornsup").val()) + "    Amount = " + (($("#fcornsup").val()) * 100) + " /-" + "<p>");
                total = total + (($("#fcornsup").val()) * 100);
            }
            $("#cimg").css("filter", "brightness(50%)");
            $("#divsup").hide();
            $(".form")[14].reset();
            $("#dt").hide();
            $("#tbutton").show();
            $("#order").show();


        });

        ///////////sweet
        $("#sweetb").click(function() {
            if ($("#ckaju").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Kaju                         Qunt = ' + ($("#fkaju").val()) + "    Amount = " + (($("#fkaju").val()) * 100) + " /-" + "<p>");
                total = total + (($("#fkaju").val()) * 100);
            }
            if ($("#cshahitukda").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Shahitukda               Qunt = ' + ($("#fshahitukda").val()) + "    Amount = " + (($("#fshahitukda").val()) * 150) + " /-" + "<p>");
                total = total + (($("#fshahitukda").val()) * 150);
            }
            if ($("#cgulabjamun").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Gulabjamun             Qunt = ' + ($("#fgulabjamun").val()) + "    Amount = " + (($("#fgulabjamun").val()) * 200) + " /-" + "<p>");
                total = total + (($("#fgulabjamun").val()) * 200);
            }
            if ($("#cmodak").prop("checked") == true) {
                $("#cdiv").after('<br />' + '<p class="p" style="  white-space: pre; color:whitesmoke; position:absolute; left:42%; margin-top:80px; display:none; font-size: 35px; text-shadow: 1px 1px #ffca40;"> * Modak                     Qunt = ' + ($("#fmodak").val()) + "    Amount = " + (($("#fmodak").val()) * 200) + " /-" + "<p>");
                total = total + (($("#fmodak").val()) * 200);
            }
            $("#cimg").css("filter", "brightness(50%)");
            $("#divsweet").hide();
            $(".form")[15].reset();
            $("#dt").hide();
            $("#tbutton").show();
            $("#order").show();



        });
    });

    $("#clogo").click(function() {
        $("#cdiv").show();
        $(".p").css("z-index", "15000");
        $(".p").show();
        $("#tdata").val(total);
        $("#tbutton").html(total + " /-");

    });

    $("#x").click(function() {
        $("#cdiv").hide();
        $(".p").hide();
    });
    console.log($("#pb").val());

});