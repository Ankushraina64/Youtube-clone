var icon = document.getElementsByID("moon");

icon.onclick = function(){
    document.body.classList.toogle("dark-theme");
    if(  document.body.classList.contains("dark-theme")){
        icon.src="images/sun.png"
    }
}
