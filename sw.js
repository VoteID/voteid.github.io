var serviceWorkerOption = {"assets":["/app.0.3738b87829fb4f3d0f94.js","/counter.1.c2ee220ddb722ab38078.js","/dashboard.2.1e333015d483d63f3f48.js","/error.3.93b0b4acc948a4e97458.js","/form.4.bbf4bb8d0c24655caa57.js","/home.5.16734fc9cd0cbf9c09da.js","/notFound.6.678af46f6670964b5c90.js","/runtime.f155ad5761b99f8bc568.js","/vendor.8.b832740753ecaf7b3951.js","/index.html"]};
        
        !function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=1)}([function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));function o(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var o=Array(e),r=0;for(n=0;n<t;n++)for(var c=arguments[n],i=0,a=c.length;i<a;i++,r++)o[r]=c[i];return o}},function(e,n,t){"use strict";t.r(n),function(e){var n=t(0),o=e.serviceWorkerOption.assets,r=Date.now().toString(),c=Object(n.a)(o.map((function(e){return""+e})),["../","../manifest.json"]);c=c.map((function(n){return new URL(n,e.location).toString()})),self.addEventListener("install",(function(n){console.log("[SW] Install cache: "+r),n.waitUntil(e.caches.open(r).then((function(e){return e.addAll(c)})).then((function(){console.info("Cached assets: main",c)})).catch((function(e){throw console.error(e),e})))})),self.addEventListener("activate",(function(n){console.log("[SW] Activate event for cache: "+r),n.waitUntil(e.caches.keys().then((function(n){return console.log("[SW] installed caches:",n),Promise.all(n.map((function(n){return n!==r?(console.info("[SW] cache deleted: "+n),e.caches.delete(n)):Promise.resolve()})))})))})),self.addEventListener("message",(function(e){switch(e.data.action){case"skipWaiting":self.skipWaiting&&(self.skipWaiting(),self.clients.claim())}})),self.addEventListener("fetch",(function(n){var t=n.request;if("GET"===t.method){var o=new URL(t.url);if(o.origin===location.origin){var c=e.caches.match(t,{cacheName:r}).then((function(c){return c?(console.info("[SW] fetch URL "+o.href+" from cache"),c):fetch(t).then((function(n){if(!n||!n.ok)return console.error("[SW] URL ["+o.toString()+"] wrong responseNetwork: "+n.status+" "+n.type),n;console.log("[SW] URL "+o.href+" fetched");var c=n.clone();return e.caches.open(r).then((function(e){return e.put(t,c)})).then((function(){console.log("[SW] Cache asset: "+o.href)})),n})).catch((function(){return"navigate"===n.request.mode?e.caches.match("./"):null}))}));n.respondWith(c)}else console.log("[SW] Ignore difference origin "+o.origin)}else console.log("[SW] Ignore non GET request "+t.method)}))}.call(this,t(2))},function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t}]);