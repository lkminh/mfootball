/**
 * Created by minhluong on 6/9/17.
 */
const EXPIRY = 5 * 60; // 5 min
const CACHE_TIME_KEY_SUFFIX = ':t';
const cachedFetch = (url, options) => {
    let expiry = EXPIRY;
    if (typeof options === 'number') {
        expiry = options || expiry;
    } else if (typeof options === 'object') {
        expiry = options.expiry || expiry;
    }
    let cacheKey = hashStr(url);
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

        if (response.status === 200) {
            // let's only store in cache if the content-type is
            // JSON or something non-binary
            let contentType = response.headers.get('Content-Type');
            if (contentType && (contentType.match(/application\/json/i) || contentType.match(/text\//i))) {
                // There is a .json() instead of .text() but
                // we're going to store it in sessionStorage as
                // string anyway.
                // If we don't clone the response, it will be
                // consumed by the time it's returned. This
                // way we're being un-intrusive.
                response.clone().text().then(content => {
                    localStorage.setItem(cacheKey, content);
                    localStorage.setItem(cacheTimeKey, Date.now());
                });
            }
        }
        return response;
    });
};

const hashStr = s => {
    let hash = 0;
    if (s.length == 0) return hash;
    for (let i = 0; i < s.length; i++) {
        let char = s.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

export default cachedFetch;