"use strict";

const DEFAULT_INTERVAL = 250;
var aniInterVal = DEFAULT_INTERVAL;
var startAniInter = null;
var text = null;
var index = 0;
var frames = null;

function animationChanged() {
  var textarea = document.getElementById("text-area");
  var animation = document.getElementById("animation");
  var animationTxt = ANIMATIONS[animation.value];
  frames = animationTxt.split("=====\n");
  index = 0;
}

function fontSizeChanged() {
  var fontSize = document.getElementById("fontsize");
  document.getElementById("text-area").style.fontSize = fontSize.value;
}

function speedChanged() {
  var speed = document.getElementById("turbo");
  aniInterVal = speed.checked ? 50 : DEFAULT_INTERVAL;
  var tmpText = text;
  startAnimationInterval();
  text = tmpText;
}

function startAnimationInterval() {
  var textarea = document.getElementById("text-area");
  text = textarea.value;

  if (startAniInter) {
    clearInterval(startAniInter);
  }
  if (!frames) {
    return;
  }
  startAniInter = setInterval(function() {
    textarea.value = frames[index++];
    if (index == frames.length) {
      index = 0;
    }
  }, aniInterVal);
}

function stopAnimationInterval() {
  if (!startAniInter) {
    return;
  }
  clearInterval(startAniInter);
  var textarea = document.getElementById("text-area");
  textarea.value = text;
}

function onStartBtnClick() {
  var startBtn = document.getElementById("start");
  startBtn.disabled = true;
  var animation = document.getElementById("animation");

  var stopBtn = document.getElementById("stop");
  stopBtn.disabled = false;

  startAnimationInterval();
}

function onStopBtnClick() {
  var startBtn = document.getElementById("start");
  startBtn.disabled = false;
  var animation = document.getElementById("animation");

  var stopBtn = document.getElementById("stop");
  stopBtn.disabled = true;

  index = 0;
  stopAnimationInterval();
}
