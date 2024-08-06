'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f47b0536b33b72c1e810d3f624d4c46d",
"version.json": "cd3e91c6ab1e348dc9893ef62f8d4b41",
"index.html": "13a0f83838572a09106ad5e0a839a4c4",
"/": "13a0f83838572a09106ad5e0a839a4c4",
"main.dart.js": "be101afba6bb14c1ba969bc44ba61b3a",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b198e974447415282e00b6691733db33",
".git/config": "cfee4e1c9e424c2681c13fde42b2501d",
".git/objects/92/d23c2f68251f82ecf27cfbbc3705fe6611d684": "1ef77cdc146359191bb383f31525569f",
".git/objects/66/d537326ebf48026ba7ffeba360d8b51416b2c3": "bfcbaa66451d74849ac088fff259d545",
".git/objects/04/a9f0b81b6222e55071da7170c24048d323b136": "9ce594ea557a81c9d043a39d0a5b997c",
".git/objects/3c/03fbdafbb4b64000a61c698fd4941325b76483": "1775b1c0cd4e491fc1ec826c5a462c02",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/8131808ad2a8a0a048b5eb212f6a1b6bb7d6be": "49a0fc4d6ed5fea65712072d36175b3b",
".git/objects/0b/add8c7560c69b10b1aa28fda94515426f3f109": "08cde80152691c1655c3b22bc60b7dc9",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/94/8e142bcb859db2ddad3512847259d97aa5fba0": "3dc1e18f6d47659d8ea90606f2d28612",
".git/objects/a3/ed94d98dfde3d926d14457294d86e1b318219b": "fa406c6d268b7d2a98828823359e2650",
".git/objects/ac/f029c8530fc6f13e39aafed77edb33b1652855": "788d3f4e6e4e557072270bda231c5af7",
".git/objects/ac/44eaab308542a95a9b8c941e2f3b259433d1a8": "3591c0bcf64d04c54261c98caf2db614",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a5/5c740443f9eefe34191edfe73e69c8fd7cb3f6": "ddf1c1aca736012319f09536564abafe",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/c6c5a8c2494e938909a5bc237a142c76993ad8": "f2b6674805f667170b766c38b6307fd4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/adea779c4e53231927ea8328243e80bd92f5a1": "ebebeaba724d6382bf09abdc931d62ca",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/a13f66552fc2dfaa52133b24397e7f3c7258d2": "da3977925046a055bd9178ac9615dcf0",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fd/b121dd6b4399eda7877fe0f1f4c15e16a6e3d8": "1042538f91f0d2a4c29d211b80fc6049",
".git/objects/fd/81faddb8665a47fbdf9f40a11487aa75276eb5": "136f5b4228b2e6fbe19d204e989263b1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/c1/739f939e3d21975f42a53e424ea37d471e2eea": "28ad53608d867663d307df5f711b0b4e",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/16/54bed9a788cb5af906e7bd681a42a3d8dc88bc": "cf5098c2187535f7f88b019c6b3ccc43",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/5f0a02c1df3f6341931a6b4da7407c7df2a4a9": "d12c26b4e25ffbaddd6dd78a5c4b9369",
".git/objects/7b/22394af2ad0e30f6ace30769a9956948796dd0": "ae92e9539bd81daa2c985c64c58b833b",
".git/objects/8f/23a0835e972bacf21b14f75db69fa112592489": "df4cb0d8f1f2f1c61838cdc025d63d88",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/5ede499dd55c3577b0699aaf00b99b58631538": "61dba381c26dd57123dee876f927c790",
".git/objects/21/afcc4db935c3ddda99d181b091752d11068f86": "fbd255f6bc2e37c30321052f0212c48b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b8/5ac0cac2c6f00bb41550ea7acbccff61874637": "a93abb9826478fc9f2aeb9c618d28b14",
".git/objects/dc/3ae9dc56466ff07023b745191b0cb8f9e98b2d": "555aeee25683ec46c78174a6041ed17e",
".git/objects/d2/89da13dc7e83a289cc9629d1f6de1390656818": "53e11e3511cdf5ea03cead542fb4226e",
".git/objects/aa/98e4345aad60091312299ca8818129bec93d6c": "974a747f6857a6b37711398f8bcdd44e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/f7/284aff5e644a38157322e017cace03861380d7": "e2c34c739a83abf38b7157e59ad2edcc",
".git/objects/f6/436eaeb851c6c5dd1338a99f5114bfcc81bf8d": "1c30d336fc6587aa5b87ab59f354b45c",
".git/objects/f6/cc31ef03563f8cf26159dc5b4d974d6c7b153b": "02929f2469c8644e2299995654245451",
".git/objects/e7/572cb5a95ec85783394aa41cf4e7c63181d677": "818ca5fad3e65be75ae91fc2c0ff58fb",
".git/objects/24/478f245aa9f6fdf8fd20fc80374b161e0ca9c3": "c8dde57918e9eb04a7007db6e5ce7211",
".git/objects/15/666936f30cc66827a0863283a696ffdc7bcd3e": "9d501561ab22f8df4a097d193caa9226",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/952140c85d1c5651562b057365519b96218e58": "8b8d9c3f2dc6ee2285f5f34856ce56f5",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/40/0598b979f3cc626301a5f28919b86e5b203b43": "5d4465cc89776999a06f1716242af92e",
".git/objects/2e/2caa0257ddc72ecb2b54bbc5b3aa492471aec1": "a8f7bfbce1503ee11a73d7f18be698a5",
".git/objects/2b/cf9d9ed06b7c2412fe7295ee3f01a5a8ed7b9e": "4a354fa2076ff6e01c4f05c8bfe12054",
".git/objects/22/d86cc1a6a8cf0a73277a169bc4b1ce30bc60f1": "fb2d47e3789e70fce75b2bdb21b95e7a",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "793b284b343d893192142fe441ac9a1d",
".git/logs/refs/heads/main": "793b284b343d893192142fe441ac9a1d",
".git/logs/refs/remotes/origin/main": "420adf6bd4a2538430848e30a9945498",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "463a405fd5e07651bee48af950371b0a",
".git/refs/remotes/origin/main": "463a405fd5e07651bee48af950371b0a",
".git/index": "fc9bc4e0ea3b73eab17aa0decf37b78e",
".git/COMMIT_EDITMSG": "ac432b5c6421da1faa3dde55c46a09c2",
"assets/AssetManifest.json": "2ae30cc09046d8a37e153ca66f2cdb14",
"assets/NOTICES": "e9b370a04dfeec89008822f8709b79e3",
"assets/FontManifest.json": "6a58b57211ecf4f8d0dbbac5b3daf4e1",
"assets/AssetManifest.bin.json": "f013bb304b5ee0db7c1f1c8025f11e9f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "22723af2cf04f4fecda0da2465a7abdd",
"assets/fonts/MaterialIcons-Regular.otf": "6b5b376e19bd266c362bd28941364e19",
"assets/assets/images/logo.png": "ad5e737984a621f98f12fd3389540418",
"assets/assets/images/img1.png": "0605cfdbb3573f98667d6b96520c89d8",
"assets/assets/images/cycle.png": "adba51d9f31695c2666dc055e4b18682",
"assets/assets/font/Inter-Regular.otf": "6b39225d5fa67b3d717db7c92e88c6ad",
"assets/assets/icon/ic_insta.svg": "dc9dcc3cca60778e637f631da334f90a",
"assets/assets/icon/ic_linkdin.svg": "6e9169c79f090890a6f5bf89c46aa473",
"assets/assets/icon/ic_google.svg": "bbae562e0ab6013f6179e659f5218798",
"assets/assets/icon/ic_play.svg": "fe6e984d46b3664fb1a22b1eeaad96e8",
"assets/assets/icon/ic_google_logo.svg": "596093db676576a790ddd336ca8391a4",
"assets/assets/icon/ic_fb.svg": "2147d27d9dce62370a506ec5689b1d0e",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
