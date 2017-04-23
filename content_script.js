var links = document.getElementsByClassName("detLink");

for (var i = 0; i < links.length; i++) { 
    var title = links[i].innerHTML;
    
    if (title === "Logan.2017.HC.HDRip.XViD.AC3-ETRG") {
        links[i].parentNode.parentNode.parentNode.remove();
    }
}
