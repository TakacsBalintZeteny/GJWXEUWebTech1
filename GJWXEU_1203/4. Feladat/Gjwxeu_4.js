$(document).ready(function () {

    $("#szamol").on("click", function () {
        var a = $("#a").val();
        var b = $("#b").val();
        var muvelet = $("input[name='muv']:checked").val();

        if (a === "" || b === "") {
            alert("Mindkét számot meg kell adni!");
            return;
        }

        if (!Number.isInteger(Number(a)) || !Number.isInteger(Number(b))) {
            alert("Csak egész számokat adjon meg!");
            return;
        }

        a = parseInt(a);
        b = parseInt(b);

        if (!muvelet) {
            alert("Válasszon műveletet!");
            return;
        }

        if (muvelet === "osztas" && b === 0) {
            alert("Nullával nem lehet osztani!");
            return;
        }

        var eredmeny = 0;

        switch (muvelet) {
            case "szorzas":
                eredmeny = a * b;
                break;
            case "osztas":
                eredmeny = a / b;
                break;
            case "plusz":
                eredmeny = a + b;
                break;
            case "minusz":
                eredmeny = a - b;
                break;
        }

        $("#eredmeny").text(eredmeny);
    });

});
