console.log("hello");

function countCharacters(){
    var text = document.getElementById("inputText").value;
    var count = text.length;
    document.getElementById("characterCount").innerHTML = "Всего: " + count;

    if (count >= 90){

        document.getElementById("inputText").value = text.slice(0, 90);
        document.getElementById("remainingCharacters").innerHTML = "Осталось: 0";
        document.getElementById("inputText").setAttribute("maxlength", "90");
    }else {

        document.getElementById("remainingCharacters").innerHTML = "Осталось:" + (90 - count);
    }
}