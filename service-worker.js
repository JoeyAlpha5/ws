"use strict";var precacheConfig=[["/ws/index.html","bf6340960ec61a04cea2ff45989c8ba5"],["/ws/static/css/main.b90c458e.css","8e62e5aab05df46d775bb37a838fe566"],["/ws/static/js/main.c5d70241.js","7542e621597fa0c06d582c0057d5ba23"],["/ws/static/media/C1.cb5f80f7.jpg","cb5f80f72e51cad813047111d7afd1d7"],["/ws/static/media/C2.01fa9c28.jpg","01fa9c2810a6b949cd39204d76a32eff"],["/ws/static/media/C3.47a7d66a.jpg","47a7d66ac1bf0132767bba474a1cb2ff"],["/ws/static/media/C4.eb7f8465.jpg","eb7f8465875fe11a9f09bd98fe3ec666"],["/ws/static/media/C5.2c347fba.jpg","2c347fba53faccc020f43c806d7cb955"],["/ws/static/media/M1.3d67ca25.jpg","3d67ca25ed2ca501c58ac827640489ee"],["/ws/static/media/M2.dd203bf5.jpg","dd203bf5d818235ad4cdb1a6d265ae80"],["/ws/static/media/M3.ae2b25bc.jpg","ae2b25bc13608938221904e2f30e1e3a"],["/ws/static/media/M4.db462e79.jpg","db462e79c2319b79b04923cbf549ed6c"],["/ws/static/media/M5.8e967abc.jpg","8e967abc3925db8458829b8c0fb65f52"],["/ws/static/media/N1.f8924fbc.jpg","f8924fbcd6d6287eebc43cfedcc5f08a"],["/ws/static/media/N2.d33803d8.jpg","d33803d893f571baf9a3799ff880641e"],["/ws/static/media/N3.78b09c79.jpg","78b09c79f436948bd40da2d1c3ae5a7b"],["/ws/static/media/N4.8f255f17.jpg","8f255f170eeeeeb9a37063a11ef504ff"],["/ws/static/media/N5.7b7ac7ee.jpg","7b7ac7ee6a3a5a18e60cbb0e103891d2"],["/ws/static/media/Roboto-Light.e22062b3.ttf","e22062b3188c8199283ef2aa835d4653"],["/ws/static/media/Roboto-Medium.99fc0816.ttf","99fc0816a09395454061301fefa42bf1"],["/ws/static/media/S1.5dba4ff2.jpg","5dba4ff20ab46119236dcaef43804eb5"],["/ws/static/media/S2.8e87d341.jpg","8e87d3412a10a9b20e7e272c040ef075"],["/ws/static/media/S3.9bf1c48d.jpg","9bf1c48d1c07d3b9371bf4fcf1092ffa"],["/ws/static/media/S4.631cb778.jpg","631cb778ed17b67ae608c5d5190733ef"],["/ws/static/media/S5.80e4bb80.jpg","80e4bb804f40f54c9d39e5d5e8e97e5e"],["/ws/static/media/background.04de9aff.jpg","04de9aff5f48781ef5a3aaf228ed4fcf"],["/ws/static/media/calendar.4286de11.png","4286de115e7ace191b9ef48c0944a532"],["/ws/static/media/dembe.a752139c.jpg","a752139c5f06965906fefdd6b8b3a331"],["/ws/static/media/error.85e165da.svg","85e165da4bf509d5955a8844e09c603d"],["/ws/static/media/joey.f379d4f0.jpg","f379d4f06ce8a9cc951151d2122c0a9e"],["/ws/static/media/logo.eea2d4a2.png","eea2d4a234d2a783c53c3875ea3dabab"],["/ws/static/media/menu.ac609179.svg","ac609179a92c857f536a0b4d8519e73f"],["/ws/static/media/tatenda.42536c8d.jpg","42536c8d73efbdff7f82febe6bb49b6b"],["/ws/static/media/tsego.7940aeb9.jpg","7940aeb9c105d1557681cf6de9c47026"],["/ws/static/media/tumi.8c063180.jpg","8c063180da05c61a32ab7bfdea57b441"],["/ws/static/media/updateOne.e4fc2024.jpg","e4fc20248135428966196891d38bbd2b"],["/ws/static/media/updateTwo.a0c991ff.jpg","a0c991ffaf3fb6d596970235d35ec533"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var s="/ws/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});