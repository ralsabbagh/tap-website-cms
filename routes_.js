import loadable from '@loadable/component';
const ProductPage = loadable(() => import('./src/shared/components/ProductPage/ProductPage.js'));
const APIPage = loadable(() => import('./src/shared/components/APIPage/APIPage.js'));
const SupportPage = loadable(() => import('./src/shared/components/SupportPage/SupportPage.js'));
const AboutPage = loadable(() => import('./src/shared/components/AboutPage/AboutPage.js'));
const JobsPage = loadable(() => import('./src/shared/components/JobsPage/JobsPage.js'));
const HomePage = loadable(() => import('./src/shared/components/HomePage/HomePage.js'));
const OTPPage = loadable(() => import('./src/shared/components/OTPPage/OTPPage.js'));
const ActivatePage = loadable(() => import('./src/shared/components/ActivatePage/ActivatePage.js'));
const IframePage = loadable(() => import('./src/shared/components/IframePage/IframePage.js'));
const ExpiredLink = loadable(() => import('./src/shared/components/ExpiredLink/ExpiredLink.js'));
const PoliciesPage = loadable(() => import('./src/shared/components/PoliciesPage/PoliciesPage.js'));
const TestimonialsPage = loadable(() => import('./src/shared/components/TestimonialsPage/TestimonialsPage.js'));
const NTPPage = loadable(() => import('./src/shared/components/NTPPage/NTPPage.js'));
const CoronaPage = loadable(() => import('./src/shared/components/CoronaPage/CoronaPage.js'));
const ForgotPasswordPage = loadable(() => import('./src/shared/components/ForgotPassword/ForgotPassword.js'));
const ResetPasswordPage = loadable(() => import('./src/shared/components/ResetPassword/ResetPassword.js'));
const ActivatePayment = loadable(() => import('./src/shared/components/ActivatePaymentPage/ActivatePaymentPage.js'));
const SecureAccount = loadable(() => import('./src/shared/components/SecureAccount/SecureAccount.js'));
import languages from './src/shared/dataSource/languages.json';
import products from './src/shared/dataSource/products.json';
import pages from './src/shared/dataSource/pages.json';
import countries from './src/shared/dataSource/countries.json';
import accountPages from './src/shared/dataSource/accountPages.json';
import partners from './src/shared/dataSource/partners.json';

let routes = [];

