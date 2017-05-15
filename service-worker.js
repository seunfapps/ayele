var CACHE_VERSION = 1.01;
var CURRENT_CACHES = {
  prefetch: 'prefetch-cache-v' + CACHE_VERSION,
  postfetch: 'postfetch-cache-v' + CACHE_VERSION
};

var cacheRequestCondition = function (requestUrl, response) {
  return requestUrl.indexOf("audio/") > 0 ||
        requestUrl.indexOf("img/") > 0 || 
        requestUrl.indexOf("js/") > 0 || 
        requestUrl.indexOf("css/") > 0;
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  var urlsToPrefetch = ["/", "index.html"];

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
        if (cacheRequestCondition(event.request.url)) {
          var responseClone = response.clone();
          caches.open(CURRENT_CACHES.postfetch).then(function (cache) {
            cache.put(event.request, responseClone);
            console.log("Request Match Found! Caching the response to", event.request.url);
          }).catch(function (err) {
            console.error("Could not open cache for postfetch", err);
          })
        }
        return response;
      }).catch(function(error) {
        console.error('Fetching failed:', error);
        throw error;
      });
    })
  );
});