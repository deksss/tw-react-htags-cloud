/*import Twitter from 'twitter';


var client = new Twitter({
  consumer_key: 'i9UmLxCd2s4SlJLzSkCXVTPN3',
  consumer_secret: 'BVYc1s0mYQRKzDW5ceyjAVn65VdJG5M7U3CEDQwNYn7QZl8oKy',
  access_token_key: '1949269382-YPceF4huoolQRmP1WjgIgn7eINX5JuCqdAT0amS',
  access_token_secret: 'H5QTgyTMmgqvV0oLiG3zxhzY70IevgzBJXR9Nni8IWiOF'
})
*/
/* eslint-disable */
const Twitter = (() => {

    return class Twitter
    {
        constructor(consumerKey, consumerSecret, accessToken, accessTokenSecret)
        {
            this.consumerKey = consumerKey;
            this.consumerSecret = consumerSecret;
            this.accessToken = accessToken;
            this.accessTokenSecret = accessTokenSecret;
        }

        get(url, params = {})
        {
            const callback = `jsonpCallback_${randomId()}`;
            const components = buildComponents.call(this, 'GET', url, Object.assign({callback}, params));
            const script = document.createElement('script');

            return new Promise((resolve, reject) => {
                document.body.appendChild(script);
                script.src = `${url}?${buildQuery(components)}`;
                script.addEventListener('error', reject);
                window[callback] = resolve;
                setTimeout(reject, 3000);
            })

            .then(json => {
                document.body.removeChild(script);
                delete window[callback];
                return json;
            })

            .catch(e => {
                document.body.removeChild(script);
                delete window[callback];
                throw {error: `${e ? 'Load' : 'Timeout'} Error (This is a dummy message)`};
            });
        }

        post(url, params = {})
        {
            const target = `dummyIframe_${randomId()}`;
            const components = buildComponents.call(this, 'POST', url, params);
            const iframe = document.createElement('iframe');
            const form = document.createElement('form');

            iframe.name = target;
            iframe.style.visibility = 'hidden';
            iframe.style.width = 0;
            iframe.style.height = 0;

            form.action = url;
            form.method = 'post';
            form.target = target;

            document.body.appendChild(iframe);
            document.body.appendChild(form);

            for (const [name, value] of Object.entries(components)) {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = name;
                input.value = value;
                form.appendChild(input);
            }

            return new Promise((resolve, reject) => {
                form.submit();
                setTimeout(reject, 3000);
                iframe.addEventListener('load', () => resolve(
                    {message: 'Probably the POST request has been sent. (This is a dummy message)'}
                ));
                iframe.addEventListener('error', reject);
            })

            .then(json => {
                document.body.removeChild(iframe);
                document.body.removeChild(form);
                return json;
            })

            .catch(json => {
                document.body.removeChild(iframe);
                document.body.removeChild(form);
                throw {error: `${e ? 'Load' : 'Timeout'} Error (This is a dummy message)`};
            });
        }
    }

    function randomString()
    {
        return btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32))));
    }

    function randomId()
    {
        return `${Math.floor(Math.random() * 1000000000)}`;
    }

    function buildQuery(object)
    {
        if (Array.isArray(object)) {
            return object.map(encodeURIComponent).join('&');
        }
        return Object
            .entries(object)
            .sort((a, b) => -(a[0] < b[0]) || +(a[0] != b[0]))
            .map(x => x.map(encodeURIComponent).join('='))
            .join('&');
    }

    function buildComponents(method, url, params = {})
    {
        const components = Object.assign(
            {
                oauth_consumer_key: this.consumerKey,
                oauth_signature_method: 'HMAC-SHA1',
                oauth_timestamp: Math.floor(Date.now() / 1000),
                oauth_version: '1.0a',
                oauth_nonce: randomString(),
                oauth_token: this.accessToken,
            },
            params
        );

        const body = buildQuery([method, url, buildQuery(components)]);
        const key = buildQuery([this.consumerSecret, this.accessTokenSecret]);
        const signature = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(body, key));

        return Object.assign({oauth_signature: signature}, components);
    }

})();

const tw = new Twitter(
            'i9UmLxCd2s4SlJLzSkCXVTPN3',
          'BVYc1s0mYQRKzDW5ceyjAVn65VdJG5M7U3CEDQwNYn7QZl8oKy',
            '1949269382-YPceF4huoolQRmP1WjgIgn7eINX5JuCqdAT0amS',
            'H5QTgyTMmgqvV0oLiG3zxhzY70IevgzBJXR9Nni8IWiOF'
        );

export const test = () => {

       tw.get(`https://api.twitter.com/1.1/search/tweets.json`, {q: '#react'})
       .then(
         (rs,rj) => {console.log(rs); console.log(rj);}
       );
  /*
  client.get('search/tweets', {q: 'react'}, function(error, tweets, response) {
     console.log(tweets);
     console.log(response);
      console.log(error);
     return tweets;
  });
  */
}
