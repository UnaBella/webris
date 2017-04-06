var el = document.getElementsByTagName("html")[0];
var w;
var mw = 720;
var mfz = 22;
update();
window.onresize = update;
function update() {
    w = innerWidth;
    el.style.fontSize = w / (mw / mfz) + "px";
}