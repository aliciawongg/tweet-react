
class TweetSingle extends React.Component {
    render() {
        return (
            <ul>
                <li>
                <img src={this.props.profileimg}/> {this.props.name} @{this.props.screenname}<br/>
                {this.props.date}<br/>
                {this.props.tweet}<br/>
                Retweets: {this.props.retweetnum} Likes: {this.props.likenum}
                </li>
            </ul>
        );
    }
}

class TweetList extends React.Component {
    render() {
        let tweetThings = tweets.map(tweet => {
            return <TweetSingle
            profileimg={tweet.user.profile_image_url}
            name={tweet.user.name}
            screenname={tweet.user.screen_name}
            date={tweet.created_at}
            tweet={tweet.text}
            retweetnum={tweet.retweet_count}
            likenum={tweet.favorite_count}
            >
            </TweetSingle>
        });
        console.log('showing');
        console.log(tweetThings);
            return (
                <ul>
                    {tweetThings}
                </ul>
            );
        }
}


ReactDOM.render(
    <TweetList></TweetList>,
    document.getElementById('root')
);