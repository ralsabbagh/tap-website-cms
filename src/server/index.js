import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react/umd/react.production.min.js';
import { StaticRouter, matchPath } from 'react-router-dom';
import serialize from 'serialize-javascript';
import App from '../shared/App';
// import routes from '../shared/routes';
import ExecutionEnvironment from 'exenv';
import compression from 'compression';
import secure from 'express-force-https';
import metaTags from './dataSource/metaTags.json';
import RoutesUtil from '../shared/utils/RoutesUtil';
import { ChunkExtractor } from '@loadable/server';
import GeneralUtil from '../shared/utils/GeneralUtil';
const path = require('path');
const statsFile = path.resolve('dist/loadable-stats.json');
const extractor = new ChunkExtractor({ statsFile });
const settings = require('../../settings').settings;
const url = require('url');
const fs = require('fs');
const app = express();

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) return false;
  return compression.filter(req, res);
}

app.set('port', process.env.PORT || settings.tap_website_PORT);

app.use(
  cors({
    optionsSuccessStatus: 200,
  }),
);

//app.use(secure);
app.use(
  compression({
    level: 9,
    filter: shouldCompress,
  }),
);

// app.get('*.js', cors(), function(req, res, next) {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   res.set('Content-Type', 'text/javascript');
//   next();
// });

app.get('*.css', cors(), function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/css');
  next();
});

function handleFontGz(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'font/opentype');
  next();
}

app.get('*.eot', cors(), handleFontGz);
app.get('*.otf', cors(), handleFontGz);
app.get('*.ttf', cors(), handleFontGz);
app.get('*.woff', cors(), handleFontGz);
app.get('*.woff2', cors(), handleFontGz);

// app.use(express.static("public"));
app.use(express.static('dist'));

app.use('/login', require('./login.js'));
app.use('/fetch_json', require('./fetch_json.js'));
app.use('/get_all_countries', require('./get_all_countries.js'));
app.use('/set_password', require('./set_password.js'));
app.use('/get_real_url', require('./get_real_url.js'));
app.use('/secure_account', require('./secure_account.js'));
app.use('/reset_password', require('./reset_password.js'));
app.use('/forgot_password', require('./forgot_password.js'));
app.use('/iplocation', require('./iplocation.js'));
app.use('/verify_reset_password_id', require('./verify_reset_password_id.js'));

app.get('/register', (req, res) => {
  res.status(302).redirect('https://register.tap.company');
});

app.get('/sitemap.xml', (req, res) => {
  res.set('Content-Type', 'text/xml');
  res.send(fs.readFileSync('src/server/sitemap/sitemap.xml', { encoding: 'utf-8' }));
});

app.get('*', (req, res, next) => {
  // let _url = url.parse(req.url).pathname;
  // const paramsExistance = RoutesUtil.checkParamsExistance(_url, 'kw', 'en');
  // const notFound =
  //   paramsExistance.result === 'notFound' && req.url.indexOf('null') <= -1 && req.url.indexOf('undefined') <= -1;
  // if (notFound) res.status(404);
  let site_routes = RoutesUtil.getSiteRoutes('kw');
  const activeRoute = site_routes.find((site_route) => matchPath(req.url, site_route)) || {};
  const promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();

  promise
    .then((data) => {
      const jsx = extractor.collectChunks(<App />);
      const context = { data };
      const markup = ExecutionEnvironment.canUseDOM
        ? renderToString(
            <StaticRouter location={req.url} context={context}>
              {jsx}
            </StaticRouter>,
          )
        : '';

      let fullUrl = 'https://' + req.get('host') + req.originalUrl;
      let result = GeneralUtil.getMetaTag(metaTags, req.path, false);
      let metatag = result.metatag;
      let language = result.language;
      let title = metatag ? metatag.title[language] : '';
      let description = metatag ? metatag.description[language] : '';

      let google_maps_script =
        req.url.indexOf('/support') > -1
          ? `<script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAoThYpCXPq6TxyVUsN_ZRsjj3gNPcp2xo" type="text/javascript" defer ></script>`
          : ``;

      let browser_polyfil_script = '';
      let ua = req.headers['user-agent'];
      if (/Windows NT/.test(ua))
        browser_polyfil_script = `<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js" defer ></script>`;

      res.send(`
      <!DOCTYPE html>
      <html lang=${language}>
        <head>
          <title>${title}</title>
          <meta name="description" content="${description}" />
          <meta property="og:title" content="${title}" />
          <meta property="og:image" content="${metatag ? metatag.image : ''}"/>
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="158" />
          <meta property="og:description" content="${description}" />
          <meta property="og:url" content="${fullUrl}" />
          <meta property="og:type" content="website" />
          <meta property="fb:app_id" content="779905339210728" />
          <meta name="twitter:title" content="${title}" >
          <meta name="twitter:description" content="${description}" >
          <meta name="twitter:image" content="${metatag ? metatag.image : ''}" >
          <meta name="twitter:card" content="summary_large_image">
          <meta name="twitter:site" content="@TapPayments">
          <script rel="preload" src="/bundle.js" defer ></script>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
          ${`<Link rel="shortcut icon" href="https://websiteimages.b-cdn.net/VND75.ico"/>`}
          ${`<meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=5">`}
          <!-- Start Alexa Certify Javascript -->
          <script type="text/javascript" defer >
          _atrk_opts = { atrk_acct:"bZsEu1FYxz20cv", domain:"tap.company",dynamic: true};
          (function() { var as = document.createElement('script'); as.type = 'text/javascript'; as.async = true; as.src = "https://certify-js.alexametrics.com/atrk.js"; var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(as, s); })();
          </script>
          <noscript><img src="https://certify.alexametrics.com/atrk.gif?account=bZsEu1FYxz20cv" style="display:none" height="1" width="1" alt="" /></noscript>
          <!-- End Alexa Certify Javascript -->
          ${`<script>
            if ('loading' in HTMLImageElement.prototype) {
              const images = document.querySelectorAll("img.lazyload");
              images.forEach(img => {
              img.src = img.dataset.src;
              });
            } else {
              // Dynamically import the LazySizes library
              let script = document.createElement("script");
              script.async = true;
              script.src =
              "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js";
              document.body.appendChild(script);
            }
            </script>`}
            ${`<!-- Google Analytics -->
              <script>
              (function(e,t,n,i,s,a,c){e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)}
              ;a=t.createElement(i);c=t.getElementsByTagName(i)[0];a.async=true;a.src=s
              ;c.parentNode.insertBefore(a,c)
              })(window,document,"galite","script","https://websiteimages.b-cdn.net/js/ga-lite.min.js");
              galite('create', 'UA-64928426-19', 'auto');
              galite('send', 'pageview');
              </script>
            <!-- End Google Analytics -->`}
            ${browser_polyfil_script}
            ${google_maps_script}
        </head>
        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `);
    })
    .catch(next);
});

app.listen(app.get('port'), () => {
  console.log(`Server is listening on port: ` + app.get('port'));
});

/*
  1) Just get shared App rendering to string on server then taking over on client.
  2) Pass data to <App /> on server. Show diff. Add data to window then pick it up on the client too.
  3) Instead of static data move to dynamic data (github gists)
  4) add in routing.
*/

// ${`<link rel="preload" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous" as="style" onload="this.rel='stylesheet'">`}
// ${`<link rel="preload" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous" as="style" onload="this.rel='stylesheet'">`}
// ${`<link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" as="style" onload="this.rel='stylesheet'">`}
// ${`<link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" as="style" onload="this.rel='stylesheet'">`}
