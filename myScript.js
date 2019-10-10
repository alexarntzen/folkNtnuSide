import {MDCRipple} from '@material/ripple';

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});


$("#myBtn").on("click", myFunction());

function myFunction()
{
    var navn = $("#namePrint").value;
    navnArray.push(navn);
    $("#namePrint").innerText = "Navnet ditt er" + navn;
    var i;
    for (i = 0; i < navnArray.length; i++) {
        $("#kolonne2").innerHTML += navnArray[i] + "<br>";
    }

}


