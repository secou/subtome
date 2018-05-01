'use strict';

angular.module('subtome')
.factory('store', function() {
  var apps = [
  {
    name: 'BazQux Reader',
    tags: ['web', 'comments'],
    description: 'RSS feed reader that shows comments to posts and supports reading of Facebook and Google+ pages.',
    url: 'https://bazqux.com/',
    icon: 'https://bazqux.com/favicon.ico',
    registration: {
      name: 'BazQux',
      url: 'https://bazqux.com/add?url={feed}'
    }
  },
  {
    name: 'Blogtrottr',
    tags: ['email', 'digests'],
    description: 'Blogtrottr delivers updates from all of your favourite news, feeds, and blogs directly to your email inbox.',
    url: 'http://blogtrottr.com/',
    icon: 'http://blogtrottr.com/favicon.ico',
    registration: {
      name: 'Blogtrottr',
      url: 'http://blogtrottr.com/?subscribe={feed}'
    }
  },
  {
    name: 'Feedbin',
    tags: ['web'],
    description: 'A fast, simple RSS feed reader that delivers a great reading experience.',
    url: 'https://feedbin.me/',
    icon: 'https://feedbin.me/favicon.ico',
    registration: {
      name: 'Feedbin',
      url: 'https://feedbin.me/?subscribe={feed}'
    }
  },
  {
    name: 'FeedHQ',
    tags: ['web', 'mobile', 'open source'],
    description: 'FeedHQ is a feed reader built with readability and mobility in mind',
    url: 'https://feedhq.org/',
    icon: 'https://feedhq.org/static/core/img/icon-rss.png',
    registration: {
      name: 'FeedHQ',
      url: 'https://feedhq.org/subscribe/?feeds={feeds}&url={url}'
    }
  },
  {
    name: 'Feedleap',
    tags: ['web', 'kippt', 'bookmark', 'open source'],
    description: 'FeedLeap lets you subscribe to your favorite RSS feeds and store new entries as Clips in any Kippt List you want.',
    url: 'https://feedleap.herokuapp.com',
    icon: 'https://feedleap.herokuapp.com/static/favicon.ico',
    registration: {
      name: 'Feedleap',
      url: 'https://feedleap.herokuapp.com/feeds/new/?feed={feed}&source=subtome'
    }
  },
  {
    name: 'Feedly',
    tags: ['chrome', 'firefox', 'mobile'],
    description: 'Feedly is a news aggregator application for various Web browsers and mobile devices running iOS and Android.',
    url: 'http://feedly.com/',
    icon: 'http://feedly.com/favicon.ico',
    registration: {
      name: 'Feedly',
      url: 'http://www.feedly.com/home#subscription/feed/{feed}'
    }
  },
  {
    name: 'FlowReader',
    tags: ['web', 'iOS'],
    description: 'FlowReader is a faster way to manage your online content! Combine your favorite sources & networks to get the news the matters most - all in one place.',
    url: 'http://flowreader.com',
    icon: 'http://flowreader.com/favicon.ico',
    registration: {
      name: 'FlowReader',
      url: 'https://www.flowreader.com/subscribe?url={feed}'
    }
  },
  {
    name: 'InoReader',
    tags: ['web', 'advanced'],
    description: 'Light and Fast RSS/Atom Reader inspired by Google Reader',
    url: 'https://inoreader.com/',
    icon: 'https://inoreader.com/images/icons/72_x_72_pixels.png',
    registration: {
      name: 'InoReader',
      url: 'https://www.inoreader.com/?add_feed={feed}'
    }
  },
  {
    name: 'Kouio',
    tags: ['web', 'mobile', 'tablets'],
    description: 'Kouio is the RSS reader you\'ve always wanted.',
    url:'https://kouio.com/',
    icon:'https://kouio.com/favicon.ico',
    registration:{
      name: 'Kouio',
      url: 'https://kouio.com/subscribe?url={feed}'
    }
  },
  {
    name: 'My Yahoo',
    tags: ['yahoo', 'legacy'],
    description: 'My Yahoo is a customizable web page with news, stock quotes, weather, and many other features.',
    url:'http://my.yahoo.com/',
    icon:'http://my.yahoo.com/favicon.ico',
    registration:{
      name: 'My Yahoo',
      url: 'http://add.my.yahoo.com/rss?url={feed}'
    }
  },
  {
    name: 'Netvibes',
    tags: ['web', 'dashboard', 'analytics'],
    description: 'Netvibes is the all-in-one dashboard intelligence platform.',
    url:'http://www.netvibes.com',
    icon:'http://cdn.netvibes.com/img/favicon-12.png',
    registration:{
      name: 'Netvibes',
      url: 'http://www.netvibes.com/subscribe.php?url={feed}'
    }
  },
  {
    name: 'NewsBlur',
    tags: ['web', 'mobile', 'advanced', 'open source'],
    description: 'NewsBlur is a personal news reader bringing people together to talk about the world.',
    url: 'http://www.newsblur.com/',
    icon: 'http://newsblur.com/favicon.ico',
    registration: {
      name: 'NewsBlur',
      url: 'http://www.newsblur.com/?url={feed}'
    },
    installed: true
  },
  {
    name: 'Player FM',
    tags: ['podcast', 'mobile', 'web'],
    description: 'Listen to talk shows on hundreds of topics, everything from Politics to Pokemon! ',
    url:'http://player.fm/',
    icon:'http://player.fm/favicon.ico',
    registration:{
      name: 'Player FM',
      url: 'http://player.fm/series?url={feed}&referrer={url}&related_feeds={feeds}'
    }
  },
  {
    name: 'Squirro',
    tags: ['web', 'intelligence', 'assistant'],
    description: 'Squirro is the leader in Context Intelligence, combining structured and unstructured data to provide the \'Why\' behind the data.',
    url:'http://squirro.com/',
    icon:'http://squirro.com/files/2213/3673/7722/favicon.ico',
    registration:{
      name: 'Squirro',
      url: 'https://squirro.com/app/#add/query/{feed}'
    }
  },
  {
    name: 'The Old Reader',
    tags: ['web', 'popular', 'advanced'],
    description: 'The Old Reader was built to be a Google Reader replacement, and it does it well!',
    url: 'http://theoldreader.com/',
    icon: 'http://theoldreader.com/favicon.ico',
    registration: {
      name: 'The Old Reader',
      url: 'http://theoldreader.com/feeds/subscribe?url={feed}'
    },
    installed: false
  },
  {
    name: 'Rivered',
    tags: ['web'],
    description: 'An uncluttered River of News; no unread item count, no complexity. Just the content you subscribe to.',
    url: 'http://www.rivered.io/',
    icon: 'http://www.rivered.io/favicon.ico',
    registration: {
      name: 'Rivered',
      url: 'http://www.rivered.io/add?url={feed}'
    }
  },
  {
    name: 'RSS feed redirect',
    tags: ['developer'],
    description: 'Redirects you to the raw RSS feed. This is for advanced users only.',
    url:'',
    icon:'https://upload.wikimedia.org/wikipedia/en/4/43/Feed-icon.svg',
    registration:{
      name: 'RSS feed',
      url: '/#/redirect?to={feed}'
    }
  },
  {
    name: 'Wordpress Reader',
    tags: ['wordpress', 'web', 'mobile'],
    description: 'Wordpress Reader displays all the posts across all the blogs you follow in the order they were published.',
    url: 'https://wordpress.com/',
    icon: 'https://s2.wp.com/i/favicon.ico',
    registration: {
      name: 'Wordpress',
      url: 'https://wordpress.com/following/edit/?follow={feed}'
    }
  }
  ];
  return apps;
});
