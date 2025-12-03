$(document).ready(function () {

    $("#removeBox").click(function () {
        $("#box").effect("explode", { pieces: 25 }, 700, function () {
            $(this).remove();
        });
    });
    
    $("#clearDivs").click(function () {
        $("#box").effect("shake", { times: 3 }, 400, function () {
            $(this).empty();
        });
    });

});