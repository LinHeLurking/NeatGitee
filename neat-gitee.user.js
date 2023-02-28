// ==UserScript==
// @name         Neat Gitee
// @version      0.5
// @description  Clean your gitee!
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

    const removeIfPresent = (elem) => {
      if(elem) {
        elem.remove();
      }
    };

    const clean = setTimeout(() => {
        if (window.location.href == "https://gitee.com/") {
            removeWechatBanner();
            removeIfPresent($(".recommend-container"));
            removeIfPresent($(".my-star-collection-popup"));
            removeIfPresent($(".my-star-collection-popup"));

            let tmp = $("#event-timeline-app");
            if(tmp && tmp.leng > 0) {
                tmp[0].style.width = "980px";
            }

            tmp = $(".rc-users__container");
            if(tmp && tmp.leng > 0) {
                tmp[0].style.marginLeft = "0";
            }

        } else if (window.location.href.startsWith("https://gitee.com/notifications/")) {
            removeWechatBanner();
            const tabs = $("#notice-app > div.notice-actionbar.ui.secondary.pointing.menu > a.item");
            for (let index = 0; index < tabs.length; index++) {
                const element = tabs[index];
                element.addEventListener("click", removeWechatBanner);
            }
        }

        const sideWechatBox = $(".site-wechat-guide");
        if (sideWechatBox && sideWechatBox.length > 0) {
            sideWechatBox.remove();
        }

        const redBadge = $(".label.red.ui");
        if (redBadge && redBadge.length > 0) {
            redBadge.remove();
        }


        const discountBadge = $("sup");
        for(let index = 0; index < discountBadge.length; index++) {
            const element = discountBadge[index];
            if(element && element.innerText == "特惠") {
              element.remove();
            }
        }
    }, 400);

    $("documnet").ready(clean);
})();
