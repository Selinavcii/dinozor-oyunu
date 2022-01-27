var blok=document.getElementById("blok");
function zipla(){
    if(oyuncu.classList!="animate"){
        oyuncu.classList.add("animate");
    }
   
    setTimeout(function(){
        oyuncu.classList.remove("animate");
    },1000);
}
  var carpisma=setInterval(function(){
  var oyuncuTop=parseInt(window.getComputedStyle(oyuncu).getPropertyValue("top"));
  var blokLeft=parseInt(window.getComputedStyle(blok).getPropertyValue("left"));
    if(blokLeft<20 && blokLeft>0 && oyuncuTop>=130)
    {
        blok.style.animation="none";
        blok.style.display="none";
        alert("KAYBETTİN");
    }
},10);