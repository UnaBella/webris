var el = document.getElementsByTagName("html")[0];
var w;
var mw = 1024;
var mfz = 10;
update();
window.onresize = update;
function update() {
    w = innerWidth;
    el.style.fontSize = w / (mw / mfz) + "px";
}
