<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $hibak = [];

    // Adatok beolvasása és tisztítása
    $nev = trim($_POST["nev"] ?? "");
    $pin = trim($_POST["pin"] ?? "");
    $gyumi = $_POST["gyumi"] ?? "";
    $kor = $_POST["kor"] ?? "";
    $lab = $_POST["lab"] ?? "";
    $onbizalom = $_POST["onbizalom"] ?? "";

    // Egyszerű szerver oldali ellenőrzések
    if (empty($nev)) {
        $hibak[] = "A név megadása kötelező!";
    } elseif (!preg_match("/^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ\s-]+$/u", $nev)) {
        $hibak[] = "A név csak betűket tartalmazhat!";
    }

    if (empty($pin)) {
        $hibak[] = "A PIN megadása kötelező!";
    } elseif (!preg_match("/^[0-9]{4}$/", $pin)) {
        $hibak[] = "A PIN-nek pontosan 4 számjegyből kell állnia!";
    }

    // Ha vannak hibák
    if (!empty($hibak)) {
        echo "<h2>Hibák:</h2><ul>";
        foreach ($hibak as $hiba) {
            echo "<li style='color:red;'>$hiba</li>";
        }
        echo "</ul>";
        echo "<a href='Gjwxeu_urlap.html'>Vissza az űrlaphoz</a>";
    } else {
        // Ha minden rendben, megjelenítjük az adatokat táblázatban
        echo "<h2>Beküldött adatok:</h2>";
        echo "<table border='1' cellpadding='5' cellspacing='0'>";
        echo "<tr><th>Mező</th><th>Érték</th></tr>";
        echo "<tr><td>Név</td><td>$nev</td></tr>";
        echo "<tr><td>PIN</td><td>$pin</td></tr>";
        echo "<tr><td>Kedvenc gyümölcs</td><td>$gyumi</td></tr>";
        echo "<tr><td>Életkor</td><td>$kor</td></tr>";
        echo "<tr><td>Lábméret</td><td>$lab</td></tr>";
        echo "<tr><td>Önbizalom</td><td>$onbizalom</td></tr>";
        echo "</table>";

        // Adatok mentése fájlba
        $sor = "$nev;$pin;$gyumi;$kor;$lab;$onbizalom\n";
        file_put_contents("GJWEXU_adatok.txt", $sor, FILE_APPEND | LOCK_EX);

        echo "<p style='color:green;'>Az adatok sikeresen elmentve a GJWEXU_adatok.txt fájlba.</p>";
    }
} else {
    echo "<p>Nincs beküldött adat!</p>";
}
?>
