//Javascript videó vezérlés
function toggleVideo() {
  var video = document.getElementById("videoId");
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function startVideo() {
  var video = document.getElementById("videoId");
  video.currentTime= 0;
}



//Összehasonlító táblázat
function beszur() {
  var tabla = document.querySelector(".kutyaTabla2");
  const gomb = document.querySelector("#kiir");

  if (tabla.rows[0].cells.length > 5) {
      for (let i = 0; i < tabla.rows.length; i++) {
          tabla.rows[i].deleteCell(-1);
      }
  }

  const faj = document.getElementById("faj").value;
  const eredet = document.getElementById("eredet").value;
  const meret = document.getElementById("meret").value;
  const magas = document.getElementById("magas").value;
  const test = document.getElementById("test").value;
  const szor = document.getElementById("szor").value;
  const elet = document.getElementById("elet").value;
  const mozgas = document.getElementById("mozgas").value;

  const ertekek = [faj, eredet, meret, magas, test, szor, elet, mozgas];

  for (var i = 0; i < tabla.rows.length; i++) {
      var ujCella = tabla.rows[i].insertCell(-1);
      ujCella.textContent = ertekek[i] ?? "";
      if (i === 0) {
            ujCella.classList.add("tulajdonsag");
            ujCella.classList.add("tulajdonsag2");
        }
  }
  ellenorizMarmagassag();

  gomb.style.display = "inline-block";
}

function ellenorizMarmagassag() {
    var tabla = document.querySelector(".kutyaTabla2");
    const marmasSor = tabla.rows[3];
    var legnagyobb = -Infinity;

    for (var i = 1; i < marmasSor.cells.length; i++) {
        var szoveg = marmasSor.cells[i].textContent;
        var mezo = szoveg.match(/\(átlag:\s*(\d+)\)/); //RegEx
        if (mezo) {
            var szam = parseInt(mezo[1]);
            if (szam > legnagyobb)
              legnagyobb = szam;
        }
    }

    const eredmenyDiv = document.getElementById("eredmeny");
    eredmenyDiv.textContent = "A legnagyobb marmagasság átlagban: " + legnagyobb + " cm";
}



//jQuery animációk
$(document).ready(function() {
  $(".mainh2").click(function(){
    $(".mainp").slideToggle(1500);
    $(".mainul").slideToggle(1500);
    $("form").slideToggle(1500);
  });
});

$(document).ready(function() {
  $(".focim").click(function(){
    $("table").slideToggle();
    $(".mainimg").slideToggle(1500);
  });
});

$(document).ready(function() {
  $(".asideCim").fadeIn(1500);
  $(".asideLista").fadeIn(1500);
  $(".asideP").fadeIn(1500);
});

$(document).ready(function() {
  $(".kutyaIkon").click(function(){
    $(".kutyaIkon").animate({
      height: "50px"
    }, 1000);
  });
});



//Javascript form ellenörzés
document.getElementById("ellenorzes").addEventListener("click", form2);

function form2() {
      var gomb = document.getElementsByClassName("ellenorzoGomb");
  
      var gomb = document.getElementById("bekuld");
      var gomb2 = document.getElementById("ellenorzes");
      var nev = document.getElementById("nev").value.trim();
      var nev2 = document.getElementById("nev");
      var leiras = document.getElementById("leiras").value.trim();
      var leiras2 = document.getElementById("leiras");
      var faj = document.getElementById("faj").value.trim();
      var faj2 = document.getElementById("faj");
      var nem = document.getElementsByName("nem");
      var szeret = document.getElementsByName("szeret");
      var szuletes = document.getElementById("szuletes").value.trim();
      var szin = document.getElementById("szin").value;
      var x = null;
      var y = [];
      var z = null;


      nev2.style.border = "1px black solid";
      leiras2.style.border = "1px black solid";
      faj2.style.border = "1px black solid";
      gomb2.style.border = "1px black solid";


      if(nev ==="")
      {
        alert("Nem adtál meg nevet.");
        z++;
        nev2.style.border = "2px red solid";
      }

      if(leiras ==="")
      {
        alert("Nem adtál meg leírást.");
        z++;
        leiras2.style.border = "2px red solid";
      }

      if(leiras.length < 5)
      {
        alert("Túl rövid a leírás.");
        z++;
        leiras2.style.border = "2px red solid";
      }

      if(faj ==="")
      {
        alert("Nem választottál fajt.");
        z++;
        faj2.style.border = "2px red solid";
      }

      for(const radio of nem)
      {
        if(radio.checked)
        {
          x = radio.value;
          break;
        }
      }

      if(x === null)
      {
        alert("Nem adtad meg a nemét.");
        z++;
      }


      for (const checkbox of szeret) {
        if (checkbox.checked) {
          y.push(checkbox.value);
          break;
        }
      }

      if (y.length === 0) {
        alert("Nem adtad meg, hogy mit szeretsz a kutyádban.");
        z++;
      }

      if(szuletes === "")
      {
        alert("Nem adtad meg a születési dátumát.");
        z++;
      }

      if(szin === "#ff0000")
      {
        alert("Nem adtál meg színt.");
        z++;
      }


      if(z === null)
      {
        gomb.style.display = "inline-block";
      }
      else
      {
        gomb2.style.border = "2px red solid";
      }
 
}



//Egy fájl elkészítése JSON formátumba (beágyazott).   Node.js
function kiiras() {
  const data = {
    faj: document.getElementById('faj').value,
    szarmazas: document.getElementById('eredet').value,
    meret: document.getElementById('meret').value,
    marmagassag: document.getElementById('magas').value,
    testfelepes: document.getElementById('test').value,
    szorzet: document.getElementById('szor').value,
    elet: document.getElementById('elet').value,
    mozgasigeny: document.getElementById('mozgas').value
  }

  const fs = require('fs');

  const jsonData = JSON.stringify(data);

  fs.writeFile('adat.json', jsonData, (err) => {
    if (err) {
      console.error("Hiba történt:", err);
    } else {
      console.log("Fájl sikeresen elkészült!");
    }
  });
}

//Egy fájl elkészítése JSON formátumba (beágyazott).   Node.js nélül
function kiiras2() {
  const data = {
    faj: document.getElementById('faj').value,
    szarmazas: document.getElementById('eredet').value,
    meret: document.getElementById('meret').value,
    marmagassag: document.getElementById('magas').value,
    testfelepes: document.getElementById('test').value,
    szorzet: document.getElementById('szor').value,
    elet: document.getElementById('elet').value,
    mozgasigeny: document.getElementById('mozgas').value
  };

  const fajlNev = "adat.json";

  const jsonStr = JSON.stringify(data, null, 2);

  const blob = new Blob([jsonStr], { type: "application/json" });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = fajlNev;
  a.click();

  URL.revokeObjectURL(url);
}



//AJAX
function ajax() {
  $(document).ready(function () {

    $.ajax({
      url: "adatok.json",
      method: "GET",
      dataType: "json",

      success: function(adatok) {
      
        var html = "<ul>";

        adatok.forEach(function(elem) {
          html += `<li>${elem.nev} - ${elem.eletkor} éves</li>`;
        });

        html += "</ul>";

        $("#eredmeny2").html(html);
      }
    });
  });
}



//Egyéb
document.addEventListener("DOMContentLoaded", () => {
    const sorok = document.getElementsByTagName("tr");
    console.log("A táblázat sorainak száma: " + sorok.length);
  });