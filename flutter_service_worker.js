'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "023a2612cf0a924224239466ab10c742",
"index.html": "cd53dd20b8cbc578e9de68574d18b8ac",
"/": "cd53dd20b8cbc578e9de68574d18b8ac",
"main.dart.js": "e207728560b172e3f41a36049fa3e782",
"icons/favicon-16x16.png": "84a3065847490d3f3909d7e3732b65e9",
"icons/safari-pinned-tab.svg": "195623d8ec9b355ea58346fcd777363e",
"icons/favicon.ico": "8bb7304235e843d6ea023a5ac9f9eaf6",
"icons/apple-touch-icon.png": "0321abba390fdb1f90afeb4387f310df",
"icons/Icon-192.png": "165542ba374a360d96bfc1d1f29c8c6e",
"icons/Icon-maskable-192.png": "253024d6030ebc880817c703135823a0",
"icons/mstile-150x150.png": "310e1196589bf787a1ec69f893c299e7",
"icons/Icon-maskable-512.png": "65f9bd2e736bfe726f29994cb90fff91",
"icons/browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"icons/Icon-512.png": "99c10f0bf61ff29060c9b1fbb6bcc3ae",
"icons/favicon-32x32.png": "bdaff61189ea690d7ba685ed652ec4f1",
"manifest.json": "d0a2c02adc7cf3126e6e4d5d01ac89d4",
"assets/AssetManifest.json": "12daba05d77d13e0c3fe736db68322c1",
"assets/NOTICES": "7a4a67827d94bf55c994e80696c4da22",
"assets/FontManifest.json": "7b58ff10ebfed2d2c9fe62f81f2f8a5f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MierB-BookItalic.ttf": "f83f3eacff0dfdfa84928db716a2a20b",
"assets/fonts/MierB-Regular.ttf": "d9944a03e3f2115b0de098670cb6eeaa",
"assets/fonts/MierB-Italic.ttf": "f4ca4d209abf9c86f380a05a1b2b8732",
"assets/fonts/MierB-Thin.ttf": "b7ff2e9df390f94d6b8f82b875eab4d2",
"assets/fonts/MierB-ThinItalic.ttf": "5b5363f0b2719398598fd1bf46ff70ad",
"assets/fonts/MierB-BoldItalic.ttf": "d5b51ee208682ba845e7fb0df90067d8",
"assets/fonts/MierB-ExtraBoldItalic.ttf": "a16f1947ba0e17cea486e05c83296cd1",
"assets/fonts/MierB-Book.ttf": "fcbdeacc740c85ac6515785de0261b9b",
"assets/fonts/MierB-Bold.ttf": "8208a1aadac7a869d2e9a0983b7c16ed",
"assets/fonts/MierB-LightItalic.ttf": "6dc0082b9053315bb9572089a5f7f6fe",
"assets/fonts/MierB-HeavyItalic.ttf": "fdcb213e460e3bf4ce0fbcf4a1d2c7ed",
"assets/fonts/MierB-DemiBold.ttf": "9967729838c543006908b06a520ab6fe",
"assets/fonts/MierB-Light.ttf": "4efdac579cf2fc13d831691ec350d6b3",
"assets/fonts/MierB-ExtraBold.ttf": "2346af275eedda236b109044e8a15161",
"assets/fonts/MierB-DemiBoldItalic.ttf": "66254cc0d3481e5f6fb3e5cf4da5bbac",
"assets/fonts/MierB-Heavy.ttf": "5270692269061a595ed85328401a30ed",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/vector_graphics/gmail.svg": "e01ead5483a479a56004dbce5ef48e3e",
"assets/assets/vector_graphics/back_arrow.svg": "7f9671daee9865a081d83801b54413b6",
"assets/assets/vector_graphics/instagram.svg": "341a67c538d67f9ce92005cf14255dc2",
"assets/assets/vector_graphics/linkedin.svg": "97ce31c8546f65bd1e25afbbf86ec1de",
"assets/assets/vector_graphics/behance.svg": "426317c536dd22393ee54f7fbdfb6596"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
