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

const sereachCashe = {};
const invalidateCasheTime  = 60000;

const pushToCashe = (query, tagsArr) => sereachCashe[query] =
  {
    tags: tagsArr,
    date: new Date()
  };

const getFromCashe = (query) => {
  const cashed = sereachCashe[query];
  const isValid = cashed && (new Date() - cashed.date) < invalidateCasheTime;
  if (isValid && cashed.tags.length > 0) {
    return cashed.tags;
  }
  return false
}


export const getUniqHtags = (twitts, rawQueryString) => {
  console.log(twitts)
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

   return new Promise((resolve, reject) => {
     const resultFromCash = getFromCashe(query);

     if (resultFromCash) {
       console.log('gettted from cash');
       resolve(resultFromCash);
     } else {
       console.log('try to get htags from api');
       tw.get(url, {q: `%23${query}`, include_entities: true})
        .then((rs, rj) => {
          if (rs) {
            const htags = getUniqHtags(rs, query);
            pushToCashe(query, htags);
            resolve(htags);
          } else if (rj) {
            reject(rj);
          }
        })
        .catch(e => reject(e));
     }
   })
}
