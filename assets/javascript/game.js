var player1 = "";
var player2 = "";
var paso = "0";

var goku = {
    name: "Goku",
    attack: 800,
    defense: 900
};

var freezer = {
    name: "Freezer",
    attack: 750,
    defense: 900
};

var piccolo = {
    name: "Piccolo",
    attack: 200,
    defense: 300
};

var yamsha = {
    name: "Yamsha",
    attack: 80,
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
        $(".instructions").text("Chose your Oponent");
        

        }
   


$(".BotonStart").click(function () {

    $(".botoninicio").hide();
    $(".tituloSelect").css("visibility", "visible");
    $(".titulosuperior").css("margin-top", "120px");
    // $(".player2").css("margin-left", "130px");
    $(".attack1").css("visibility", "visible");
    $(".defense1").css("visibility", "visible");


});





$(".gokuintro").click(function () {
    // $(".gokuintro").css("visibility", "hidden");
    $(".tituloSelect").hide();
    $(".freezerp2").css("visibility", "visible");
    $(".gokup1").css("visibility", "visible");
    $(".hide").css("display", "block");
    llenado();
});

$(".yamshaintro").click(function () {
    $(".tituloSelect").hide();
    $(".freezerp2").css("visibility", "visible");
    $(".yamshap1").css("visibility", "visible");
    $(".hide").css("display", "block");
    llenado();
});

$(".freezerintro").click(function () {
    // $(".gokuintro").css("visibility", "hidden");
    $(".tituloSelect").hide();
    $(".gokup2").css("visibility", "visible");
    $(".freezerp1").css("visibility", "visible");
    $(".hide").css("display", "block");
    llenado();
});

$(".piccolointro").click(function () {
    $(".tituloSelect").hide();
    $(".freezerp2").css("visibility", "visible");
    $(".piccolop1").css("visibility", "visible");
    $(".hide").css("display", "block");
    llenado();
});





$(".attackbtn").click(function () {


    if (player1 == "g" && player2 == "f") {
        if (paso == 2) {
            yamsha.defense = yamsha.defense - goku.attack;
            $(".d2t").text(yamsha.defense);
            if (yamsha.defense < 0) {
                alert("You Defeat Yamsha")
                paso++;
            }
        }
        if (paso == 1) {
            piccolo.defense = piccolo.defense - goku.attack;
            $(".d2t").text(piccolo.defense);
            if (piccolo.defense < 0) {
                alert("You Defeat Piccolo")
                paso++;
                $(".piccolop2").css("visibility", "hidden");
                $(".yamshap2").css("visibility", "visible");
            }
        }
        if (paso == 0) {
            freezer.defense = freezer.defense - goku.attack;
            $(".d2t").text(freezer.defense);
            if (freezer.defense < 0) {
                alert("You Defeat Freazer")
                paso++;
                $(".freezerp2").css("visibility", "hidden");
                $(".piccolop2").css("visibility", "visible");
            }
        }
    }


    if (player1 == "y" && player2 == "f") {

    }
    if (player1 == "f" && player2 == "g") {

    }
    if (player1 == "p" && player2 == "f") {

    }

});

