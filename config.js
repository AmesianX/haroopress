var conf = {
    meta: {
        version: '0.7.0',
        defaultTitle: 'haroopress',
        description: 'Static Page Blog engine based Node.js',
        siteUrl: 'http://haroopress.github.com',
        author: 'Rhio Kim',
		keywords: [ 'node.js', 'javascript', 'html5' ]
    },
    lang: 'en',
    contentLength: 6, //\n\n
    deployBranch: 'gh-pages',
    CNAME: '',

    sourceDir: __dirname + '/source/data',
    publicDir: __dirname + '/_public',
    deployDir: __dirname + '/_deploy',
    themeDir: __dirname + '/source/themes'
};

conf.theme = {
    name: 'wood'
};

/* third party settings */
conf.plugins = {
    github: {
        display: true,
        user: 'haroopress',
        repoCount: 10,       //if 0 is all else display count
        profileLink: true,
        skipForks: true
    },
    twitter: {
        display: true,
        user: 'haroopress',
        tweetCount: 10,
        showReplies: false,
        followerButton: true,
        showFollowerCount: false,
        tweetButton: true
    },
    google: {
        display: false,
        googleAnalyticsId: 'UA-31231507-1',  //google analytics tracking id, default false
        googlePlus: true,
        googlePlusSize: 'medium',
        gplus: {
            display: false,
            user: '107034185858524700350'
        }
    },
    disqus: {
        display: true,
        shortName: 'haroopress',
        showCommentCount: true
    },
    facebook: {
        display: true,
        user: 'haroopress',
        showSiteLink: true,
        showLikeButton: true
    },
    delicious: {},
    contributors: {
        display: true
    },
    weather: {
        display: true,
        delay: 0,
        zipcode: 'KSXX0037'
    }
};

module.exports = conf;
