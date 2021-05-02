// this function opens the tab
const openTab = (e, tab) => {
    var i, tabLinks, tabContent;

    // Get the tab links button
    tabLinks = document.querySelectorAll('.tab-links button');

    // get the tab content
    tabContent = document.getElementsByClassName('tab-content');

    // Loop through the tab links and remove the active class and font boldness
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks
        [i].className.replace("tab-active", "");
        tabLinks[i].style.fontWeight = "normal"
    }

    // loop through the tab content and set the display to none
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // set the tab-content by id to display
    document.getElementById(tab).style.display = "block"

    // set the target(tab-links) classname to tab-active and font boldness to bold
    e.target.className += " tab-active";
    e.target.style.fontWeight = "bold"
}