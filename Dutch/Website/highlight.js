// Auteur: N.G. Schultheiss
// Dit programma stuurt de css-klassen '.vervolg0', 'vervolg1', 'vervolg2', 'vervolg3' en 'nietGkozen' aan.

var klasA = new Array();
var klasB = new Array();
var klasC = new Array();
var klasD = new Array();

$(document).ready(function () {
    $('#routenet td').hover(function() {selecteer(this.id);},
                            function() {deselecteer(this.id)});
});


// Helaas niet als recusief programma.
function maakLijst(id) {
    var elementA = document.getElementById(id);
    var colA = elementA.getAttribute("title");
    if(colA !==  '') {
        var attr = '';
        for(i=0; i <= colA.length; i++) {
            if((colA.substr(i, 1) == ',') || (i == colA.length)) {
                klasA.push(attr);
                var elementB = document.getElementById(attr);
                attr = '';
                var colB = elementB.getAttribute("title");
                if(colB !==  '') {
                    attr = '';
                    for (j=0; j <= colB.length; j++) {
                        if((colB.substr(j, 1) == ',') || (j == colB.length)) {
                            klasB.push(attr);
                            var elementC = document.getElementById(attr);
                            attr = '';
                            var colC = elementC.getAttribute("title");
                            if(colC !==  '') {
                                attr = '';
                                for (k=0; k <= colC.length; k++) {
                                    if((colC.substr(k, 1) == ',') || (k == colC.length)) {
                                        klasC.push(attr);
                                        var elementD = document.getElementById(attr);
                                        attr = '';
                                        var colD = elementD.getAttribute("title");
                                        if(colD !==  '') {
                                            attr = '';
                                            for (l=0; l <= colD.length; l++) {
                                                if((colD.substr(l, 1) == ',') || (l == colD.length)) {
                                                    klasD.push(attr);
                                                    attr = '';}
                                                else attr += colD.substr(l, 1);}}
                                        attr = '';}
                                    else attr += colC.substr(k, 1);}}
                            attr = '';}
                        else attr += colB.substr(j, 1);}}}
            else attr += colA.substr(i, 1);}}
}


// Het verwerken van de informatie.
function schrijfLijst(id, actie) {
    var attr;
    var element;
   
    if(actie !==  'nietGekozen') {
        for(k=0; klasD.length > 0;) {
            attr = klasD.pop()
            element = document.getElementById(attr);
            element.setAttribute('class', 'vervolg4');
            element.setAttribute('className', 'vervolg4');
        }
        for(k=0; klasC.length > 0;) {
            attr = klasC.pop()
            element = document.getElementById(attr);
            element.setAttribute('class', 'vervolg3');
            element.setAttribute('className', 'vervolg3');
        }
        for(k=0; klasB.length > 0;) {
            attr = klasB.pop()
            element = document.getElementById(attr);
            element.setAttribute('class', 'vervolg2');
            element.setAttribute('className', 'vervolg2');
        }
        for(k=0; klasA.length > 0;) {
            attr = klasA.pop()
            element = document.getElementById(attr);
            element.setAttribute('class', 'vervolg1');
            element.setAttribute('className', 'vervolg1');
        }
        element = document.getElementById(id);
        element.setAttribute('class', 'vervolg0');
        element.setAttribute('className', 'vervolg0');
    }
    else{
        for(k=0; klasD.length > 0;) {
            attr = klasD.pop()
            element = document.getElementById(attr);
            element.setAttribute('class', 'nietGekozen');
            element.setAttribute('className', 'nietGekozen');
        }
        for(k=0; klasC.length > 0;) {
            attr = klasC.pop()
            element = document.getElementById(attr);
            element.setAttribute('class', 'nietGekozen');
            element.setAttribute('className', 'nietGekozen');
        }
        for(k=0; klasB.length > 0;) {
            attr = klasB.pop()
            element = document.getElementById(attr);
            element.setAttribute('class', 'nietGekozen');
            element.setAttribute('className', 'nietGekozen');
        }
        for(k=0; klasA.length > 0;) {
            attr = klasA.pop()
            element = document.getElementById(attr);
            element.setAttribute('class', 'nietGekozen');
            element.setAttribute('className', 'nietGekozen');
        }
        element = document.getElementById(id);
        element.setAttribute('class', 'nietGekozen');
        element.setAttribute('className', 'nietGekozen');
    }
}


// Met deze functie zijn de klassen te kiezen.
function selecteer(id) {
    maakLijst(id);
    schrijfLijst(id, 'gekozen');
}


// Met deze functie zijn de klassen weer op 'nietGekozen' te zetten.
function deselecteer(id) {
    maakLijst(id);
    schrijfLijst(id, 'nietGekozen');
}
