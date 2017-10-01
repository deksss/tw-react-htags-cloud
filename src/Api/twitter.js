import Twitter from  '../Lib/TwitterRESTinBrowser';
/* eslint-disable */

const consumerKey = 'i9UmLxCd2s4SlJLzSkCXVTPN3';
const consumerSecret = 'BVYc1s0mYQRKzDW5ceyjAVn65VdJG5M7U3CEDQwNYn7QZl8oKy';
const accessToken = '1949269382-YPceF4huoolQRmP1WjgIgn7eINX5JuCqdAT0amS';
const accessTokenSecret = 'H5QTgyTMmgqvV0oLiG3zxhzY70IevgzBJXR9Nni8IWiOF';

const tw = new Twitter(
  consumerKey,
  consumerSecret,
  accessToken,
  accessTokenSecret
);


export const getUniqHtags = (twitts, rawQueryString) => {
  const query = rawQueryString.toLowerCase();
  return twitts.statuses.reduce(
    (resultTags, next) => {
      if (next.entities.hashtags.length > 0) {
          const uniqFiltredTags = next.entities.hashtags.reduce((tags, htag) => {
              const text = htag.text.toLowerCase();
              if (text.search(query) === 0 && !resultTags.includes(text)) {
                  return [...tags, ...[htag.text]]
              } else {
                 return tags;
              }
          }, [])
          return [...resultTags, ...uniqFiltredTags];
      }
      return resultTags;
  }, []);
}

export const sereachTweets = query => {
   const  url = 'https://api.twitter.com/1.1/search/tweets.json';
   return tw.get(url, {q: query});
   /*
   tw.get(url, {q: query})
     .then((resolve, reject) => {
       console.log(reject);
       const htags = getUniqHtags(resolve, query);
       console.log(htags);
     }
    );
    */
}
