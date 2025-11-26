$(document).ready(function () {
    bekezdesElrejt();
    bekezdesMegjelenit();
    bekezdesToggle();

    urlapAttekint01();
    urlapAttekint05();
    urlapAttekint08();

    urlapElrejt();
    urlapMegjelenit();
    urlapToggle();
});



function bekezdesElrejt() {
    $("#pHide").on("click", function () {
        $(".szoveg").hide();
    });
}


function bekezdesMegjelenit() {
    $("#pShow").on("click", function () {
        $(".szoveg").show();
    });
}


function bekezdesToggle() {
    $("#pToggle").on("click", function () {
        $(".szoveg").toggle();
    });
}


function urlapAttekint01() {
    $("#op01").on("click", function () {
        $("#urlap").css("opacity", "0.1");
    });
}


function urlapAttekint05() {
    $("#op05").on("click", function () {
        $("#urlap").css("opacity", "0.5");
    });
}


function urlapAttekint08() {
    $("#op08").on("click", function () {
        $("#urlap").css("opacity", "0.8");
    });
}


function urlapElrejt() {
    $("#uHide").on("click", function () {
        $("#urlap").hide();
    });
}


function urlapMegjelenit() {
    $("#uShow").on("click", function () {
        $("#urlap").show();
    });
}


function urlapToggle() {
    $("#uToggle").on("click", function () {
        $("#urlap").toggle();
    });
}
