$(document).ready(function() {
    $("#addText").click(function() {
        $("#box").append("<br>Programtervező informatikus");
    });

    $("#addPTIGomb").click(function() {
        $("#box").append("<br><button>PTI MI Gomb</button>");
    });

    $("#addNewButton").click(function() {
        $("p:contains('Forrás')").after('<button>ME GEIK-PTI</button>');
    });

    $("#addHeader").click(function() {
        $("#box").before("<h3>jQuery feladat</h3>");
    });

    $("#addSubHeader").click(function() {
        $("#box").before("<h4>HTML metódusok</h4>");
    });

    $("#addFormHeader").click(function() {
        $("#myForm").before("<h3>ŰRLAP-NEPTUNKOD</h3>");
    });
});
