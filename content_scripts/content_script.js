var links = document.getElementsByClassName("detLink");

// Changes the background color of all listings with "264" within the title.
for (var i = 0; i < links.length; i++) { 
    var title = links[i].innerHTML;
    var regex = /264/;
    var result = regex.test(title);
    
    if (result) {
        links[i].parentNode.parentNode.parentNode.setAttribute("style", "background-color: #99fb98");
    }
}
