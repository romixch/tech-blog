

const config = {
  siteTitle: "Romans Tech Blog", // Site title.
  siteTitleShort: "Romans Tech Blog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Romans Tech Blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://gatsby-markdown-blog-starter.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "__GATSBY_IPFS_PATH_PREFIX__", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Just another tech blog.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: undefined, // FB Application ID for using app insights
  googleAnalyticsID: undefined, // GA tracking ID.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD.MM.YYYY", // Date format for display.
  userName: "Roman Schaller", // Username to display in the author segment.
  userEmail: "roman.schaller@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "romixch", // Optionally renders "Follow Me" in the Bio segment.
  userGitHub: "romixch", // Optionally renders "Follow Me" in the Bio segment.
  userLocation: "Switzerland", // User location to display in the author segment.
  userAvatar: "https://s.gravatar.com/avatar/0bf0ea9353e29b2394877419a06df02b?s=80", // User avatar to display in the author segment.
  userDescription: "", // User description to display in the author segment. 
  copyright: "Copyright © 2019. All rights reserved.", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "red" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
// if (config.siteRss && config.siteRss[0] !== "/")
//   config.siteRss = `/${config.siteRss}`;

module.exports = config;
