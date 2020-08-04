function myImage() {

    document.getElementById("image-upload").src = "assets/img/icons/uploaded.png";
}

// side menu

document.getElementById("toggle").addEventListener("click", function() {

    $("#side-nav").slideToggle();
});