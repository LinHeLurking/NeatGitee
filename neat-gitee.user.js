// ==UserScript==
// @name         Neat Gitee
// @version      0.1
// @description  try to take over the world!
// @author       LinHeLurking
// @match        https://gitee.com/
// @match        https://gitee.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gitee.com
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.4.0/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==

/* global $ */

(function () {
  'use strict';

  const removeWechatBanner = () => { $(".wechat-banner").remove(); };

  // Your code here...
  const clean = () => {
    if (window.location.href == "https://gitee.com/") {
      removeWechatBanner();
      $(".recommend-container").remove();
      $(".my-star-collection-popup").remove();
      $("#event-timeline-app")[0].style.width = "980px";
      $(".rc-users__container")[0].style.marginLeft = "0";
    } else if (window.location.href.startsWith("https://gitee.com/notifications/")) {
      removeWechatBanner();
      const tabs = $("#notice-app > div.notice-actionbar.ui.secondary.pointing.menu > a.item");
      for (let index = 0; index < tabs.length; index++) {
        const element = tabs[index];
        element.addEventListener("click", removeWechatBanner);
      }
    }
    const sideWechatBox = $(".site-wechat-guide");
    if (sideWechatBox) {
      sideWechatBox.remove();
    }

    const redBadge = $(".label.red.ui");
    if (redBadge) {
      redBadge.remove();
    }
  };

  $("documnet").ready(clean);
})();
