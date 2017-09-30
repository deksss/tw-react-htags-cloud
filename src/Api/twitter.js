import Twitter from 'twitter';


var client = new Twitter({
  consumer_key: 'i9UmLxCd2s4SlJLzSkCXVTPN3',
  consumer_secret: 'BVYc1s0mYQRKzDW5ceyjAVn65VdJG5M7U3CEDQwNYn7QZl8oKy',
  access_token_key: '1949269382-YPceF4huoolQRmP1WjgIgn7eINX5JuCqdAT0amS',
  access_token_secret: 'H5QTgyTMmgqvV0oLiG3zxhzY70IevgzBJXR9Nni8IWiOF'
})

export const test = () => {
  client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
     console.log(tweets);
     return tweets;
  });
}
