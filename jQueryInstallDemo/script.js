let isToggled = false;

$("#toggleButton").on("click", function() {
    if(!isToggled) {
    $("#placeholder").load("loadedContent.html");
    isToggled = true;
} else {
    $("#placeholder").html("")
    isToggled = false;

}
})