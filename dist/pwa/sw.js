if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const r=e=>a(e,c),n={module:{uri:c},exports:d,require:r};s[c]=Promise.all(f.map((e=>n[e]||r(e)))).then((e=>(i(...e),d)))}}define(["./workbox-17c5f633"],(function(e){"use strict";e.setCacheNameDetails({prefix:"rickandmorty"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/about.663ecb2d.js",revision:"676e6c1e503307e53429d4e32c956df6"},{url:"assets/apis.7c1b8d68.js",revision:"58da0a28365d3577ef45a73e5f65b8da"},{url:"assets/author.24fb6d7a.jpeg",revision:"b2320ba6b0c60ab0e3a506f63711fa92"},{url:"assets/axios.4f513a5f.js",revision:"7c6a2a25cf451e4dfffbd164701fc0a7"},{url:"assets/axios.f1f32898.js",revision:"392f441216aed13247304efbbe6d51f1"},{url:"assets/character.f832b8c7.js",revision:"89f1105846cba6cc20d64d8ee97db65b"},{url:"assets/default.07d01384.js",revision:"1a818ed0a75754445f7db509188dc7ad"},{url:"assets/default.67b0577a.js",revision:"68cd944779b01c10c80120838f53853e"},{url:"assets/default.aafba5fd.css",revision:"18547c339459f2eec7410e1760cd3dd2"},{url:"assets/episode.d2174bf1.js",revision:"7b6d99e0b8e79e3b7cef8d193757b31b"},{url:"assets/episodes.44793005.js",revision:"ae8898426b7a2b2d5f1d78e526b051f1"},{url:"assets/ErrorNotFound.c099c62a.js",revision:"4ad7bf3530bdecfdc39d8d34943f8140"},{url:"assets/fastclick.8a4a8267.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"assets/firebase.df30d248.js",revision:"c9f58d6e407cd6f7d66d9138557985f3"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.83be7b2f.woff2",revision:"393b5d8b3fd798486652801f3ee8c6ea"},{url:"assets/home.85190d34.svg",revision:"b76ecea81ac7f5ed32698e4265f87b77"},{url:"assets/index.3664bf65.js",revision:"ef39649eb2f3f51ab966e7c35373fa3b"},{url:"assets/index.afd89e2d.js",revision:"467a7d88aa44ce83da4a923954c63640"},{url:"assets/index.b8fc0ba9.css",revision:"17d69a74635d2e89490459d4011c8939"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/location.489c8bc8.js",revision:"bf5df3798edbe8815468e2f833030dfe"},{url:"assets/locations.17a576b0.js",revision:"7e642bda78c133868f3e2aef6d2b9931"},{url:"assets/QAvatar.3db189f4.js",revision:"9b666694fa2c3ce1023b95021a5862ff"},{url:"assets/QBtn.fe0c314a.js",revision:"e218970d2f9883c7b6aa2dbeb7bee397"},{url:"assets/QIcon.9f0ec4b0.js",revision:"3d69d5a9c342ef0df37a25e9315c436c"},{url:"assets/rick-and-morty-episodes.0a5df676.svg",revision:"be0722d06a62a979478f28804aa73fa1"},{url:"assets/rick-and-morty-locations.650b7beb.svg",revision:"5e44d3fa80a6fd129d12a5426aab2664"},{url:"assets/use-dark.43b4630b.js",revision:"d8aecfefbea9e5aa436020791df5b358"},{url:"assets/use-router-link.d25af9ed.js",revision:"e7da4b6d79db51f1d821baa30b8edddd"},{url:"assets/use-timeout.6d7f6fc4.js",revision:"06d935a8f822634240a8ead79379b7cf"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"59457ef6aac103f9120802f497de3710"},{url:"manifest.json",revision:"4f9e779c19fab423e7a7a481437945f5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
