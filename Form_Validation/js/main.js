'use strict';

var wszystkieZgody = document.getElementById('wszystkie-zgody');

var wszystkieCheckboxy = document.querySelectorAll('input[type=checkbox]');

console.log(wszystkieZgody);


console.log(wszystkieCheckboxy);

wszystkieZgody.onchange = function () {
    console.log(this.checked);

    // TU SIĘ DZIEJĄ JAKIEŚ CZARY !!!!

    /*    document.getElementById('zgoda-marketingowa-1').checked = this.checked;
        document.getElementById('zgoda-marketingowa-2').checked = this.checked;
        document.getElementById('zgoda-marketingowa-1').disabled = this.checked;
        document.getElementById('zgoda-marketingowa-2').disabled = this.checked; */

    /* for (var i = 0; i < wszystkieCheckboxy.length - 1; i++) {
            wszystkieCheckboxy[i].checked = this.checked;
            wszystkieCheckboxy[i].disabled = this.checked; */

    stanCheckboxow(this.checked);

}


function stanCheckboxow(state) {
    for (var i = 0; i < wszystkieCheckboxy.length - 1; i++) {
        wszystkieCheckboxy[i].checked = state;
        wszystkieCheckboxy[i].disabled = state;
    }
}

document.getElementById('wyslij').addEventListener('click', walidujFormularz);

function walidujFormularz() {
event.preventDefault();
    var wartosciPol = document.querySelectorAll('input[type=text]');
    var pustePola = 0;
    for (var i = 0; i < wartosciPol.length; i++) {
        //        console.log(wartosciPol[i].value);
        if (wartosciPol[i].value == '') {
            event.preventDefault();
            
            pustePola++;

            if (wartosciPol[i].nextElementSibling.tagName == 'P') {
                continue;
            };

            createAlert(wartosciPol[i], i);
            //            console.log('Input ' + i + ' jest pusty');
        } else if (wartosciPol[i].nextElementSibling.tagName == 'P') {
            document.getElementById('alert_' + i).remove();
        }
    }
    
    if(pustePola == 0) {
        console.log('Poszło');
    } else {
        console.log('ilość pustych pól ' + pustePola);
    }
}
s
    var alertWiadomosc = document.createElement('p');
    alertWiadomosc.id = 'alert_' + id;
    alertWiadomosc.innerHTML = 'To pole jest wymagane!';
    element.parentElement.insertBefore(alertWiadomosc, element.nextSibling);
    //        alert('Uzupełnij wymagane pola');
}



