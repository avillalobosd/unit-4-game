var player1 = "";
var player2 = "";
var paso = "0";
var vs = {
    p1: " ",
    oponent1: " ",
    oponent2: " ",
    oponent3: " "
};

var goku = {
    name: "Goku",
    attack: 100,
    defense: 100
};

var freezer = {
    name: "Freezer",
    attack: 10,
    defense: 200
};

var piccolo = {
    name: "Piccolo",
    attack: 5,
    defense: 15
};

var yamsha = {
    name: "Yamsha",
    attack: 2,
    defense: 100
};



function llenado() {

    $(".n1t").text(goku.name);
    $(".a1t").text(goku.attack);
    $(".d1t").text(goku.defense);
    $(".n2t").text(freezer.name);
    $(".a2t").text(freezer.attack);
    $(".d2t").text(freezer.defense);
    $(".n3t").text(piccolo.name);
    $(".a3t").text(piccolo.attack);
    $(".d3t").text(piccolo.defense);
    $(".n4t").text(yamsha.name);
    $(".a4t").text(yamsha.attack);
    $(".d4t").text(yamsha.defense);
    $(".instructions").text("Choose your First Oponent");

}

$(".BotonStart").click(function () {

    $(".botoninicio").hide();
    $(".tituloSelect").css("visibility", "visible");
    $(".titulosuperior").css("margin-top", "120px");
    // $(".player2").css("margin-left", "130px");
    $(".attack1").css("visibility", "visible");
    $(".defense1").css("visibility", "visible");
    $(".defense1").css("visibility", "visible");
    $(".statust").css("background-color", "#74C365");
    $(".statust").css("color", "black");

});


$(".gokuintro").click(function () {
    // $(".gokuintro").css("visibility", "hidden");
    $(".tituloSelect").hide();
    $(".gokup1").css("visibility", "visible");
    $(".hide").css("display", "block");
    player1 = goku.name;
    vs.p1 = goku.name;
    $(".statust1").css("background-color", "yellow");
    $(".statust1").css("color", "black");
    $(".statust1").text("YOUR CHARACTER");
    paso++;
    llenado();
});

$(".freezerintro").click(function () {
    // $(".gokuintro").css("visibility", "hidden");
    $(".tituloSelect").hide();
    $(".freezerp1").css("visibility", "visible");
    $(".hide").css("display", "block");
    player1 = freezer.name;
    vs.p1 = freezer.name;
    $(".statust2").css("background-color", "yellow");
    $(".statust2").text("YOUR CHARACTER");
    paso++;
    llenado();
});

$(".piccolointro").click(function () {
    $(".tituloSelect").hide();
    $(".piccolop1").css("visibility", "visible");
    $(".hide").css("display", "block");
    player1 = piccolo.name;
    vs.p1 = piccolo.name;
    $(".statust3").css("background-color", "yellow");
    $(".statust3").text("YOUR CHARACTER");
    paso++;
    llenado();
});

$(".yamshaintro").click(function () {
    $(".tituloSelect").hide();
    $(".yamshap1").css("visibility", "visible");
    $(".hide").css("display", "block");
    player1 = yamsha.name;
    vs.p1 = yamsha.name;
    $(".statust4").css("background-color", "yellow");
    $(".statust4").text("YOUR CHARACTER");
    paso++;
    llenado();
});

