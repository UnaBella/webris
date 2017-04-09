<template>
	<!--遮罩-->
	<div class="cover">
		<!--弹窗-->
		<div class="popup">
			<div class="title">{{title}}</div>
		</div>
	</div>
</template>

<script>

var params = {
	left: 0,
	top: 0,
	currentX: 0,
	currentY: 0,
	flag: false
};
var getCss = function (o, key) {
	return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key];
};
var startDrag = function (bar, target, callback) {
	if (getCss(target, "left") !== "auto") {
		params.left = getCss(target, "left");
	}
	if (getCss(target, "top") !== "auto") {
		params.top = getCss(target, "top");
	}
	bar.onmousedown = function (event) {
		params.flag = true;
		if (!event) {
			event = window.event;
			bar.onselectstart = function () {
				return false;
			}
		}
		var e = event;
		params.currentX = e.clientX;
		params.currentY = e.clientY;
	};
	document.onmouseup = function () {
		params.flag = false;
		if (getCss(target, "left") !== "auto") {
			params.left = getCss(target, "left");
		}
		if (getCss(target, "top") !== "auto") {
			params.top = getCss(target, "top");
		}
	};
	document.onmousemove = function (event) {
		var e = event ? event : window.event;
		if (params.flag) {
			var nowX = e.clientX, nowY = e.clientY;
			var disX = nowX - params.currentX, disY = nowY - params.currentY;
			target.style.left = parseInt(params.left) + disX + "px";
			target.style.top = parseInt(params.top) + disY + "px";
		}

		if (typeof callback == "function") {
			callback(parseInt(params.left) + disX, parseInt(params.top) + disY);
		}
	}
};

export default {
	data() {
		return {}
	},
	props: ['title'],
	mounted() {
		startDrag(document.getElementsByClassName('title')[0], document.getElementsByClassName('popup')[0]);
	}
}
</script>
<style lang="less" scoped>
@import "../assets/stylesheets/base01.less";

.cover {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.2);
	.popup {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: @borradius2;
		border: 1px solid @borc-popup;
		background-color: @bgc-popup;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		width: 500px;
		height: 500px;
		.title {
			height: 50px;
			border-bottom: 1px solid @borc-popup;
			border-radius: @borradius2 @borradius2 0 0;
			background-color: @bgc-popup-head;
			padding: 0 20px;
			cursor: move;
			line-height: 50px;
		}
	}
}
</style>
