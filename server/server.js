!function(e,r){for(var t in r)e[t]=r[t]}(exports,function(e){var r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(r){return e[r]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=16)}([function(e,r){e.exports=require("winston")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("body-parser")},function(e,r){e.exports=require("fs")},function(e,r){e.exports=require("accept-language")},function(e,r){e.exports=require("http")},function(e,r){e.exports=require("helmet")},function(e,r){e.exports=require("cookie-parser")},function(e,r){e.exports=require("compression")},function(e,r){e.exports=require("@vuesion/utils/dist/randomGenerator")},function(e,r){e.exports=require("express-rate-limit")},function(e,r){e.exports=require("forever-monitor")},function(e,r){e.exports=require("serve-favicon")},function(e,r){e.exports=require("url")},function(e,r){e.exports=require("lodash/cloneDeep")},function(e,r,t){e.exports=t(17)},function(e,r,t){"use strict";t.r(r);var o=t(6),n=t.n(o),s=t(0),i=s.createLogger({transports:[new s.transports.File({filename:"logs/error.log",level:"error",maxFiles:5,maxsize:10485760,format:s.format.combine(s.format.splat(),s.format.json())}),new s.transports.File({filename:"logs/all.log",maxFiles:5,maxsize:10485760,format:s.format.combine(s.format.splat(),s.format.json())}),new s.transports.Console({level:"debug",handleExceptions:!0,format:s.format.combine(s.format.splat(),s.format.colorize(),s.format.simple())})],exitOnError:!1}),a=t(2),u=t(7),c=t.n(u),f=t(3),l=t(8),d=t(9),p=t(1),m=function(e){return p.resolve(__dirname,e)},g=function(e,r){return void 0===r&&(r=!0),a.static(m(e),{maxAge:r?"4w":0})},v=t(10),h=t(11),x=t.n(h),b=t(12),y=t.n(b),j=function(e){return Object(v.getIntInRange)(0,100)<=e},k=t(13),O=t(4),_=t(14),w=t(5),q=t.n(w);process.env.NODE_CONFIG_DIR=p.join(p.resolve(__dirname),"app","config");var S,P,T=JSON.parse(process.env.CONFIG||"{}"),N=Object.assign({},require("config"),T),F=t(15),C=t.n(F),A=function(e,r){var t=C()(e);return t.features.disableParticles=r.query.disableParticles?Boolean(r.query.disableParticles):e.features.disableParticles,t},M=function(e,r){var t=require("lru-cache");S=require("vue-server-renderer").createBundleRenderer(e,{template:r,cache:new t({max:1e3,maxAge:9e5})})},D=JSON.parse(O.readFileSync(m("../../.vuesion/config.json")).toString()),E=a();E.disable("x-powered-by"),(P=E).use(f.json()),P.use(f.urlencoded({extended:!0})),P.use(l()),P.use(c()()),P.use(d({threshold:0})),function(e){e.get("*",(function(e,r,t){var o="https://"+(e.headers.host||"localhost:3000")+e.url;e.headers["x-forwarded-proto"]&&"https"!==e.headers["x-forwarded-proto"]?r.redirect(o):t()})),e.use("/storybook",g("../../storybook-static")),e.use("/docs",(function(e,r){r.status(301).redirect("https://vuesion.github.io/docs/en/")})),e.post("/token",(function(e,r){j(10)?r.status(500).json({}):"password"===e.body.grant_type?r.status(200).json({access_token:"accessToken",refresh_token:"refreshToken"}):"refresh_token"===e.body.grant_type&&"refreshToken"===e.body.refresh_token?r.status(200).json({access_token:"accessToken2",refresh_token:"refreshToken2"}):"refresh_token"===e.body.grant_type&&"refreshToken2"===e.body.refresh_token&&r.status(200).json({access_token:"accessToken",refresh_token:"refreshToken"})}));var r=x()({windowMs:3e5,max:100});e.post("/lobby",r,(function(e,r){var t,o=new y.a.Monitor("src/server/lobbyService.js",{max:3,silent:!0,args:[],minUptime:300});o.on("stdout",(function(e){console.info("received stdout"),console.info(e.toString());var o=e.toString();-1!=o.indexOf("multiAddr:")&&(console.info("appears to be multiAddr"),t=o.substring(o.indexOf("multiAddr:")+10,56),r.status(200).json({multiAddr:t}))})),o.on("restart",(function(){console.error("Forever restarting script for "+o+" time")})),o.on("exit:code",(function(e){console.error("Forever detected script exited with code "+e),t&&o.stop(),t||3!=o.times||r.status(500).json({})})),o.start()})),e.delete("/token",(function(e,r){j(10)?r.status(500).json({}):r.status(200).json({})})),e.get("/protected",(function(e,r){j(40)?r.status(401).json({}):r.status(200).json({})}))}(E),function(e){e.use("/sw.js",g("../client/sw.js")),e.use("/",g("../static")),e.use("/i18n",g("../../i18n")),e.use("/client",g("../client")),e.use(k(p.resolve(__dirname,"../static/favicon.ico"))),e.post("/log/error",(function(e,r){var t=e.body.error;i.error("error during rendering: %s; error: %s",e.url,JSON.stringify(t,Object.getOwnPropertyNames(t))),r.status(200).json({})}))}(E),function(e){var r=require("./vue-ssr-bundle.json"),t=O.readFileSync(m("../client/index.html"),"utf-8");M(r,t),e.get("*",(function(e,r){if(function(e){e.setHeader("Content-Type","text/html"),e.setHeader("Cache-Control","no-cache, no-store, must-revalidate"),e.setHeader("Pragma","no-cache"),e.setHeader("Expires","0"),e.setHeader("max-age","0")}(r),!S)return r.status(503).end("waiting for compilation... refresh in a moment.");q.a.languages(D.i18n.supportedLocales);var t=Date.now(),o=e.headers["accept-language"]?e.headers["accept-language"].toString():D.i18n.defaultLocale,n=q.a.get(o),s=function(t){if(t&&404===t.code)r.status(404),i.warn("unsupported route: %s; error: %s",e.url,JSON.stringify(t,Object.getOwnPropertyNames(t))),a("/not-found");else if(t&&302===t.code){var o=_.format({protocol:e.protocol,host:e.get("host")})+t.path;t.cookies.forEach((function(e){return r.cookie(e.name,e.value)})),r.redirect(302,o),r.send()}else r.status(500),i.error("error during rendering: %s; error: %s",e.url,JSON.stringify(t,Object.getOwnPropertyNames(t))),a("/error",!0)},a=function(o,a){void 0===a&&(a=!1);var u={url:o,cookies:e.cookies,acceptLanguage:n,htmlLang:n.substr(0,2),appConfig:A(N,e),redirect:a};S.renderToStream(u).on("error",s).on("end",(function(){return i.debug("whole request: "+(Date.now()-t)+"ms")})).pipe(r)};a(e.url)}))}(E);var H=n.a.createServer(E),I=process.env.PORT||"3000";H.listen(I,(function(){i.info("server started at http://localhost:"+I)}))}]));