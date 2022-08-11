// Modal ablak
var modal_ablak = document.getElementById("Modal__box--shadow");

// Modal indító gomb
var indito_gomb = document.getElementById("btn__modal--opener");

// Okay gomb
var okey_gomb = document.getElementById("btn__modal--okey");

// Cancel gomb
var cancel_gomb = document.getElementById("btn__modal--cancel");

// Bezáró gomb
var bezaro_gomb = document.getElementsByClassName("close")[0];

const Opening_style = [
    { transform: 'scale(0)' },
    { transform: 'scale(1)' }
];
const Closing_style = [
    { transform: 'scale(0)' },
    { transform: 'scale(1)' }
];

const AnimationTiming = {
    duration: 500,
    iterations: 1,
}

// Modal előtérbe hozása
indito_gomb.onclick = function () {
    modal_ablak.style.display = "block";
    modal_ablak.animate(Opening_style, AnimationTiming);
}

// ablak bezárása a bezárás x gombbal
bezaro_gomb.onclick = function () {
    modal_ablak.animate(Closing_style, AnimationTiming);
    modal_ablak.style.display = "none";
}
// ablak bezárása az okay gombbal
okey_gomb.onclick = function () {
    modal_ablak.animate(Closing_style, AnimationTiming);
    modal_ablak.style.display = "none";
}
// ablak bezárása a cancel gombbal
cancel_gomb.onclick = function () {
    modal_ablak.animate(Closing_style, AnimationTiming);
    modal_ablak.style.display = "none";
}

// Ha valahová mellé kattint
window.onclick = function (event) {
    if (event.target == modal_ablak) {
        modal_ablak.animate(Closing_style, AnimationTiming);
        modal_ablak.style.display = "none";
    }
} 