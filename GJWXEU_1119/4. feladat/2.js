$(document).ready(function() {
    $("#katt1").click(function() {
        $(".elso").fadeOut(750);
        $("a").removeAttr("href");
    });
});

$(document).ready(function() {
    $("#katt2").click(function() {
        $(".elso").fadeOut(750);
        $("a").removeAttr("href");
        $("#katt2").fadeOut(750);
    });
});

$(document).ready(function() {
    $("#katt3").click(function() {
        $(".elso").fadeOut(750);
        $("a").removeAttr("href");
        $("h1").fadeOut(750);
        $(".bekezdes").fadeOut(750);
    });
});

$(document).ready(function() {
    $("#katt4").click(function() {
        $(".elso").fadeOut(750);
        $("a").removeAttr("href");
        $("a").fadeOut(750);
    });
});

$(document).ready(function() {
    $("#katt5").click(function() {
        $(".elso").fadeOut(750);
        $("a").removeAttr("href");
        $("table tr:odd").fadeOut(750);
    });
});