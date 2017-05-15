var CACHE_VERSION = 1;
var CURRENT_CACHES = {
  prefetch: 'prefetch-cache-v' + CACHE_VERSION
};

self.addEventListener('install', function(event) {
  var now = Date.now();

  var urlsToPrefetch = ["audio/ayele.mp3","audio/chai.mp3","audio/apostle.mp3","audio/jiya.mp3","audio/lord.mp3","audio/funke.mp3","audio/ayemi.mp3","audio/pregnant.mp3","audio/jesu.mp3","audio/jamilaraje.mp3","audio/whollup.mp3","audio/gerrarhia.mp3","audio/whip.mp3","audio/ajekuniya.mp3","audio/continue.mp3","audio/hexperredit.mp3","audio/dazall.mp3","audio/ogaatthetop.mp3","audio/omorebicustard.mp3","audio/quiet.mp3","audio/wakacome.mp3","img/cryinglaugh.png","img/loudcryinglaugh.png","img/cryinglaugh.png","img/closedeyelaugh.png","img/grinningface.png","img/rollingeyes.png","img/sadface.png","img/pregnant.png","img/church.png","img/runningman.png","img/angryface.png","img/rollingeyes.png","img/sadface.png","img/closedeyelaugh.png","img/grinningface.png","img/grinningface.png","img/cryinglaugh.png","img/closedeyelaugh.png","img/grinningface.png","img/rollingeyes.png","img/cryinglaugh.png"];

  console.log('Handling install event. Resources to prefetch:', urlsToPrefetch);

  event.waitUntil(
    caches.open(CURRENT_CACHES.prefetch).then(function(cache) {
      var cachePromises = urlsToPrefetch.map(function(urlToPrefetch) {
        var url = new URL(urlToPrefetch, location.href);

        url.search += (url.search ? '&' : '?') + 'cache-bust=' + now;

        var request = new Request(url, {mode: 'no-cors'});
        return fetch(request).then(function(response) {
          if (response.status >= 400) {
            throw new Error('request for ' + urlToPrefetch +
              ' failed with status ' + response.statusText);
          }

          // Use the original URL without the cache-busting parameter as the key for cache.put().
          return cache.put(urlToPrefetch, response);
        }).catch(function(error) {
          console.error('Not caching ' + urlToPrefetch + ' due to ' + error);
        });
      });

      return Promise.all(cachePromises).then(function() {
        console.log('Pre-fetching complete.');
      });
    }).catch(function(error) {
      console.error('Pre-fetching failed:', error);
    })
  );
});

self.addEventListener('activate', function(event) {
  var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function(key) {
    return CURRENT_CACHES[key];
  });

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (expectedCacheNames.indexOf(cacheName) === -1) {
            console.log('Deleting out of date cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('Handling fetch event for', event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('Found response in cache:', response);

        return response;
      }

      console.log('No response found in cache. About to fetch from network...');

      return fetch(event.request).then(function(response) {
        console.log('Response from network is:', response);

        return response;
      }).catch(function(error) {
        console.error('Fetching failed:', error);
        throw error;
      });
    })
  );
});