let navnArray = [];

document.querySelector(".button").addEventListener("click", () => {
    let name =document.querySelector("#nameInput").value;
    navnArray.push(name);
    document.querySelector("#kolonnetext2").textContent =  "Hei " + name + "!";
    document.querySelector("#kolonnetext3").innerHTML = "";
    let i;
    for (i = 0; i < navnArray.length; i++) {
        var  text = document.createTextNode("Hei " +  navnArray[i] + "!");
        let br = document.createElement("br");
        document.querySelector("#kolonnetext3").appendChild(text);
        document.querySelector("#kolonnetext3").appendChild(br);
    }
});


