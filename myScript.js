let navnArray = [];

function myFunction() {
    var text = $("#nameInput").val();
    navnArray.push(text);
    $("#kolonnetext2").text( "Hei " + text + "!");
    var i;
    var moretext = "";
    for (i = 0; i < navnArray.length; i++) {
        moretext += "Hei " +  navnArray[i] + "<br>";
    }
    $("#kolonnetext3").html(moretext);

}

$(document).ready(function(){


    $("#myBtn").click(myFunction);


  // jQuery methods go here...

});
