navnArray = []

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
