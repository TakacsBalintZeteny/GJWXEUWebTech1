$(document).ready(function(){
    $("#startAnim").click(function(){
        $("#box").css({
            left: "300px",
            top: "250px",
            width: "300px",
            height: "90px",
            fontSize: "12pt",
            opacity: 1
        });

        $("#box").animate({
            left: "700px",
            width: "350px",
            fontSize: "30pt"
        }, 600, function(){

            $("#box").animate({
                top: "330px",
                width: "220px",
                height: "99px",
                fontSize: "20pt"
            }, 600, function(){
                $("#box").animate({
                    left: "0px",
                    opacity: 0.4
                }, 800, function(){
                    $("#box").animate({
                        left: "300px",
                        top: "250px",
                        width: "300px",
                        height: "90px",
                        fontSize: "12pt",
                        opacity: 1
                    }, 800, function(){
                        alert("VÉGE");
                    });
                });
            });
        });
    });


    $("#hideP").click(function(){
        $("#paragraphs").slideUp(400, function(){
            $("#box").css({
                top: $("#paragraphs").position().top,
                left: $("#paragraphs").position().left
            });
            $("#info").text("Bekezdések elrejtése");
        });
    });


    var folded = false;
    $("#toggleP").click(function(){
        if (!folded) {
            $("#box").animate({
                width: "80px",
                fontSize: "10pt"
            }, 400, function(){
                $("#box").animate({ left: "600px" }, 600, function(){
                    folded = true;
                });
            });
        } else {
            $("#box").animate({
                width: "300px",
                fontSize: "12pt"
            }, 400, function(){
                $("#box").animate({ left: "300px" }, 600, function(){
                    folded = false;
                });
            });
        }
    });
});
