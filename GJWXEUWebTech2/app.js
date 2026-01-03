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
function insert() {
  var table = document.querySelector(".dogTable2");
  const button = document.querySelector("#out");

  if (table.rows[0].cells.length > 5) {
      for (let i = 0; i < table.rows.length; i++) {
          table.rows[i].deleteCell(-1);
      }
  }

  const species = document.getElementById("species").value;
  const source = document.getElementById("source").value;
  const size = document.getElementById("size").value;
  const high = document.getElementById("high").value;
  const body = document.getElementById("body").value;
  const hairs = document.getElementById("hairs").value;
  const live = document.getElementById("live").value;
  const moving = document.getElementById("moving").value;

  const values = [species, source, size, high, body, hairs, live, moving];

  for (var i = 0; i < table.rows.length; i++) {
      var newCell = table.rows[i].insertCell(-1);
      newCell.textContent = values[i] ?? "";
      if (i === 0) {
            newCell.classList.add("property");
            newCell.classList.add("property2");
        }
  }
  checkingHeight();

  button.style.display = "inline-block";
}

function checkingHeight() {
    var table = document.querySelector(".dogTable2");
    const marmasLine = table.rows[3];
    var largest = -Infinity;

    for (var i = 1; i < marmasLine.cells.length; i++) {
        var text = marmasLine.cells[i].textContent;
        var cell = text.match(/\(átlag:\s*(\d+)\)/); //RegEx
        if (cell) {
            var number = parseInt(cell[1]);
            if (number > largest)
              largest = number;
        }
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.textContent = "A legnagyobb marmagasság átlagban: " + legnagyobb + " cm";
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
  $(".headline").click(function(){
    $("table").slideToggle();
    $(".mainimg").slideToggle(1500);
  });
});

$(document).ready(function() {
  $(".asideTitle").fadeIn(1500);
  $(".asideList").fadeIn(1500);
  $(".asideP").fadeIn(1500);
});

$(document).ready(function() {
  $(".dogIcon").click(function(){
    $(".dogIcon").animate({
      height: "50px"
    }, 1000);
  });
});



//Javascript form ellenörzés
document.getElementById("control").addEventListener("click", form2);

function form2() {
      var button = document.getElementsByClassName("formButton");
  
      var button = document.getElementById("submit");
      var button2 = document.getElementById("control");
      var name = document.getElementById("name").value.trim();
      var name2 = document.getElementById("name");
      var description = document.getElementById("description").value.trim();
      var description2 = document.getElementById("description");
      var species = document.getElementById("species").value.trim();
      var species2 = document.getElementById("species");
      var gender = document.getElementsByName("sex");
      var love = document.getElementsByName("love");
      var birth = document.getElementById("birthDate").value.trim();
      var color = document.getElementById("color").value;
      var x = null;
      var y = [];
      var z = null;


      name2.style.border = "1px black solid";
      description2.style.border = "1px black solid";
      species2.style.border = "1px black solid";
      button2.style.border = "1px black solid";


      if(name ==="")
      {
        alert("Nem adtál meg nevet.");
        z++;
        name2.style.border = "2px red solid";
      }

      if(description ==="")
      {
        alert("Nem adtál meg leírást.");
        z++;
        description2.style.border = "2px red solid";
      }

      if(description.length < 5)
      {
        alert("Túl rövid a leírás.");
        z++;
        description2.style.border = "2px red solid";
      }

      if(species ==="")
      {
        alert("Nem választottál fajt.");
        z++;
        species2.style.border = "2px red solid";
      }

      for(const radio of gender)
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


      for (const checkbox of love) {
        if (checkbox.checked) {
          y.push(checkbox.value);
          break;
        }
      }

      if (y.length === 0) {
        alert("Nem adtad meg, hogy mit szeretsz a kutyádban.");
        z++;
      }

      if(birth === "")
      {
        alert("Nem adtad meg a születési dátumát.");
        z++;
      }

      if(color === "#ff0000")
      {
        alert("Nem adtál meg színt.");
        z++;
      }


      if(z === null)
      {
        button.style.display = "inline-block";
      }
      else
      {
        button2.style.border = "2px red solid";
      }
 
}



//Egy fájl elkészítése JSON formátumba (beágyazott).   Node.js
function writing_out() {
  const data = {
    species: document.getElementById('species').value,
    source: document.getElementById('source').value,
    size: document.getElementById('size').value,
    marmagassag: document.getElementById('high').value,
    body: document.getElementById('body').value,
    hairs: document.getElementById('hairs').value,
    live: document.getElementById('live').value,
    moving: document.getElementById('moving').value
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
function writing_out2() {
  const data = {
    species: document.getElementById('species').value,
    source: document.getElementById('source').value,
    size: document.getElementById('size').value,
    high: document.getElementById('high').value,
    body: document.getElementById('body').value,
    hairs: document.getElementById('hairs').value,
    live: document.getElementById('live').value,
    moving: document.getElementById('moving').value
  };

  const fileName = "adat.json";

  const jsonStr = JSON.stringify(data, null, 2);

  const blob = new Blob([jsonStr], { type: "application/json" });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
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
    const lines = document.getElementsByTagName("tr");
    console.log("A táblázat sorainak száma: " + lines.length);
  });
