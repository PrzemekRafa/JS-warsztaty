'use strict';

function pobierzDane(eventName) {
    eventName.preventDefault();
    var poleImie = document.getElementById('imie').value;
    var poleNazwisko = document.getElementById('nazwisko').value;
    
    console.log(poleImie);
    console.log(poleNazwisko);
}

var nowyRozmiar = document.getElementsByTagName('h1')[0]

function zmienRozmiarCzcionki () {
    nowyRozmiar.style.fontSize = '4em';
}

nowyRozmiar.onclick = zmienRozmiarCzcionki

console.log(document.getElementsByTagName('h1')[0]);