languages.map((language) => {
  countries.map((country) => {
    let country_code = country.country_code.toLowerCase();
    routes.push({
      path: '/' + country_code + '/' + language.slot,
      exact: true,
      content: {
        testimonialsCircles: 'src/server/dataSource/testimonialsCircles.json',
        businesses: 'src/server/dataSource/home/businesses.json',
        news: 'src/server/dataSource/home/' + country_code + '/news.json',
        banners: 'src/server/dataSource/home/' + country_code + '/banners.json',
        blocks: 'src/server/dataSource/home/' + country_code + '/blocks.json',
        mobile_banner: 'src/server/dataSource/home/' + country_code + '/mobile_banner.json',
      },
      component: HomePage,
      compProps: {
        country: country_code,
        language: language.slot,
      },
    });
    //////////////////////////////////////////////////////////////////////////
    accountPages.map((page) => {
      routes.push({
        path: '/' + country_code + '/' + language.slot + '/account/' + page.slot,
        exact: true,
        content: {
          forgotPasswordPage: 'src/server/dataSource/forgotPasswordPage.json',
        },
        component:
          page.slot === 'forgot-password'
            ? ForgotPasswordPage
            : page.slot === 'reset-password'
            ? ResetPasswordPage
            : page.slot === 'secure-account'
            ? SecureAccount
            : null,
        compProps: {
          country: country_code,
          language: language.slot,
          page: page.slot,
        },
        noItemsHeader:
          page.slot === 'forgot-password' ||
          page.slot === 'reset-password' ||
          page.slot === 'expired-link' ||
          page.slot === 'secure-account'
            ? true
            : false,
        noItemsFooter:
          page.slot === 'forgot-password' ||
          page.slot === 'reset-password' ||
          page.slot === 'expired-link' ||
          page.slot === 'secure-account'
            ? true
            : false,
      });
    });
  });
  //////////////////////////////////////////////////////////////////////////
  pages.map((page) => {
    page.countries.map((country) => {
      routes.push({
        path: '/' + country + '/' + language.slot + '/' + page.slot,
        exact: true,
        content: page.content,
        component:
          page.slot === 'support'
            ? SupportPage
            : page.slot === 'api'
            ? APIPage
            : page.slot === 'about'
            ? AboutPage
            : page.slot === 'jobs'
            ? JobsPage
            : page.slot === 'developers'
            ? IframePage
            : page.slot === 'activate-payment'
            ? ActivatePayment
            : page.slot === 'knet-otp'
            ? OTPPage
            : page.slot === 'testimonials'
            ? TestimonialsPage
            : page.slot === 'vision2030'
            ? NTPPage
            : page.slot === 'covid19' && country === 'sa'
            ? CoronaPage
            : page.slot === 'expired-link'
            ? ExpiredLink
            : page.slot === 'terms-conditions' || 'privacy-policy'
            ? PoliciesPage
            : null,
        compProps: {
          country: country,
          language: language.slot,
          page: page.slot,
        },
        hideFooter: page.slot === 'developers' ? true : false,
        noItemsHeader: page.slot === 'activate-payment' || page.slot === 'expired-link' ? true : false,
        noItemsFooter: page.slot === 'activate-payment' || page.slot === 'expired-link' ? true : false,
      });
    });
  });
  //////////////////////////////////////////////////////////////////////////
  products.map((product) => {
    product.countries.map((country) => {
      let _country = country.toLowerCase();
      routes.push({
        path: '/' + _country + '/' + language.slot + '/' + product.slot,
        exact: true,
        content: {
          callToAction: 'src/server/dataSource/callToAction.json',
          tapPageIntro: 'src/server/dataSource/tapPageIntro.json',
          businesses: 'src/server/dataSource/businesses.json',
          banners: 'src/server/dataSource/' + product.slot + '/' + _country + '/banners.json',
          featuresMainJson: 'src/server/dataSource/features/' + product.slot + '/index.json',
          featuresKeysJson: 'src/server/dataSource/features/' + product.slot + '/' + language.slot + '.json',
          communityMainJson: 'src/server/dataSource/community/' + product.slot + '/index.json',
          communityKeysJson: 'src/server/dataSource/community/' + product.slot + '/' + language.slot + '.json',
          paymentMethods: 'src/server/dataSource/' + product.slot + '/' + _country + '/paymentMethods.json',
        },
        component: ProductPage,
        compProps: {
          country: _country,
          language: language.slot,
          product: product.slot,
        },
      });
      product.subPages.map((subPage) => {
        routes.push({
          path: '/' + _country + '/' + language.slot + '/' + product.slot + '/' + subPage.slot,
          exact: true,
          content: {
            activateProduct: 'src/server/dataSource/activateProduct.json',
            forgotPasswordPage: 'src/server/dataSource/forgotPasswordPage.json',
            // plans: 'src/server/dataSource/plans.json',
          },
          component:
            subPage.slot === 'activate'
              ? ActivatePage
              : // : subPage.slot === 'plans' ? Plans
                null,
          compProps: {
            country: _country,
            language: language.slot,
            product: product.slot,
          },
          // headerSpacePC: subPage.slot === 'plans' ? true : false,
          noItemsHeader: subPage.slot === 'activate' ? true : false,
          noItemsFooter: subPage.slot === 'activate' ? true : false,
        });
      });
    });
  });
  //////////////////////////////////////////////////////////////////////////
  partners.map((partner) => {
    partner.countries.map((country) => {
      routes.push({
        path: '/' + country.toLowerCase() + '/' + language.slot + '/' + partner.slot,
        exact: true,
        content: {
          // callToAction: 'src/server/dataSource/callToAction.json',
          // tapPageIntro: 'src/server/dataSource/tapPageIntro.json',
          businesses: 'src/server/dataSource/businesses.json',
          highlights: 'src/server/dataSource/mainPageHighlights.json',
          testimonialsCircles: 'src/server/dataSource/testimonialsCircles.json',
          news: 'src/server/dataSource/home/' + country.toLowerCase() + '/news.json',
          banners: 'src/server/dataSource/' + partner.slot + '/banners.json',
          blocks: 'src/server/dataSource/' + partner.slot + '/blocks.json',
        },
        component: HomePage,
        compProps: {
          country: country.toLowerCase(),
          language: language.slot,
          partner: partner.slot,
        },
      });
      partner.products.map((product) => {
        routes.push({
          path: '/' + country.toLowerCase() + '/' + language.slot + '/' + product.slot + '/' + partner.slot,
          exact: true,
          content: {
            callToAction: 'src/server/dataSource/callToAction.json',
            tapPageIntro: 'src/server/dataSource/tapPageIntro.json',
            businesses: 'src/server/dataSource/businesses.json',
            banners: 'src/server/dataSource/' + partner.slot + '/' + product.slot + '/banners.json',
            featuresMainJson: 'src/server/dataSource/features/' + product.slot + '/index.json',
            featuresKeysJson: 'src/server/dataSource/features/' + product.slot + '/' + language.slot + '.json',
            communityMainJson: 'src/server/dataSource/community/' + product.slot + '/index.json',
            communityKeysJson: 'src/server/dataSource/community/' + product.slot + '/' + language.slot + '.json',
            paymentMethods: 'src/server/dataSource/' + partner.slot + '/' + product.slot + '/paymentMethods.json',
          },
          component: ProductPage,
          compProps: {
            country: country.toLowerCase(),
            language: language.slot,
            product: product.slot,
            partner: partner.slot,
          },
        });
      });
    });
  });
});

export default routes;
