$(document).ready(function () {
    fejlécEgérElhúzás();
    elsoBekezdesElrejtese();
    masodikBekezdesElrejtese();
    gombInformaciosSzoveg();
    beviteliMezoKeretValtozas();
    beviteliMezoKattintasSzin();
});



// 1.
function fejlécEgérElhúzás() {
    $("h1").on("mouseleave", function () {
        alert("Elhúztad az egeret a fejléc szövegről!");
    });
}


// 2.
function elsoBekezdesElrejtese() {
    $("#p1hide").on("click", function () {
        $("p").eq(0).hide();
    });
}


// 3.
function masodikBekezdesElrejtese() {
    $("#p2hide").on("dblclick", function () {
        $("p").eq(1).hide();
    });
}


// 4.
function gombInformaciosSzoveg() {
    $("button").hover(
        function () {
            $(this).data("original-text", $(this).text());
            $(this).text("Készen állsz a küldésre!");
        },
        function () {
            $(this).text($(this).data("original-text"));
        }
    );
}


// 5.
function beviteliMezoKeretValtozas() {
    $("input").on("mouseenter", function () {
        $(this).css("border-color", "red");
    });

    $("input").on("mouseleave", function () {
        $(this).css("border-color", "blue");
    });
}


// 6.
function beviteliMezoKattintasSzin() {
    $("input").on("click", function () {
        $(this).css("background-color", "#ffd9cc");
    });
}
