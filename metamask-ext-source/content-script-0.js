LavaPack.loadBundle([[147,{},function(e,n,o){"use strict";let t=chrome.runtime.connect({name:"trezor-connect"});t.onMessage.addListener((e=>{window.postMessage(e,window.location.origin)})),t.onDisconnect.addListener((e=>{t=null})),window.addEventListener("message",(e=>{t&&e.source===window&&e.data&&t.postMessage({data:e.data})}))},{file:"/home/circleci/project/app/vendor/trezor/content-script.js"}]],[147],{});