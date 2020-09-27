let countries = require('../data_source/countries.json');
class RoutesUtil {
  static getSiteRoutes(site_route) {
    if (site_route === null) return [];
    let site = require('../data_source/sites/' + site_route + '.json');
    let site_routes = [];
    site.pages.map((page) => {
      site.languages.map((language) => {
        site_routes.push({
          route: '/' + site.route + '/' + language.route + '/' + page.route,
          alt_route: page.alt_route ? '/' + site.route + '/' + language.route + '/' + page.alt_route : null,
        });
      });
    });
    return site_routes;
  }

  static getCountryFromURL(url) {
    let country = countries.find((country) => url.indexOf(country.country_code) > -1);
    return country.country_code;
  }

  static getLanguageFromURL(url, country_code) {
    let language;
    let site = require('../data_source/sites/' + country_code + '.json');
    let languages = site.languages;
    languages.map((_language) => {
      if (url.indexOf(_language.route) > -1) language = _language.route;
    });
    return language;
  }

  static getLanguageFromCountry(country_code) {
    let country = countries.find((country) => country.country_code === country_code);
    return country.default_language;
  }

  static isAllExist(route, url) {
    let route_array = route.split('/').filter((url_array_elem) => url_array_elem !== '');
    let url_array = url.split('/').filter((url_array_elem) => url_array_elem !== '');
    let all_exist = true;
    route_array.map((route_array_elem) => {
      all_exist = all_exist && url.indexOf(route_array_elem) > -1;
    });
    return all_exist && route_array.length === url_array.length;
  }

  static hasRedirect(url, routes, country, language, checkCountries) {
    let redirect_route = null;
    let _url = url;
    let is_all_exist;
    if (_url.indexOf(country) < 0) _url = _url + '/' + country;
    if (_url.indexOf(language) < 0) _url = _url + '/' + language;
    routes.map((route) => {
      is_all_exist = RoutesUtil.isAllExist(route.route, _url);
      if (route.alt_route && !is_all_exist) {
        is_all_exist = RoutesUtil.isAllExist(route.alt_route, _url);
      }
      if (is_all_exist) redirect_route = route.route;
    });
    if (checkCountries && redirect_route === null) {
      countries.map((country) => {
        let site_routes = RoutesUtil.getSiteRoutes(country.country_code);
        let language = RoutesUtil.getLanguageFromURL(url, country.country_code);
        if (!language) language = country.default_language;
        if (redirect_route === null)
          redirect_route = RoutesUtil.hasRedirect(url, site_routes, country.country_code, language, false);
      });
    }
    return redirect_route;
  }
}

export default RoutesUtil;