$(".statust1").click(function () {
    if (paso == 1) {
        if (player1 == "Goku") {
            $(".instructions").text("You Can´t Choose your Own Character as Oponent, please choose other.");
        } else {
            $(".gokup2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".instructions").text("Click Attack Button");
            $(".z1t").text("FIGHTING!");
            $(".statust1").css("background-color", "yellow");
            vs.oponent1 = goku.name;
            if (vs.p1 == "Freezer") {
                $(".z3t").text("Waiting..");
                $(".z4t").text("Waiting..");
            } else if (vs.p1 == "Piccolo") {
                $(".z2t").text("Waiting..");
                $(".z4t").text("Waiting..");
            } else if (vs.p1 == "Yamsha") {
                $(".z2t").text("Waiting..");
                $(".z3t").text("Waiting..");
            }
            paso++;
        }

    }
    if (paso == 3) {
        if (player1 == "Goku") {
            $(".instructions").text("You Can´t Choose your Own Character as Oponent, please choose other.");
        } else if (vs.oponent1=="Goku"){
            $(".instructions").text("You already Fight Against this oponent, please chose other");
    
        } else if (player1=="Freezer" && vs.oponent1=="Piccolo"){
            vs.oponent2="Goku";
            vs.oponent3="Yamsha";
            $(".gokup2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z1t").text("FIGHTING!");
            $(".statust1").css("background-color", "yellow");
            $(".z4t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;

    
        } else if (player1=="Freezer" && vs.oponent1=="Yamsha"){
            vs.oponent2="Goku";
            vs.oponent3="Piccolo";
            $(".gokup2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z1t").text("FIGHTING!");
            $(".statust1").css("background-color", "yellow");
            $(".z3t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        }else if (player1=="Yamsha" && vs.oponent1=="Piccolo"){
            vs.oponent2="Goku";
            vs.oponent3="Freezer";
            $(".gokup2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z1t").text("FIGHTING!");
            $(".statust1").css("background-color", "yellow");
            $(".z2t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        } else if (player1=="Yamsha" && vs.oponent1=="Freezer"){
            vs.oponent2="Goku";
            vs.oponent3="Piccolo";
            $(".gokup2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z1t").text("FIGHTING!");
            $(".statust1").css("background-color", "yellow");
            $(".z3t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        }else if (player1=="Piccolo" && vs.oponent1=="Freezer"){
            vs.oponent2="Goku";
            vs.oponent3="Yamsha";
            $(".gokup2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z1t").text("FIGHTING!");
            $(".statust1").css("background-color", "yellow");
            $(".z4t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        } else if (player1=="Piccolo" && vs.oponent1=="Yamsha"){
            vs.oponent2="Goku";
            vs.oponent3="Freezer";
            $(".gokup2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z1t").text("FIGHTING!");
            $(".statust1").css("background-color", "yellow");
            $(".z2t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        }

    }



});
$(".statust2").click(function () {
    if (paso == 1) {
        if (player1 == "Freezer") {
            $(".instructions").text("You Can't Choose your Own Character as Oponent, please choose other.");
        } else {
            $(".freezerp2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".instructions").text("Click Attack Button");
            $(".z2t").text("FIGHTING!");
            $(".statust2").css("background-color", "yellow");
            vs.oponent1 = freezer.name;
            if (vs.p1 == "Goku") {
                $(".z3t").text("Waiting..");
                $(".z4t").text("Waiting..");
            } else if (vs.p1 == "Piccolo") {
                $(".z1t").text("Waiting..");
                $(".z4t").text("Waiting..");
            } else if (vs.p1 == "Yamsha") {
                $(".z1t").text("Waiting..");
                $(".z3t").text("Waiting..");
            }
            paso++;
        }
    }
    if (paso == 3) {
        if (player1 == "Freezer") {
            $(".instructions").text("You Can´t Choose your Own Character as Oponent, please choose other.");
        } else if (vs.oponent1=="Freezer"){
            $(".instructions").text("You already Fight Against this oponent, please chose other");
    
        } else if (player1=="Goku" && vs.oponent1=="Piccolo"){
            vs.oponent2="Freezer";
            vs.oponent3="Yamsha";
            $(".freezerp2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z2t").text("FIGHTING!");
            $(".statust2").css("background-color", "yellow");
            $(".z4t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        } else if (player1=="Goku" && vs.oponent1=="Yamsha"){
            vs.oponent2="Freezer";
            vs.oponent3="Piccolo";
            $(".freezerp2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z2t").text("FIGHTING!");
            $(".statust2").css("background-color", "yellow");
            $(".z3t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        }else if (player1=="Yamsha" && vs.oponent1=="Piccolo"){
            vs.oponent2="Freezer";
            vs.oponent3="Goku";
            $(".freezerp2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z2t").text("FIGHTING!");
            $(".statust2").css("background-color", "yellow");
            $(".z1t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        } else if (player1=="Yamsha" && vs.oponent1=="Goku"){
            vs.oponent2="Freezer";
            vs.oponent3="Piccolo";
            $(".freezerp2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z2t").text("FIGHTING!");
            $(".statust2").css("background-color", "yellow");
            $(".z3t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        }else if (player1=="Piccolo" && vs.oponent1=="Goku"){
            vs.oponent2="Freezer";
            vs.oponent3="Yamsha";
            $(".freezerp2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z2t").text("FIGHTING!");
            $(".statust2").css("background-color", "yellow");
            $(".z4t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        } else if (player1=="Piccolo" && vs.oponent1=="Yamsha"){
            vs.oponent2="Freezer";
            vs.oponent3="Goku";
            $(".freezerp2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z2t").text("FIGHTING!");
            $(".statust2").css("background-color", "yellow");
            $(".z1t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        }

    }

});
$(".statust3").click(function () {
    if (paso == 1) {
        if (player1 == "Piccolo") {
            $(".instructions").text("You Can't Choose your Own Character as Oponent, please choose other.");

        } else {
            $(".piccolop2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".instructions").text("Click Attack Button");
            $(".z3t").text("FIGHTING!");
            $(".statust3").css("background-color", "yellow");
            vs.oponent1 = piccolo.name;
            if (vs.p1 == "Goku") {
                $(".z2t").text("Waiting..");
                $(".z4t").text("Waiting..");
            } else if (vs.p1 == "Freezer") {
                $(".z1t").text("Waiting..");
                $(".z4t").text("Waiting..");
            } else if (vs.p1 == "Yamsha") {
                $(".z1t").text("Waiting..");
                $(".z2t").text("Waiting..");
            }
            paso++;
        }
    }
    if (paso == 3) {
        if (player1 == "Piccolo") {
            $(".instructions").text("You Can´t Choose your Own Character as Oponent, please choose other.");
        } else if (vs.oponent1=="Piccolo"){
            $(".instructions").text("You already Fight Against this oponent, please chose other");
    
        } else if (player1=="Freezer" && vs.oponent1=="Goku"){
            vs.oponent2="Piccolo";
            vs.oponent3="Yamsha";
            $(".piccolop2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z3t").text("FIGHTING!");
            $(".statust3").css("background-color", "yellow");
            $(".z4t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        } else if (player1=="Freezer" && vs.oponent1=="Yamsha"){
            vs.oponent2="Piccolo";
            vs.oponent3="Goku";
            $(".piccolop2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z3t").text("FIGHTING!");
            $(".statust3").css("background-color", "yellow");
            $(".z1t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        }else if (player1=="Yamsha" && vs.oponent1=="Goku"){
            vs.oponent2="Piccolo";
            vs.oponent3="Freezer";
            $(".piccolop2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z3t").text("FIGHTING!");
            $(".statust3").css("background-color", "yellow");
            $(".z2t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        } else if (player1=="Yamsha" && vs.oponent1=="Freezer"){
            vs.oponent2="Piccolo";
            vs.oponent3="Goku";
            $(".piccolop2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z3t").text("FIGHTING!");
            $(".statust3").css("background-color", "yellow");
            $(".z1t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        }else if (player1=="Goku" && vs.oponent1=="Freezer"){
            vs.oponent2="Piccolo";
            vs.oponent3="Yamsha";
            $(".piccolop2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z3t").text("FIGHTING!");
            $(".statust3").css("background-color", "yellow");
            $(".z4t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        } else if (player1=="Goku" && vs.oponent1=="Yamsha"){
            vs.oponent2="Piccolo";
            vs.oponent3="Freezer";
            $(".piccolop2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z3t").text("FIGHTING!");
            $(".statust3").css("background-color", "yellow");
            $(".z2t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        }

    }

});
$(".statust4").click(function () {
    if (paso == 1) {
        if (player1 == "Yamsha") {
            $(".instructions").text("You Can't Choose your Own Character as Oponent, please choose other.");

        } else {
            $(".yamshap2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".instructions").text("Click Attack Button");
            $(".z4t").text("FIGHTING!");
            $(".statust4").css("background-color", "yellow");
            vs.oponent1 = yamsha.name;
            if (vs.p1 == "Goku") {
                $(".z2t").text("Waiting..");
                $(".z3t").text("Waiting..");
            } else if (vs.p1 == "Freezer") {
                $(".z1t").text("Waiting..");
                $(".z3t").text("Waiting..");
            } else if (vs.p1 == "Piccolo") {
                $(".z1t").text("Waiting..");
                $(".z2t").text("Waiting..");
            }
            paso++;
        }
    }
    if (paso == 3) {
        if (player1 == "Yamsha") {
            $(".instructions").text("You Can´t Choose your Own Character as Oponent, please choose other.");
        } else if (vs.oponent1=="Yamsha"){
            $(".instructions").text("You already Fight Against this oponent, please chose other");
    
        } else if (player1=="Freezer" && vs.oponent1=="Piccolo"){
            vs.oponent2="Yamsha";
            vs.oponent3="Goku";
            $(".yamshap2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z4t").text("FIGHTING!");
            $(".statust4").css("background-color", "yellow");
            $(".z1t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        } else if (player1=="Freezer" && vs.oponent1=="Goku"){
            vs.oponent2="Yamsha";
            vs.oponent3="Piccolo";
            $(".yamshap2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z4t").text("FIGHTING!");
            $(".statust4").css("background-color", "yellow");
            $(".z3t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
            
    
        }else if (player1=="Goku" && vs.oponent1=="Piccolo"){
            vs.oponent2="Yamsha";
            vs.oponent3="Freezer";
            $(".yamshap2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z4t").text("FIGHTING!");
            $(".statust4").css("background-color", "yellow");
            $(".z2t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        } else if (player1=="Goku" && vs.oponent1=="Freezer"){
            vs.oponent2="Yamsha";
            vs.oponent3="Piccolo";
            $(".yamshap2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z4t").text("FIGHTING!");
            $(".statust4").css("background-color", "yellow");
            $(".z3t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        }else if (player1=="Piccolo" && vs.oponent1=="Freezer"){
            vs.oponent2="Yamsha";
            vs.oponent3="Goku";
            $(".yamshap2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z4t").text("FIGHTING!");
            $(".statust4").css("background-color", "yellow");
            $(".z1t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        } else if (player1=="Piccolo" && vs.oponent1=="Goku"){
            vs.oponent2="Yamsha";
            vs.oponent3="Freezer";
            $(".yamshap2").css("visibility", "visible");
            $(".attackbtn").css("visibility", "visible");
            $(".z4t").text("FIGHTING!");
            $(".statust4").css("background-color", "yellow");
            $(".z2t").text("Waiting..");
            $(".instructions").text("Click Attack Button");
            paso++;
    
        }

    }

});






$(".attackbtn").click(function () {
    if (paso == 2) {
        if (vs.p1 == "Goku") {
            if (vs.oponent1 == "Freezer") {
                freezer.defense = freezer.defense - goku.attack;
                goku.attack = goku.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a1t").text(goku.attack);
                $(".d2t").text(freezer.defense);
                if (freezer.defense <= 0) {
                    $(".instructions").text("Goku Attack Increase to: " + goku.attack + " and You just Defeat Freezer! Select Second Opponent");
                    $(".freezerp2").css("visibility","hidden");
                    $(".z2t").text("Defeated..!");
                    $(".statust2").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    $(".z3t").text("Click here to choose!");
                    $(".z4t").text("Click here to choose!");
                    paso++;
                } else {
                    goku.defense = goku.defense - freezer.attack;
                    if(goku.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent1);
                        $(".d1t").text(goku.defense);
                        $(".statust1").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {$(".instructions").text("Goku Attack Increase to: " + goku.attack + " Goku Defense decrease to: " + goku.defense + " Freezer Defense decrease to: " + freezer.defense);
                    $(".d1t").text(goku.defense);}

                }


            } else if (vs.oponent1 == "Piccolo") {
                piccolo.defense = piccolo.defense - goku.attack;
                goku.attack = goku.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a1t").text(goku.attack);
                $(".d3t").text(piccolo.defense);
                if (piccolo.defense <= 0) {
                    $(".instructions").text("Goku Attack Increase to: " + goku.attack + " and You just Defeat Piccolo! Select Second Opponent");
                    $(".piccolop2").css("visibility","hidden");
                    $(".z3t").text("Defeated..!");
                    $(".statust3").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    $(".z2t").text("Click here to choose!");
                    $(".z4t").text("Click here to choose!");
                    paso++;
                } else {
                    goku.defense = goku.defense - piccolo.attack;
                    if(goku.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent1);
                        $(".d1t").text(goku.defense);
                        $(".statust1").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {$(".instructions").text("Goku Attack Increase to: " + goku.attack + " Goku Defense decrease to: " + goku.defense + " Piccolo Defense decrease to: " + piccolo.defense);
                    $(".d1t").text(goku.defense);}

                }

            } else if (vs.oponent1 == "Yamsha") {

                yamsha.defense = yamsha.defense - goku.attack;
                goku.attack = goku.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a1t").text(goku.attack);
                $(".d4t").text(yamsha.defense);
                if (yamsha.defense <= 0) {
                    $(".instructions").text("Goku Attack Increase to: " + goku.attack + " and You just Defeat Yamsha! Select Second Opponent");
                    $(".yamshap2").css("visibility","hidden");
                    $(".z4t").text("Defeated..!");
                    $(".statust4").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    $(".z2t").text("Click here to choose!");
                    $(".z3t").text("Click here to choose!");
                    paso++;
                } else {
                    goku.defense = goku.defense - yamsha.attack;
                    if(goku.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent1);
                        $(".d1t").text(goku.defense);
                        $(".statust1").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Goku Attack Increase to: " + goku.attack + " Goku Defense decrease to: " + goku.defense + " Yamsha Defense decrease to: " + yamsha.defense);
                    $(".d1t").text(goku.defense);}

                }


            }

        }
        if (vs.p1 == "Freezer") {
            if (vs.oponent1 == "Goku") {
                goku.defense = goku.defense - freezer.attack;
                freezer.attack = freezer.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a2t").text(freezer.attack);
                $(".d1t").text(goku.defense);
                if (goku.defense <= 0) {
                    $(".instructions").text("Freezer Attack Increase to: " + freezer.attack + " and You just Defeat Goku! Select Second Opponent");
                    $(".gokup2").css("visibility","hidden");
                    $(".z1t").text("Defeated..!");
                    $(".statust1").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    $(".z3t").text("Click here to choose!");
                    $(".z4t").text("Click here to choose!");
                    paso++;
                } else {
                    freezer.defense = freezer.defense - goku.attack;
                    if(freezer.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent1);
                        $(".d2t").text(freezer.defense);
                        $(".statust2").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Freezer Attack Increase to: " + freezer.attack + " Freezer Defense decrease to: " + freezer.defense + " Goku Defense decrease to: " + goku.defense);
                    $(".d2t").text(freezer.defense);}

                }


            } else if (vs.oponent1 == "Piccolo") {
                piccolo.defense = piccolo.defense - freezer.attack;
                freezer.attack = freezer.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a2t").text(freezer.attack);
                $(".d3t").text(piccolo.defense);
                if (piccolo.defense <= 0) {
                    $(".instructions").text("Freezer Attack Increase to: " + freezer.attack + " and You just Defeat Piccolo! Select Second Opponent");
                    $(".piccolop2").css("visibility","hidden");
                    $(".z3t").text("Defeated..!");
                    $(".statust3").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    $(".z1t").text("Click here to choose!");
                    $(".z4t").text("Click here to choose!");
                    paso++;
                } else {
                    freezer.defense = freezer.defense - piccolo.attack;
                    if(freezer.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent1);
                        $(".d2t").text(freezer.defense);
                        $(".statust2").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Freezer Attack Increase to: " + freezer.attack + " Freezer Defense decrease to: " + freezer.defense + " Piccolo Defense decrease to: " + piccolo.defense);
                    $(".d2t").text(freezer.defense);}
                }

            } else if (vs.oponent1 == "Yamsha") {

                yamsha.defense = yamsha.defense - freezer.attack;
                freezer.attack = freezer.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a2t").text(freezer.attack);
                $(".d4t").text(yamsha.defense);
                if (yamsha.defense <= 0) {
                    $(".instructions").text("Freezer Attack Increase to: " + freezer.attack + " and You just Defeat Yamsha! Select Second Opponent");
                    $(".yamshap2").css("visibility","hidden");
                    $(".z4t").text("Defeated..!");
                    $(".statust4").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    $(".z1t").text("Click here to choose!");
                    $(".z3t").text("Click here to choose!");
                    paso++;
                } else {
                    freezer.defense = freezer.defense - yamsha.attack;
                    if(freezer.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent1);
                        $(".d2t").text(freezer.defense);
                        $(".statust2").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Freezer Attack Increase to: " + freezer.attack + " Freezer Defense decrease to: " + freezer.defense + " Yamsha Defense decrease to: " + yamsha.defense);
                    $(".d2t").text(freezer.defense);}

                }


            }
        }
        if (vs.p1 == "Piccolo") {
            if (vs.oponent1 == "Goku") {
                goku.defense = goku.defense - piccolo.attack;
                piccolo.attack = piccolo.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a3t").text(piccolo.attack);
                $(".d1t").text(goku.defense);
                if (goku.defense <= 0) {
                    $(".instructions").text("Piccolo Attack Increase to: " + piccolo.attack + " and You just Defeat Goku! Select Second Opponent");
                    $(".gokup2").css("visibility","hidden");
                    $(".z1t").text("Defeated..!");
                    $(".statust1").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    $(".z2t").text("Click here to choose!");
                    $(".z4t").text("Click here to choose!");
                    paso++;
                } else {
                    piccolo.defense = piccolo.defense - goku.attack;
                    if(piccolo.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent1);
                        $(".d3t").text(piccolo.defense);
                        $(".statust3").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Piccolo Attack Increase to: " + piccolo.attack + " Piccolo Defense decrease to: " + piccolo.defense + " Goku Defense decrease to: " + goku.defense);
                    $(".d3t").text(piccolo.defense);}

                }


            } else if (vs.oponent1 == "Freezer") { 
                freezer.defense = freezer.defense - piccolo.attack;
                piccolo.attack = piccolo.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a3t").text(piccolo.attack);
                $(".d2t").text(freezer.defense);
                if (freezer.defense <= 0) {
                    $(".instructions").text("Piccolo Attack Increase to: " + piccolo.attack + " and You just Defeat Freezer! Select Second Opponent");
                    $(".freezerp2").css("visibility","hidden");
                    $(".z2t").text("Defeated..!");
                    $(".statust2").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    $(".z1t").text("Click here to choose!");
                    $(".z4t").text("Click here to choose!");
                    paso++;
                } else {
                    piccolo.defense = piccolo.defense - freezer.attack;
                    if(piccolo.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent1);
                        $(".d3t").text(piccolo.defense);
                        $(".statust3").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Piccolo Attack Increase to: " + piccolo.attack + " Piccolo Defense decrease to: " + piccolo.defense + " Freezer Defense decrease to: " + freezer.defense);
                    $(".d3t").text(piccolo.defense);}

            }
        } else if (vs.oponent1 == "Yamsha") {

                yamsha.defense = yamsha.defense - piccolo.attack;
                piccolo.attack = piccolo.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a3t").text(piccolo.attack);
                $(".d4t").text(yamsha.defense);
                if (yamsha.defense <= 0) {
                    $(".instructions").text("Piccolo Attack Increase to: " + piccolo.attack + " and You just Defeat Yamsha! Select Second Opponent");
                    $(".yamshap2").css("visibility","hidden");
                    $(".z4t").text("Defeated..!");
                    $(".statust4").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    $(".z1t").text("Click here to choose!");
                    $(".z2t").text("Click here to choose!");
                    paso++;
                } else {
                    piccolo.defense = piccolo.defense - yamsha.attack;
                    if(piccolo.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent1);
                        $(".d3t").text(piccolo.defense);
                        $(".statust3").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Piccolo Attack Increase to: " + piccolo.attack + " Piccolo Defense decrease to: " + piccolo.defense + " Yamsha Defense decrease to: " + yamsha.defense);
                    $(".d3t").text(piccolo.defense);}

                }


            }
        }
        if (vs.p1 == "Yamsha") {
            if (vs.oponent1 == "Goku") {
                goku.defense = goku.defense - yamsha.attack;
                yamsha.attack = yamsha.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a4t").text(yamsha.attack);
                $(".d1t").text(goku.defense);
                if (goku.defense <= 0) {
                    $(".instructions").text("Yamsha Attack Increase to: " + yamsha.attack + " and You just Defeat Goku! Select Second Opponent");
                    $(".gokup2").css("visibility","hidden");
                    $(".z1t").text("Defeated..!");
                    $(".statust1").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    $(".z2t").text("Click here to choose!");
                    $(".z3t").text("Click here to choose!");
                    paso++;
                } else {
                    yamsha.defense = yamsha.defense - goku.attack;
                    if(yamsha.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent1);
                        $(".d4t").text(yamsha.defense);
                        $(".statust4").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Yamsha Attack Increase to: " + yamsha.attack + " Yamsha Defense decrease to: " + yamsha.defense + " Goku Defense decrease to: " + goku.defense);
                    $(".d4t").text(yamsha.defense);}

                }

            } else if (vs.oponent1 == "Freezer") {
                freezer.defense = freezer.defense - yamsha.attack;
                yamsha.attack = yamsha.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a4t").text(yamsha.attack);
                $(".d2t").text(freezer.defense);
                if (freezer.defense <= 0) {
                    $(".instructions").text("Yamsha Attack Increase to: " + yamsha.attack + " and You just Defeat Freezer! Select Second Opponent");
                    $(".freezerp2").css("visibility","hidden");
                    $(".z2t").text("Defeated..!");
                    $(".statust2").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    $(".z1t").text("Click here to choose!");
                    $(".z3t").text("Click here to choose!");
                    paso++;
                } else {
                    yamsha.defense = yamsha.defense - freezer.attack;
                    if(yamsha.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent1);
                        $(".d4t").text(yamsha.defense);
                        $(".statust4").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Yamsha Attack Increase to: " + yamsha.attack + " Yamsha Defense decrease to: " + yamsha.defense + " Freezer Defense decrease to: " + freezer.defense);
                    $(".d4t").text(yamsha.defense);}

            }

            } else if (vs.oponent1 == "Piccolo") {
                piccolo.defense = piccolo.defense - yamsha.attack;
                yamsha.attack = yamsha.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a4t").text(yamsha.attack);
                $(".d3t").text(piccolo.defense);
                if (piccolo.defense <= 0) {
                    $(".instructions").text("Yamsha Attack Increase to: " + yamsha.attack + " and You just Defeat Piccolo! Select Second Opponent");
                    $(".piccolop2").css("visibility","hidden");
                    $(".z3t").text("Defeated..!");
                    $(".statust3").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    $(".z1t").text("Click here to choose!");
                    $(".z2t").text("Click here to choose!");
                    paso++;
                } else {
                    yamsha.defense = yamsha.defense - piccolo.attack;
                    if(yamsha.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent1);
                        $(".d4t").text(yamsha.defense);
                        $(".statust4").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden"); 
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Yamsha Attack Increase to: " + yamsha.attack + " Yamsha Defense decrease to: " + yamsha.defense + " Yamsha Defense decrease to: " + yamsha.defense);
                    $(".d4t").text(yamsha.defense);}
                }

            }

        }


    }

    if (paso == 4) {
        if (vs.p1 == "Goku") {
            if (vs.oponent2 == "Freezer") {
                freezer.defense = freezer.defense - goku.attack;
                goku.attack = goku.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a1t").text(goku.attack);
                $(".d2t").text(freezer.defense);
                if (freezer.defense <= 0) {
                    $(".instructions").text("Goku Attack Increase to: " + goku.attack + " and You just Defeat Freezer! Prepare for Final Battle");
                    $(".freezerp2").css("visibility","hidden");
                    $(".z2t").text("Defeated..!");
                    $(".statust2").css("background-color", "red");
                    $(".finalbtn").css("visibility","visible");
                    $(".attackbtn").css("visibility","hidden");

                    paso++;
                    if(vs.oponent3=="Goku"){
                    $(".z1t").text("Fighting!");
                    $(".statust1").css("background-color", "yellow");
                    }
                    if(vs.oponent3=="Freezer"){
                        $(".z2t").text("Fighting!");
                        $(".statust2").css("background-color", "yellow");
                        }
                    if(vs.oponent3=="Piccolo"){
                        $(".z3t").text("Fighting!");
                        $(".statust3").css("background-color", "yellow");
                        }
                    if(vs.oponent3=="Yamsha"){
                        $(".z4t").text("Fighting!");
                        $(".statust4").css("background-color", "yellow");
                        }
                } else {
                    goku.defense = goku.defense - freezer.attack;
                    if(goku.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent2);
                        $(".d1t").text(goku.defense);
                        $(".statust1").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {$(".instructions").text("Goku Attack Increase to: " + goku.attack + " Goku Defense decrease to: " + goku.defense + " Freezer Defense decrease to: " + freezer.defense);
                    $(".d1t").text(goku.defense);}

                }


            } else if (vs.oponent2 == "Piccolo") {
                piccolo.defense = piccolo.defense - goku.attack;
                goku.attack = goku.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a1t").text(goku.attack);
                $(".d3t").text(piccolo.defense);
                if (piccolo.defense <= 0) {
                    $(".instructions").text("Goku Attack Increase to: " + goku.attack + " and You just Defeat Piccolo! Prepare for Final Battlent");
                    $(".piccolop2").css("visibility","hidden");
                    $(".z3t").text("Defeated..!");
                    $(".statust3").css("background-color", "red");
                    $(".finalbtn").css("visibility","visible");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                    if(vs.oponent3=="Goku"){
                        $(".z1t").text("Fighting!");
                        $(".statust1").css("background-color", "yellow");
                        }
                        if(vs.oponent3=="Freezer"){
                            $(".z2t").text("Fighting!");
                            $(".statust2").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Piccolo"){
                            $(".z3t").text("Fighting!");
                            $(".statust3").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Yamsha"){
                            $(".z4t").text("Fighting!");
                            $(".statust4").css("background-color", "yellow");
                            }
                } else {
                    goku.defense = goku.defense - piccolo.attack;
                    if(goku.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent2);
                        $(".d1t").text(goku.defense);
                        $(".statust1").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {$(".instructions").text("Goku Attack Increase to: " + goku.attack + " Goku Defense decrease to: " + goku.defense + " Piccolo Defense decrease to: " + piccolo.defense);
                    $(".d1t").text(goku.defense);}

                }

            } else if (vs.oponent2 == "Yamsha") {

                yamsha.defense = yamsha.defense - goku.attack;
                goku.attack = goku.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a1t").text(goku.attack);
                $(".d4t").text(yamsha.defense);
                if (yamsha.defense <= 0) {
                    $(".instructions").text("Goku Attack Increase to: " + goku.attack + " and You just Defeat Yamsha! Prepare for Final Battle");
                    $(".yamshap2").css("visibility","hidden");
                    $(".z4t").text("Defeated..!");
                    $(".statust4").css("background-color", "red");
                    $(".finalbtn").css("visibility","visible");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                    if(vs.oponent3=="Goku"){
                        $(".z1t").text("Fighting!");
                        $(".statust1").css("background-color", "yellow");
                        }
                        if(vs.oponent3=="Freezer"){
                            $(".z2t").text("Fighting!");
                            $(".statust2").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Piccolo"){
                            $(".z3t").text("Fighting!");
                            $(".statust3").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Yamsha"){
                            $(".z4t").text("Fighting!");
                            $(".statust4").css("background-color", "yellow");
                            }
                } else {
                    goku.defense = goku.defense - yamsha.attack;
                    if(goku.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent2);
                        $(".d1t").text(goku.defense);
                        $(".statust1").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Goku Attack Increase to: " + goku.attack + " Goku Defense decrease to: " + goku.defense + " Yamsha Defense decrease to: " + yamsha.defense);
                    $(".d1t").text(goku.defense);}

                }


            }

        }
        if (vs.p1 == "Freezer") {
            if (vs.oponent2 == "Goku") {
                goku.defense = goku.defense - freezer.attack;
                freezer.attack = freezer.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a2t").text(freezer.attack);
                $(".d1t").text(goku.defense);
                if (goku.defense <= 0) {
                    $(".instructions").text("Freezer Attack Increase to: " + freezer.attack + " and You just Defeat Goku! Prepare for Final Battlet");
                    $(".gokup2").css("visibility","hidden");
                    $(".z1t").text("Defeated..!");
                    $(".statust1").css("background-color", "red");
                    $(".finalbtn").css("visibility","visible");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                    if(vs.oponent3=="Goku"){
                        $(".z1t").text("Fighting!");
                        $(".statust1").css("background-color", "yellow");
                        }
                        if(vs.oponent3=="Freezer"){
                            $(".z2t").text("Fighting!");
                            $(".statust2").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Piccolo"){
                            $(".z3t").text("Fighting!");
                            $(".statust3").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Yamsha"){
                            $(".z4t").text("Fighting!");
                            $(".statust4").css("background-color", "yellow");
                            }
                } else {
                    freezer.defense = freezer.defense - goku.attack;
                    if(freezer.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent2);
                        $(".d2t").text(freezer.defense);
                        $(".statust2").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Freezer Attack Increase to: " + freezer.attack + " Freezer Defense decrease to: " + freezer.defense + " Goku Defense decrease to: " + goku.defense);
                    $(".d2t").text(freezer.defense);}

                }


            } else if (vs.oponent2 == "Piccolo") {
                piccolo.defense = piccolo.defense - freezer.attack;
                freezer.attack = freezer.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a2t").text(freezer.attack);
                $(".d3t").text(piccolo.defense);
                if (piccolo.defense <= 0) {
                    $(".instructions").text("Freezer Attack Increase to: " + freezer.attack + " and You just Defeat Piccolo! Prepare for Final Battlet");
                    $(".piccolop2").css("visibility","hidden");
                    $(".z3t").text("Defeated..!");
                    $(".statust3").css("background-color", "red");
                    $(".finalbtn").css("visibility","visible");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                    if(vs.oponent3=="Goku"){
                        $(".z1t").text("Fighting!");
                        $(".statust1").css("background-color", "yellow");
                        }
                        if(vs.oponent3=="Freezer"){
                            $(".z2t").text("Fighting!");
                            $(".statust2").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Piccolo"){
                            $(".z3t").text("Fighting!");
                            $(".statust3").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Yamsha"){
                            $(".z4t").text("Fighting!");
                            $(".statust4").css("background-color", "yellow");
                            }
                } else {
                    freezer.defense = freezer.defense - piccolo.attack;
                    if(freezer.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent2);
                        $(".d2t").text(freezer.defense);
                        $(".statust2").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Freezer Attack Increase to: " + freezer.attack + " Freezer Defense decrease to: " + freezer.defense + " Piccolo Defense decrease to: " + piccolo.defense);
                    $(".d2t").text(freezer.defense);}
                }

            } else if (vs.oponent2 == "Yamsha") {

                yamsha.defense = yamsha.defense - freezer.attack;
                freezer.attack = freezer.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a2t").text(freezer.attack);
                $(".d4t").text(yamsha.defense);
                if (yamsha.defense <= 0) {
                    $(".instructions").text("Freezer Attack Increase to: " + freezer.attack + " and You just Defeat Yamsha! Prepare for Final Battle");
                    $(".yamshap2").css("visibility","hidden");
                    $(".z4t").text("Defeated..!");
                    $(".statust4").css("background-color", "red");
                    $(".finalbtn").css("visibility","visible");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                    if(vs.oponent3=="Goku"){
                        $(".z1t").text("Fighting!");
                        $(".statust1").css("background-color", "yellow");
                        }
                        if(vs.oponent3=="Freezer"){
                            $(".z2t").text("Fighting!");
                            $(".statust2").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Piccolo"){
                            $(".z3t").text("Fighting!");
                            $(".statust3").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Yamsha"){
                            $(".z4t").text("Fighting!");
                            $(".statust4").css("background-color", "yellow");
                            }
                } else {
                    freezer.defense = freezer.defense - yamsha.attack;
                    if(freezer.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent2);
                        $(".d2t").text(freezer.defense);
                        $(".statust2").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Freezer Attack Increase to: " + freezer.attack + " Freezer Defense decrease to: " + freezer.defense + " Yamsha Defense decrease to: " + yamsha.defense);
                    $(".d2t").text(freezer.defense);}

                }


            }
        }
        if (vs.p1 == "Piccolo") {
            if (vs.oponent2 == "Goku") {
                goku.defense = goku.defense - piccolo.attack;
                piccolo.attack = piccolo.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a3t").text(piccolo.attack);
                $(".d1t").text(goku.defense);
                if (goku.defense <= 0) {
                    $(".instructions").text("Piccolo Attack Increase to: " + piccolo.attack + " and You just Defeat Goku! Prepare for Final Battle");
                    $(".gokup2").css("visibility","hidden");
                    $(".z1t").text("Defeated..!");
                    $(".statust1").css("background-color", "red");
                    $(".finalbtn").css("visibility","visible");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                    if(vs.oponent3=="Goku"){
                        $(".z1t").text("Fighting!");
                        $(".statust1").css("background-color", "yellow");
                        }
                        if(vs.oponent3=="Freezer"){
                            $(".z2t").text("Fighting!");
                            $(".statust2").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Piccolo"){
                            $(".z3t").text("Fighting!");
                            $(".statust3").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Yamsha"){
                            $(".z4t").text("Fighting!");
                            $(".statust4").css("background-color", "yellow");
                            }
                } else {
                    piccolo.defense = piccolo.defense - goku.attack;
                    if(piccolo.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent2);
                        $(".d3t").text(piccolo.defense);
                        $(".statust3").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Piccolo Attack Increase to: " + piccolo.attack + " Piccolo Defense decrease to: " + piccolo.defense + " Goku Defense decrease to: " + goku.defense);
                    $(".d3t").text(piccolo.defense);}

                }


            } else if (vs.oponent2 == "Freezer") { 
                freezer.defense = freezer.defense - piccolo.attack;
                piccolo.attack = piccolo.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a3t").text(piccolo.attack);
                $(".d2t").text(freezer.defense);
                if (freezer.defense <= 0) {
                    $(".instructions").text("Piccolo Attack Increase to: " + piccolo.attack + " and You just Defeat Freezer! Prepare for Final Battle");
                    $(".freezerp2").css("visibility","hidden");
                    $(".z2t").text("Defeated..!");
                    $(".statust2").css("background-color", "red");
                    $(".finalbtn").css("visibility","visible");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                    if(vs.oponent3=="Goku"){
                        $(".z1t").text("Fighting!");
                        $(".statust1").css("background-color", "yellow");
                        }
                        if(vs.oponent3=="Freezer"){
                            $(".z2t").text("Fighting!");
                            $(".statust2").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Piccolo"){
                            $(".z3t").text("Fighting!");
                            $(".statust3").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Yamsha"){
                            $(".z4t").text("Fighting!");
                            $(".statust4").css("background-color", "yellow");
                            }
                } else {
                    piccolo.defense = piccolo.defense - freezer.attack;
                    if(piccolo.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent2);
                        $(".d3t").text(piccolo.defense);
                        $(".statust3").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Piccolo Attack Increase to: " + piccolo.attack + " Piccolo Defense decrease to: " + piccolo.defense + " Freezer Defense decrease to: " + freezer.defense);
                    $(".d3t").text(piccolo.defense);}

            }
        } else if (vs.oponent2 == "Yamsha") {

                yamsha.defense = yamsha.defense - piccolo.attack;
                piccolo.attack = piccolo.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a3t").text(piccolo.attack);
                $(".d4t").text(yamsha.defense);
                if (yamsha.defense <= 0) {
                    $(".instructions").text("Piccolo Attack Increase to: " + piccolo.attack + " and You just Defeat Yamsha! Prepare for Final Battle");
                    $(".yamshap2").css("visibility","hidden");
                    $(".z4t").text("Defeated..!");
                    $(".statust4").css("background-color", "red");
                    $(".finalbtn").css("visibility","visible");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                    if(vs.oponent3=="Goku"){
                        $(".z1t").text("Fighting!");
                        $(".statust1").css("background-color", "yellow");
                        }
                        if(vs.oponent3=="Freezer"){
                            $(".z2t").text("Fighting!");
                            $(".statust2").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Piccolo"){
                            $(".z3t").text("Fighting!");
                            $(".statust3").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Yamsha"){
                            $(".z4t").text("Fighting!");
                            $(".statust4").css("background-color", "yellow");
                            }
                } else {
                    piccolo.defense = piccolo.defense - yamsha.attack;
                    if(piccolo.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent2);
                        $(".d3t").text(piccolo.defense);
                        $(".statust3").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Piccolo Attack Increase to: " + piccolo.attack + " Piccolo Defense decrease to: " + piccolo.defense + " Yamsha Defense decrease to: " + yamsha.defense);
                    $(".d3t").text(piccolo.defense);}

                }


            }
        }
        if (vs.p1 == "Yamsha") {
            if (vs.oponent2 == "Goku") {
                goku.defense = goku.defense - yamsha.attack;
                yamsha.attack = yamsha.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a4t").text(yamsha.attack);
                $(".d1t").text(goku.defense);
                if (goku.defense <= 0) {
                    $(".instructions").text("Yamsha Attack Increase to: " + yamsha.attack + " and You just Defeat Goku! Prepare for Final Battlet");
                    $(".gokup2").css("visibility","hidden");
                    $(".z1t").text("Defeated..!");
                    $(".statust1").css("background-color", "red");
                    $(".finalbtn").css("visibility","visible");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                    if(vs.oponent3=="Goku"){
                        $(".z1t").text("Fighting!");
                        $(".statust1").css("background-color", "yellow");
                        }
                        if(vs.oponent3=="Freezer"){
                            $(".z2t").text("Fighting!");
                            $(".statust2").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Piccolo"){
                            $(".z3t").text("Fighting!");
                            $(".statust3").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Yamsha"){
                            $(".z4t").text("Fighting!");
                            $(".statust4").css("background-color", "yellow");
                            }
                } else {
                    yamsha.defense = yamsha.defense - goku.attack;
                    if(yamsha.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent2);
                        $(".d4t").text(yamsha.defense);
                        $(".statust4").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Yamsha Attack Increase to: " + yamsha.attack + " Yamsha Defense decrease to: " + yamsha.defense + " Goku Defense decrease to: " + goku.defense);
                    $(".d4t").text(yamsha.defense);}

                }

            } else if (vs.oponent2 == "Freezer") {
                freezer.defense = freezer.defense - yamsha.attack;
                yamsha.attack = yamsha.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a4t").text(yamsha.attack);
                $(".d2t").text(freezer.defense);
                if (freezer.defense <= 0) {
                    $(".instructions").text("Yamsha Attack Increase to: " + yamsha.attack + " and You just Defeat Freezer! Prepare for Final Battlet");
                    $(".freezerp2").css("visibility","hidden");
                    $(".z2t").text("Defeated..!");
                    $(".statust2").css("background-color", "red");
                    $(".finalbtn").css("visibility","visible");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                    if(vs.oponent3=="Goku"){
                        $(".z1t").text("Fighting!");
                        $(".statust1").css("background-color", "yellow");
                        }
                        if(vs.oponent3=="Freezer"){
                            $(".z2t").text("Fighting!");
                            $(".statust2").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Piccolo"){
                            $(".z3t").text("Fighting!");
                            $(".statust3").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Yamsha"){
                            $(".z4t").text("Fighting!");
                            $(".statust4").css("background-color", "yellow");
                            }
                } else {
                    yamsha.defense = yamsha.defense - freezer.attack;
                    if(yamsha.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent2);
                        $(".d4t").text(yamsha.defense);
                        $(".statust4").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Yamsha Attack Increase to: " + yamsha.attack + " Yamsha Defense decrease to: " + yamsha.defense + " Freezer Defense decrease to: " + freezer.defense);
                    $(".d4t").text(yamsha.defense);}

            }

            } else if (vs.oponent2 == "Piccolo") {
                piccolo.defense = piccolo.defense - yamsha.attack;
                yamsha.attack = yamsha.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a4t").text(yamsha.attack);
                $(".d3t").text(piccolo.defense);
                if (piccolo.defense <= 0) {
                    $(".instructions").text("Yamsha Attack Increase to: " + yamsha.attack + " and You just Defeat Piccolo! Prepare for Final Battle");
                    $(".piccolop2").css("visibility","hidden");
                    $(".z3t").text("Defeated..!");
                    $(".statust3").css("background-color", "red");
                    $(".finalbtn").css("visibility","visible");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                    if(vs.oponent3=="Goku"){
                        $(".z1t").text("Fighting!");
                        $(".statust1").css("background-color", "yellow");
                        }
                        if(vs.oponent3=="Freezer"){
                            $(".z2t").text("Fighting!");
                            $(".statust2").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Piccolo"){
                            $(".z3t").text("Fighting!");
                            $(".statust3").css("background-color", "yellow");
                            }
                        if(vs.oponent3=="Yamsha"){
                            $(".z4t").text("Fighting!");
                            $(".statust4").css("background-color", "yellow");
                            }
                } else {
                    yamsha.defense = yamsha.defense - piccolo.attack;
                    if(yamsha.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent2);
                        $(".d4t").text(yamsha.defense);
                        $(".statust4").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden"); 
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Yamsha Attack Increase to: " + yamsha.attack + " Yamsha Defense decrease to: " + yamsha.defense + " Yamsha Defense decrease to: " + yamsha.defense);
                    $(".d4t").text(yamsha.defense);}
                }

            }

        }


    }
    if (paso == 6) {
        if (vs.p1 == "Goku") {
            if (vs.oponent3 == "Freezer") {
                $(".freezerp2").css("visibility","visible");
                freezer.defense = freezer.defense - goku.attack;
                goku.attack = goku.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a1t").text(goku.attack);
                $(".d2t").text(freezer.defense);
                if (freezer.defense <= 0) {
                    $(".instructions").text("You Win!");
                    $(".refreshbtn").css("visibility","visible");
                    $(".freezerp2").css("visibility","hidden");
                    $(".z2t").text("Defeated..!");
                    $(".statust2").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                } else {
                    goku.defense = goku.defense - freezer.attack;
                    if(goku.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent3);
                        $(".d1t").text(goku.defense);
                        $(".statust1").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {$(".instructions").text("Goku Attack Increase to: " + goku.attack + " Goku Defense decrease to: " + goku.defense + " Freezer Defense decrease to: " + freezer.defense);
                    $(".d1t").text(goku.defense);}

                }


            } else if (vs.oponent3 == "Piccolo") {
                $(".piccolop2").css("visibility","visible");
                piccolo.defense = piccolo.defense - goku.attack;
                goku.attack = goku.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a1t").text(goku.attack);
                $(".d3t").text(piccolo.defense);
                if (piccolo.defense <= 0) {
                    $(".instructions").text("You Win!");
                    $(".refreshbtn").css("visibility","visible");
                    $(".piccolop2").css("visibility","hidden");
                    $(".z3t").text("Defeated..!");
                    $(".statust3").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                } else {
                    goku.defense = goku.defense - piccolo.attack;
                    if(goku.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent3);
                        $(".d1t").text(goku.defense);
                        $(".statust1").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {$(".instructions").text("Goku Attack Increase to: " + goku.attack + " Goku Defense decrease to: " + goku.defense + " Piccolo Defense decrease to: " + piccolo.defense);
                    $(".d1t").text(goku.defense);}

                }

            } else if (vs.oponent3 == "Yamsha") {
                $(".yamshap2").css("visibility","visible");
                yamsha.defense = yamsha.defense - goku.attack;
                goku.attack = goku.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a1t").text(goku.attack);
                $(".d4t").text(yamsha.defense);
                if (yamsha.defense <= 0) {
                    $(".instructions").text("You Win!");
                    $(".refreshbtn").css("visibility","visible");
                    $(".yamshap2").css("visibility","hidden");
                    $(".z4t").text("Defeated..!");
                    $(".statust4").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                } else {
                    goku.defense = goku.defense - yamsha.attack;
                    if(goku.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent3);
                        $(".d1t").text(goku.defense);
                        $(".statust1").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Goku Attack Increase to: " + goku.attack + " Goku Defense decrease to: " + goku.defense + " Yamsha Defense decrease to: " + yamsha.defense);
                    $(".d1t").text(goku.defense);}

                }


            }

        }
        if (vs.p1 == "Freezer") {
            if (vs.oponent3 == "Goku") {
                $(".gokup2").css("visibility","visible");
                goku.defense = goku.defense - freezer.attack;
                freezer.attack = freezer.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a2t").text(freezer.attack);
                $(".d1t").text(goku.defense);
                if (goku.defense <= 0) {
                    $(".instructions").text("You Win!");
                    $(".refreshbtn").css("visibility","visible");
                    $(".gokup2").css("visibility","hidden");
                    $(".z1t").text("Defeated..!");
                    $(".statust1").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                } else {
                    freezer.defense = freezer.defense - goku.attack;
                    if(freezer.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent3);
                        $(".d2t").text(freezer.defense);
                        $(".statust2").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Freezer Attack Increase to: " + freezer.attack + " Freezer Defense decrease to: " + freezer.defense + " Goku Defense decrease to: " + goku.defense);
                    $(".d2t").text(freezer.defense);}

                }


            } else if (vs.oponent3 == "Piccolo") {
                $(".piccolop2").css("visibility","visible");
                piccolo.defense = piccolo.defense - freezer.attack;
                freezer.attack = freezer.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a2t").text(freezer.attack);
                $(".d3t").text(piccolo.defense);
                if (piccolo.defense <= 0) {
                    $(".instructions").text("You Win!");
                    $(".refreshbtn").css("visibility","visible");
                    $(".piccolop2").css("visibility","hidden");
                    $(".z3t").text("Defeated..!");
                    $(".statust3").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                } else {
                    freezer.defense = freezer.defense - piccolo.attack;
                    if(freezer.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent3);
                        $(".d2t").text(freezer.defense);
                        $(".statust2").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Freezer Attack Increase to: " + freezer.attack + " Freezer Defense decrease to: " + freezer.defense + " Piccolo Defense decrease to: " + piccolo.defense);
                    $(".d2t").text(freezer.defense);}
                }

            } else if (vs.oponent3 == "Yamsha") {
                $(".yamshap2").css("visibility","visible");
                yamsha.defense = yamsha.defense - freezer.attack;
                freezer.attack = freezer.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a2t").text(freezer.attack);
                $(".d4t").text(yamsha.defense);
                if (yamsha.defense <= 0) {
                    $(".instructions").text("You Win!");
                    $(".refreshbtn").css("visibility","visible");
                    $(".yamshap2").css("visibility","hidden");
                    $(".z4t").text("Defeated..!");
                    $(".statust4").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                } else {
                    freezer.defense = freezer.defense - yamsha.attack;
                    if(freezer.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent3);
                        $(".d2t").text(freezer.defense);
                        $(".statust2").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Freezer Attack Increase to: " + freezer.attack + " Freezer Defense decrease to: " + freezer.defense + " Yamsha Defense decrease to: " + yamsha.defense);
                    $(".d2t").text(freezer.defense);}

                }


            }
        }
        if (vs.p1 == "Piccolo") {
            if (vs.oponent3 == "Goku") {
                $(".gokup2").css("visibility","visible");
                goku.defense = goku.defense - piccolo.attack;
                piccolo.attack = piccolo.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a3t").text(piccolo.attack);
                $(".d1t").text(goku.defense);
                if (goku.defense <= 0) {
                    $(".instructions").text("You Win!");
                    $(".refreshbtn").css("visibility","visible");
                    $(".gokup2").css("visibility","hidden");
                    $(".z1t").text("Defeated..!");
                    $(".statust1").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                } else {
                    piccolo.defense = piccolo.defense - goku.attack;
                    if(piccolo.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent3);
                        $(".d3t").text(piccolo.defense);
                        $(".statust3").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Piccolo Attack Increase to: " + piccolo.attack + " Piccolo Defense decrease to: " + piccolo.defense + " Goku Defense decrease to: " + goku.defense);
                    $(".d3t").text(piccolo.defense);}

                }


            } else if (vs.oponent3 == "Freezer") {
                $(".freezerp2").css("visibility","visible"); 
                freezer.defense = freezer.defense - piccolo.attack;
                piccolo.attack = piccolo.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a3t").text(piccolo.attack);
                $(".d2t").text(freezer.defense);
                if (freezer.defense <= 0) {
                    $(".instructions").text("You Win!");
                    $(".refreshbtn").css("visibility","visible");
                    $(".freezerp2").css("visibility","hidden");
                    $(".z2t").text("Defeated..!");
                    $(".statust2").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                } else {
                    piccolo.defense = piccolo.defense - freezer.attack;
                    if(piccolo.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent3);
                        $(".d3t").text(piccolo.defense);
                        $(".statust3").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Piccolo Attack Increase to: " + piccolo.attack + " Piccolo Defense decrease to: " + piccolo.defense + " Freezer Defense decrease to: " + freezer.defense);
                    $(".d3t").text(piccolo.defense);}

            }
        } else if (vs.oponent3 == "Yamsha") {
            $(".yamshap2").css("visibility","visible");
                yamsha.defense = yamsha.defense - piccolo.attack;
                piccolo.attack = piccolo.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a3t").text(piccolo.attack);
                $(".d4t").text(yamsha.defense);
                if (yamsha.defense <= 0) {
                    $(".instructions").text("You Win!");
                    $(".refreshbtn").css("visibility","visible");
                    $(".yamshap2").css("visibility","hidden");
                    $(".z4t").text("Defeated..!");
                    $(".statust4").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                } else {
                    piccolo.defense = piccolo.defense - yamsha.attack;
                    if(piccolo.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent3);
                        $(".d3t").text(piccolo.defense);
                        $(".statust3").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Piccolo Attack Increase to: " + piccolo.attack + " Piccolo Defense decrease to: " + piccolo.defense + " Yamsha Defense decrease to: " + yamsha.defense);
                    $(".d3t").text(piccolo.defense);}

                }


            }
        }
        if (vs.p1 == "Yamsha") {
            if (vs.oponent3 == "Goku") {
                $(".gokup2").css("visibility","visible");
                goku.defense = goku.defense - yamsha.attack;
                yamsha.attack = yamsha.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a4t").text(yamsha.attack);
                $(".d1t").text(goku.defense);
                if (goku.defense <= 0) {
                    $(".instructions").text("You Win!");
                    $(".refreshbtn").css("visibility","visible");
                    $(".gokup2").css("visibility","hidden");
                    $(".z1t").text("Defeated..!");
                    $(".statust1").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                } else {
                    yamsha.defense = yamsha.defense - goku.attack;
                    if(yamsha.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent3);
                        $(".d4t").text(yamsha.defense);
                        $(".statust4").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Yamsha Attack Increase to: " + yamsha.attack + " Yamsha Defense decrease to: " + yamsha.defense + " Goku Defense decrease to: " + goku.defense);
                    $(".d4t").text(yamsha.defense);}

                }

            } else if (vs.oponent3 == "Freezer") {
                $(".freezerp2").css("visibility","visible");
                freezer.defense = freezer.defense - yamsha.attack;
                yamsha.attack = yamsha.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a4t").text(yamsha.attack);
                $(".d2t").text(freezer.defense);
                if (freezer.defense <= 0) {
                    $(".instructions").text("You Win!");
                    $(".refreshbtn").css("visibility","visible");
                    $(".freezerp2").css("visibility","hidden");
                    $(".z2t").text("Defeated..!");
                    $(".statust2").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                } else {
                    yamsha.defense = yamsha.defense - freezer.attack;
                    if(yamsha.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent3);
                        $(".d4t").text(yamsha.defense);
                        $(".statust4").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden");
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Yamsha Attack Increase to: " + yamsha.attack + " Yamsha Defense decrease to: " + yamsha.defense + " Freezer Defense decrease to: " + freezer.defense);
                    $(".d4t").text(yamsha.defense);}

            }

            } else if (vs.oponent3 == "Piccolo") {
                $(".piccolop2").css("visibility","visible");
                piccolo.defense = piccolo.defense - yamsha.attack;
                yamsha.attack = yamsha.attack + (Math.floor(Math.random() * 10) + 8);
                $(".a4t").text(yamsha.attack);
                $(".d3t").text(piccolo.defense);
                if (piccolo.defense <= 0) {
                    $(".instructions").text("You Win!");
                    $(".refreshbtn").css("visibility","visible");
                    $(".piccolop2").css("visibility","hidden");
                    $(".z3t").text("Defeated..!");
                    $(".statust3").css("background-color", "red");
                    $(".attackbtn").css("visibility","hidden");
                    paso++;
                } else {
                    yamsha.defense = yamsha.defense - piccolo.attack;
                    if(yamsha.defense<=0){

                        $(".instructions").text("GAME OVER - You have been defeated by "+vs.oponent3);
                        $(".d4t").text(yamsha.defense);
                        $(".statust4").css("background-color", "red");
                        $(".attackbtn").css("visibility","hidden"); 
                        $(".refreshbtn").css("visibility","visible");
                        paso=1000;

                    }
                    else {
                    $(".instructions").text("Yamsha Attack Increase to: " + yamsha.attack + " Yamsha Defense decrease to: " + yamsha.defense + " Yamsha Defense decrease to: " + yamsha.defense);
                    $(".d4t").text(yamsha.defense);}
                }

            }

        }


    }


});

$(".finalbtn").click(function () {
paso++;
$(".attackbtn").css("visibility","visible"); 
if(vs.oponent3=="Goku"){
    $(".gokup2").css("visibility","visible");
}
if(vs.oponent3=="Freezer"){
    $(".freezerp2").css("visibility","visible");
}
if(vs.oponent3=="Piccolo"){
    $(".piccolop2").css("visibility","visible");
}
if(vs.oponent3=="Yamsha"){
    $(".yamshap2").css("visibility","visible");
}
$(".finalbtn").css("visibility","hidden");  

});

$(".refreshbtn").click(function () {
    location.reload();
    
    });
