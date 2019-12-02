---
date: 2019-11-30
title: "Deploy to IPFS"
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
categories: 
    - IPFS
    - Gatsby
tags:
    - IPFS
---

## Introduction

IPFS is the [InterPlanetary File System](https://ipfs.io/) which brings us a more distributed and
independent web. To me this idea is really fascinating. I thought this is the right time to
start over with my tech blog and host it via IPFS. This article is about how to do this with 
Gatsby.

### Publish to IPFS

With IPFS you can publish content to the peer-to-peer network. You can even publish a whole folder
which is then accessible as a [Merkle Tree](https://en.wikipedia.org/wiki/Merkle_tree). That is 
ideal for websites created by Gatsby (or other static websites / single page apps).

To do this you just need two things:

1. Run an IPFS node
2. Add your folder to the IPFS p2p network

Running a node is easy. Visit [IPFS](https://ipfs.io/) and download any client. I installed the 
desktop version. Once installed you can add command line support in the settings screen.

Once you've built your website, you can add it to IPFS (assuming that your website resides inside the folder public):

```
ipfs add -r public
```

this results in following output:

```
added Qmd7d1btLVUWdM5oSwbqwSNsT3nzAxES1YdYMemfu9bA4T public/404/index.html
added QmZucwyTHqfHY7Sr9m9GKwoJ9hJk7mPgjTfdgr3L9BcMHr public/404.html
added QmXQjAedZdMw1TzxzMN9CHuEskM1JhmGrXqcTGRCbrTDfQ public/about/index.html
added Qmf4Wac9tEYedtB5Voqzh1SwqpdjxrEAFhZs11BoWK11sd public/index.html
added QmfUz7Rhj6QMCaGpxvj9CjNGP2UnQdceBDL6Gn1qYwvYPZ public/ipfs/index.html
...
added QmVUR7dfmXLhKZaX1nSyJ1d8SW3k8hR2gQ77L3xY51ApVg public
 ```

The last line tells you the content Id of your Merkle Tree root - your website! You can access it now by visiting
following url: http://localhost:8080/ipfs/QmVUR7dfmXLhKZaX1nSyJ1d8SW3k8hR2gQ77L3xY51ApVg/

### Make Gatsby links relative

But there is a problem. Your homepage may somehow work. But all other pages and links are broken. Gatsby needs to
know beforehand in which folder your site is going to be. So it does not like your content Id prefixed. But
happily someone has solved this for us. There is a Gatsby plugin which makes all links relative:

https://github.com/moxystudio/gatsby-plugin-ipfs

While your website is now running on your local IPFS node, we sill got problems:

- I want a nicer URL.
- I want the same URL regardless of my content changes.
- I want it to be available when my notebook is offline.

This problems are solved in a future post.