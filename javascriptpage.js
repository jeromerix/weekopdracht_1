/*----------overmij skills functie ------------*/

function myfunction() {
    //id checkbox    
    var checkBox= document.getElementById("checkb");
    //id die iets uitvoert
    var imgA    = document.getElementById("logob");
   
 
  if (checkBox.checked == true){
    imgA.style.display  = "block";
 
  } else {
    imgA.style.display = "none";
  }
}

