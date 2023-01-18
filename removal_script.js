//entire body -> display blank page
//temp = document.getElementsByClassName("application-main")[0];
//temp.parentNode.removeChild(temp);

//body panels
const panel1 = document.getElementById("panel-1");
panel1.remove();

const panel2 = document.getElementById("panel-2");
panel2.remove();

const panellabel = document.getElementsByClassName("col-md-12 col-lg-8 mt-3 border-bottom")[0];
panellabel.remove();

//header
const nav = document.getElementById("global-nav");
nav.remove();

const bellicon = document.getElementById("AppHeader-notifications-button");
bellicon.remove();

const plusbutton = document.getElementsByClassName("details-overlay details-reset")[0];
plusbutton.remove();

const searchbar = document.getElementsByClassName("Header-item Header-item--full flex-column flex-md-row width-full flex-order-2 flex-md-order-none mr-0 mt-3 mt-md-0 Details-content--hidden-not-important d-md-flex")[0];
searchbar.remove();

//header rightside pfp button
//temp = document.getElementsByClassName("details-overlay details-reset js-feature-preview-indicator-container")[0];
//temp.parentNode.removeChild(temp);

//entire left panel
const leftpanel = document.getElementsByClassName("team-left-column col-md-4 col-lg-3 color-border-muted border-bottom hide-md hide-sm border-right color-bg-default")[0];
leftpanel.remove();

//body footer
const footer = document.getElementsByClassName("footer")[0];
footer.remove();

//right side panel explore repos
const explore = document.getElementsByClassName("mb-5")[0];
explore.remove();

//styling

//body
document.body.style.overflow = "hidden";

//header
const header = document.getElementsByClassName("Header js-details-container Details px-3 px-md-4 px-lg-5 flex-wrap flex-md-nowrap")[0];
header.style = "display:flex; justify-content:space-evenly;";

//changes tab
const changes = document.getElementsByClassName("team-left-column width-fit col-md-3 col-lg-4 mt-5 hide-lg hide-md hide-sm border-bottom")[0];
changes.style.width = "100vw";
changes.style.fontSize = "1.5rem";



