// Auteur: N.G. Schultheiss
// This script controls the css classes: '.vervolg#' and 'nietGkozen'.

var klasA = new Array();
var klasB = new Array();
var klasC = new Array();
var klasD = new Array();

$(document).ready(function () {
    $('#routenet td').not('.empty').hover(function() {select(this.id);},
                                          function() {deselect(this.id);});
});


// FIXME: Make recursive
function maakLijst(id) {
    var elementA = $('#' + id);
    var colA = elementA.attr("title");
    if(colA !==  '') {
        var attr = '';
        for(i=0; i <= colA.length; i++) {
            if((colA.substr(i, 1) == ',') || (i == colA.length)) {
                klasA.push(attr);
                var elementB = $('#' + attr);
                attr = '';
                var colB = elementB.attr("title");
                if(colB !==  '') {
                    attr = '';
                    for (j=0; j <= colB.length; j++) {
                        if((colB.substr(j, 1) == ',') || (j == colB.length)) {
                            klasB.push(attr);
                            var elementC = $('#' + attr);
                            attr = '';
                            var colC = elementC.attr("title");
                            if(colC !==  '') {
                                attr = '';
                                for (k=0; k <= colC.length; k++) {
                                    if((colC.substr(k, 1) == ',') || (k == colC.length)) {
                                        klasC.push(attr);
                                        var elementD = $('#' + attr);
                                        attr = '';
                                        var colD = elementD.attr("title");
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
function highlightTree(id) {
    var attr;
    var element;

    for(k=0; klasD.length > 0;) {
        attr = klasD.pop()
        element = $('#' + attr);
        element.attr('class', 'vervolg4');}
    for(k=0; klasC.length > 0;) {
        attr = klasC.pop()
        element = $('#' + attr);
        element.attr('class', 'vervolg3');}
    for(k=0; klasB.length > 0;) {
        attr = klasB.pop()
        element = $('#' + attr);
        element.attr('class', 'vervolg2');}
    for(k=0; klasA.length > 0;) {
        attr = klasA.pop()
        element = $('#' + attr);
        element.attr('class', 'vervolg1');}
    element = $('#' + id);
    element.attr('class', 'vervolg0');
}


// Met deze functie zijn de klassen te kiezen.
function select(id) {
    maakLijst(id);
    highlightTree(id);
}


// Met deze functie zijn de klassen weer op 'nietGekozen' te zetten.
function deselect(id) {
    for (var i=0; i < 5; i++) {
        $('td.vervolg' + i).attr('class','nietGekozen');}
}
