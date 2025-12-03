$(document).ready(function () {

    $("#betolt").click(function () {

        $.getJSON("Gjwxeu_orarend.json", function (data) {

            let html = `<h3>Összes adat</h3>`;

            html += `<h4>Címek:</h4>`;
            data.cim.forEach(c => {
                html += `${c.iranyitoszam} ${c.varos}, ${c.utca}<br>`;
            });

            html += `<hr><h4>Telefonszámok:</h4>`;
            data.telefonszam.forEach(t => {
                html += `${t.tipus}: ${t.szam}<br>`;
            });

            html += `<hr><h4>Kurzusok:</h4>`;
            data.kurzus.forEach(k => {
                html += `
                <p><b>Tárgy:</b> ${k.targy}<br>
                Nap: ${k.idopont.nap}<br>
                Tól: ${k.idopont.tol} – Ig: ${k.idopont.ig}<br>
                Helyszín: ${k.helyszin}<br>
                Oktató: ${k.oktato}<br>
                Szak: ${k.szak}<br>
                Típus: ${k.tipus}</p>
                <hr>
                `;
            });

            $("#terulet").html(html);

        });

    });

});
