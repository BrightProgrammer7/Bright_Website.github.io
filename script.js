function addDarkmodeWidget() {
  new Darkmode().showWidget();
}
const darkmode = new Darkmode();
darkmode.toggle();
console.log(darkmode.isActivated()); // will return true
window.addEventListener("load", addDarkmodeWidget);

$(function () {
  $(".icon").click(function () {
    $(".icon li a").toggle("1000");
    $("i", this).toggleClass("far fa-list far fa-times");
    $(".far").css("padding", "0 3px");
    $("#myTopnav").toggleClass("responsive");
  });
});

$(function () {
  $(".dropbtn").mouseover(function () {
    console.log("droped");
    $("#myTopnav").toggleClass("interactive");
  });
});
