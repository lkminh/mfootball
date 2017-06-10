/**
 * Created by minhluong on 6/9/17.
 */

const EXPIRY = 5 * 60; // 5 min
const CACHE_TIME_KEY_SUFFIX = '~~cacheTime~~';
const cachedFetch = (url, options) => {
    let expiry = EXPIRY;
    if (typeof options === 'number') {
        expiry = options || expiry;
    } else if (typeof options === 'object') {
        expiry = options.expiry || expiry;
    }
    let cacheKey = url;
    let cacheTimeKey = `${cacheKey}${CACHE_TIME_KEY_SUFFIX}`;



    let cached = localStorage.getItem(cacheKey)
    let cacheTime = localStorage.getItem(cacheTimeKey);

    if (cached != null && cacheTime != null) {
        let age = (Date.now() - parseInt(cacheTime)) / 1000;
        if (age < expiry) {
            let response = new Response(new Blob([cached]));
            return Promise.resolve(response);
        } else {
            localStorage.removeItem(cacheKey);
            localStorage.removeItem(cacheTimeKey);
        }
    }

    return fetch(url, options).then(response => {
        let contentType = response.headers.get('Content-Type');

        if (contentType && (contentType.match(/application\/json/i) || contentType.match(/text\//i))) {
            response.clone().text().then(content => {
                localStorage.setItem(cacheKey, content);
                localStorage.setItem(cacheTimeKey, Date.now());
            });
        }
        return response;
    });
};

export default cachedFetch;