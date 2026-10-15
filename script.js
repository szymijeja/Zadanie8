document.addEventListener("DOMContentLoaded", function() {

    // DIV - kontener

    const kontener = document.querySelector("#kontener");

    // Po kliknięciu zmiana tła na losowy kolor
    kontener.addEventListener("click", function() {

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        kontener.style.backgroundColor =
            "rgb(" + r + ", " + g + ", " + b + ")";
    });

    // Po najechaniu - czcionka 2 razy większa
    kontener.addEventListener("mouseenter", function() {
        kontener.style.fontSize = "2em";
    });

    // Po zabraniu kursora - powrót do normalnego rozmiaru
    kontener.addEventListener("mouseleave", function() {
        kontener.style.fontSize = "";
    });


    // PARAGRAF - wyroznione

    const paragraf = document.querySelector(".wyroznione");

    // Po dwukrotnym kliknięciu zmiana na nazwę powiatu
    paragraf.addEventListener("dblclick", function() {
        paragraf.innerText = "Radom";
    });

    // Po najechaniu wyświetlenie zawartości w konsoli
    paragraf.addEventListener("mouseover", function() {
        console.log(paragraf.innerText);
    });


    // POLE TEKSTOWE - artykul

    const artykul = document.querySelector("#artykul");
    const liczba = document.querySelector("#liczba");

    // Po każdym wciśnięciu klawisza zwiększenie szerokości o 1
    artykul.addEventListener("keydown", function(e) {

        artykul.style.width =
            (artykul.offsetWidth + 1) + "px";

        // Jeżeli wciśnięto cyfrę, dopisz ją do div liczba
        if (e.key >= "0" && e.key <= "9") {
            liczba.innerText += e.key;
        }
    });

});