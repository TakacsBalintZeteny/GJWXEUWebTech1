$(document).ready(function () {

    $("#betolt").click(function () {

        $.getJSON("Gjwxeu_orarend.json", function (data) {

            let html = `
            <div class="kartya">
                <h2>MISKOLCI EGYETEM</h2>
            `;

            html += `<p><b>Cím(ek):</b><br>`;
            data.cim.forEach(c => {
                html += `${c.iranyitoszam} ${c.varos}, ${c.utca}<br>`;
            });
            html += `</p>`;

            html += `<p><b>Telefonszám(ok):</b><br>`;
            data.telefonszam.forEach(t => {
                html += `${t.tipus}: ${t.szam}<br>`;
            });
            html += `</p>`;

            html += `<h3>MI, PTI Órarend 2024 tavasz</h3>`;

            data.kurzus.forEach(k => {
                html += `
                <p><b>Tárgy:</b> ${k.targy}</p>
                <p><b>Időpont:</b><br>
                    Nap: ${k.idopont.nap}<br>
                    Tól: ${k.idopont.tol}<br>
                    Ig: ${k.idopont.ig}</p>

                <p><b>Helyszín:</b> ${k.helyszin}</p>
                <p><b>Oktató:</b> ${k.oktato}</p>
                <p><b>Szak:</b> ${k.szak}</p>
                <p><b>Típus:</b> ${k.tipus}</p>

                <hr>
                `;
            });

            html += `</div>`;

            $("#terulet").html(html);
        });

    });

});