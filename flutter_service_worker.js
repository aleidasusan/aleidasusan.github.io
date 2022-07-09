'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "023a2612cf0a924224239466ab10c742",
"index.html": "4ca805419054c240129727de1d9f01df",
"/": "4ca805419054c240129727de1d9f01df",
"main.dart.js": "bc188cf3a6872c3d787af83caa25e2ce",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f1c55edce6e33410fa43432daa88c6e5",
"assets/AssetManifest.json": "f392f2bd67afbcdaa1dca6fbdaa8e6f3",
"assets/NOTICES": "573eb6140567ee084f7444fe5525ebbb",
"assets/FontManifest.json": "a729d1c279bec82fa8f23fbc5946ff21",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MierB-BookItalic.ttf": "f83f3eacff0dfdfa84928db716a2a20b",
"assets/fonts/MierB-Regular.ttf": "d9944a03e3f2115b0de098670cb6eeaa",
"assets/fonts/MierB-Italic.ttf": "f4ca4d209abf9c86f380a05a1b2b8732",
"assets/fonts/MierB-Black.ttf": "3586ba4e9cc3c9df0348deaf7da01f04",
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
"assets/fonts/MierB-BlackItalic.ttf": "aedc4d39b14d006d0a5c811ef61c7f07",
"assets/assets/images/tempranera/cover.webp": "7f3bbe4573d6ebce0e954139bd1ee2a4",
"assets/assets/images/tempranera/screenshot_12.jpeg": "b57ed140586e469863ddc174f05b5c2b",
"assets/assets/images/tempranera/screenshot_13.jpeg": "3713e675cd386e47932693fdaa3341da",
"assets/assets/images/tempranera/screenshot_1.jpeg": "e721e0145dcbf4be3a74fea87682c2b1",
"assets/assets/images/tempranera/screenshot_14.jpeg": "165903dae02aa320b9e599c731b7923c",
"assets/assets/images/tempranera/screenshot_6.jpeg": "3d3a7ae3d952fff5f32aaab321afc9ee",
"assets/assets/images/tempranera/screenshot_7.jpeg": "465338bb381b4e7a67293310e56ff4d0",
"assets/assets/images/tempranera/screenshot_8.jpeg": "b7c353c055f1ebc0c4e516a5702d942b",
"assets/assets/images/tempranera/screenshot_4.jpeg": "b0f1546d6c04572e62acc53bb37015fd",
"assets/assets/images/tempranera/screenshot_5.jpeg": "82aa430ac725204362d9e397a570fac4",
"assets/assets/images/tempranera/screenshot_9.jpeg": "c90af77e4fff8870145bac14c73ebd4b",
"assets/assets/images/tempranera/screenshot_2.jpeg": "2f723bbe869ead9d97147674db647b58",
"assets/assets/images/tempranera/screenshot_10.jpeg": "99df241bb270832e0c3befebddf2dadc",
"assets/assets/images/tempranera/image_1.webp": "3452d99ae801bc9957d009fe178de594",
"assets/assets/images/tempranera/screenshot_11.jpeg": "97d76bf89474600ba104294d0c3297f2",
"assets/assets/images/tempranera/screenshot_3.jpeg": "c636c53dde024199d35028dc40a8fb33",
"assets/assets/images/marriage/cover.webp": "c71b1487fd6e3f0b622ff461eb24fcff",
"assets/assets/images/marriage/image_2.webp": "61003796679981de05277627f61acf86",
"assets/assets/images/marriage/image_1.webp": "f43692d5ee530170a83259f095599683",
"assets/assets/images/photo_frame.webp": "dd9ffafda250e7dbf21e541ffcdbdf40",
"assets/assets/images/eco/cover.webp": "f9485f07ec882ecca4a32fbf9fb87364",
"assets/assets/images/eco/image_2.webp": "8f9d8d079a8a9ac287af2edfc8df0382",
"assets/assets/images/eco/screenshot_1.jpeg": "cb23b487e0b069e8004961c355caf02c",
"assets/assets/images/eco/screenshot_6.jpeg": "2b739521dbb956dd0cc5389c6840be3c",
"assets/assets/images/eco/screenshot_7.jpeg": "1a3284c031d14df94cbb783532250782",
"assets/assets/images/eco/screenshot_4.jpeg": "b7a6e1eb9d7834b1fd6b5e991baba0df",
"assets/assets/images/eco/screenshot_5.jpeg": "cc55ba49cb74d01e9b5eed2a82ce946f",
"assets/assets/images/eco/screenshot_2.jpeg": "e36e7157ef968226680abaf9a48c2478",
"assets/assets/images/eco/image_1.webp": "9e0bbf49df6dc9915520a3c0d51d88aa",
"assets/assets/images/eco/screenshot_3.jpeg": "873ff042343bb478f3b7182a6bea7e7a",
"assets/assets/images/patisserie/cover.webp": "bf9bc130bad171ddb3756d72993803e7",
"assets/assets/images/patisserie/image_2.webp": "d8a5e2c977a24035b097c0811607cefc",
"assets/assets/images/patisserie/screenshot_1.jpeg": "84c519e92f2bbe4b5322870dd56c5baa",
"assets/assets/images/patisserie/screenshot_2.jpeg": "4c1176751a306aa76455e04702450153",
"assets/assets/images/patisserie/image_1.webp": "fede2baeb8c7b7481ad56bb0eda8fa7b",
"assets/assets/images/patisserie/screenshot_3.jpeg": "51ea0ac6aab4ace00b38a6735494484d",
"assets/assets/images/imdb/cover.webp": "8ba5b10c7af07dc0379e80d1d2cf79ab",
"assets/assets/images/imdb/image_2.webp": "3859661b7d73f8b77d7a70261a30444b",
"assets/assets/images/imdb/screenshot_1.jpeg": "cb62eead5e9038a9358685d19b40cf09",
"assets/assets/images/imdb/screenshot_4.jpeg": "e7c8ffc0d896451679dbe19662b3ca26",
"assets/assets/images/imdb/screenshot_5.jpeg": "7ffd91c4fc2c7ff449f241da51bbabb7",
"assets/assets/images/imdb/screenshot_2.jpeg": "9536a7347d764bb64ba39bedc9eae556",
"assets/assets/images/imdb/image_1.webp": "3835cae7ec3177fe173bc71e32fee480",
"assets/assets/images/imdb/screenshot_3.jpeg": "459fc805a7990d3bc7526b8dfdc12c0e",
"assets/assets/images/introduction.webp": "af8cb003efa61bcc29dc3dc81438d12c",
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
