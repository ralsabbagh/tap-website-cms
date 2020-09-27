import { decorate, observable } from 'mobx';
import axios from 'axios';
import RoutesUtil from '../utils/RoutesUtil';

class PreferencesStore {
  constructor() {
    this.language = null;
    this.country = null;
    this.ip = null;
    this.site_routes = [];
  }

  setCountry(country) {
    if (country === this.country) return;
    this.country = country;
    this.fetchLanguage();
    this.setSiteRoutes();
  }

  setLanguage(language) {
    this.language = language;
  }

  setSiteRoutes() {
    this.site_routes = RoutesUtil.getSiteRoutes(this.country);
  }

  fetchCountry() {
    let url_country = RoutesUtil.getCountryFromURL(window.location.pathname);
    if (url_country) this.setCountry(url_country);
  }

  fetchLanguage() {
    let url_language = RoutesUtil.getLanguageFromURL(window.location.pathname, this.country);
    if (!url_language) url_language = RoutesUtil.getLanguageFromCountry(this.country);
    if (url_language) this.setLanguage(url_language);
  }

  fetchIpAndCountry() {
    axios
      .get('https://partners.payments.tap.company/api/v1.3/iploc.aspx')
      .then((res) => {
        res = res.data;
        this.ip = res.ip;
        axios({
          method: 'get',
          url: '/iplocation',
          params: {
            ip: res.ip,
          },
        })
          .then((_res) => {
            _res = _res.data;
            if (this.country === null) this.setCountry(_res.countryCode);
          })
          .catch(() => {});
      })
      .catch(() => {});
  }
}

decorate(PreferencesStore, {
  language: observable,
  country: observable,
  ip: observable,
  site_routes: observable,
});

let preferencesStore = new PreferencesStore();
preferencesStore.fetchIpAndCountry();
export default preferencesStore;
