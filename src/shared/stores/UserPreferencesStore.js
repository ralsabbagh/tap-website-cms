// import { decorate, observable } from 'mobx';
// import languages from '../dataSource/languages.json';
// import countries from '../dataSource/countries.json';
// import pages from '../dataSource/pages.json';
// import axios from 'axios';
// import LangContentPicker from '../utils/LangContentPicker';
// import { console } from 'window-or-global';

// class UserPreferencesStore {
//   constructor() {
//     this.language = '';
//     this.ip = '';
//     this.productObj = {};
//     this.partnerObj = {};
//     this.country_code = '';
//     this.getCurrentCountryLoading = true;
//     this.getAvailableCountriesLoading = true;
//     this.availableCountries = [];
//     this.pageUrlKeys = {};
//     this.intercomUser = {};
//     this.openIntercom = this.openIntercom.bind(this);
//     this.products = null;
//     this.partners = null;
//     this.productsLoading = true;
//     this.partnersLoading = true;
//   }

//   setIntercomeUser(user_id, email_address, profile_name) {
//     this.intercomUser = {
//       user_id: user_id,
//       email: email_address,
//       name: profile_name,
//     };
//   }

//   openIntercom() {
//     window.Intercom(
//       'showNewMessage',
//       this.language === 'ar'
//         ? 'مرحبا، لدي استفسار عن آلية الربط مع المنصات الإلكترونية'
//         : 'Hello, I need some help integrating with an e-commerce platform',
//     );
//   }

//   checkShortLink(link) {
//     let index = link.lastIndexOf('?') + 1;
//     let short_code = link.substring(index);
//     if (short_code.length == 10 && short_code.match(/\d+/g) != null) {
//       axios({
//         method: 'get',
//         url: '/get_real_url',
//         params: {
//           short_code: short_code,
//         },
//       })
//         .then((res) => {
//           res.data.body.response_code === '0' ? (window.location.href = res.data.body.real_url) : null;
//         })
//         .catch((error) => {
//           // this.setState({response_message:'..', loaderRotating:false})
//           // this.setState({servererror: true})
//         });
//     }
//   }

//   saveUrlKeys(urlKeysString) {
//     if (urlKeysString.indexOf('?') > -1) {
//       urlKeysString = urlKeysString.substring(urlKeysString.lastIndexOf('?'), urlKeysString.length);
//       urlKeysString = urlKeysString.replace('?', '');
//       let proccessKeys = urlKeysString.split('&');
//       proccessKeys.map((proccessKey) => {
//         let key = proccessKey.split('=')[0];
//         let vlaue = proccessKey.split('=')[1];
//         this.pageUrlKeys[key] = vlaue;
//       });
//     }
//   }

//   clearUrlKey(key) {
//     this.pageUrlKeys[key] = '';
//   }

//   getProducts() {
//     let newProductsList = [];
//     this.products.map((product, key) => {
//       if (
//         product.countries.filter((country) => country.toLowerCase() === this.country_code.toLowerCase()).length !== 0
//       ) {
//         newProductsList.push(product);
//       }
//     });
//     return newProductsList;
//   }

//   setCountryCode(country_code) {
//     if (country_code) {
//       this.country_code = country_code;
//     }
//   }

//   setLanguage(language) {
//     language && languages.filter((lang) => lang.slot === language)[0] ? (this.language = language) : null;
//     this.products = LangContentPicker.filterJson(this.products, this.language);
//     this.partners = LangContentPicker.filterJson(this.partners, this.language);
//   }

//   getCurrentCountry() {
//     axios
//       .get('https://partners.payments.tap.company/api/v1.3/iploc.aspx')
//       .then((res) => {
//         let ip = res.data.ip;
//         this.ip = ip;
//         for (let index = 0; index < this.availableCountries.length; index++) {
//           let country_code = this.availableCountries[index].country_code.toLowerCase();
//           if (window.location.href.indexOf('/' + country_code) > -1) {
//             this.country_code = country_code;
//             this.getCurrentCountryLoading = false;
//           }
//         }
//         if (this.country_code === '') {
//           for (let index = 0; index < this.partners.length; index++) {
//             let partner = this.partners[index];
//             if (window.location.href.indexOf('/' + partner.slot) > -1) {
//               this.country_code = partner.countries[0];
//               this.getCurrentCountryLoading = false;
//             }
//           }
//         }
//         if (this.country_code === '') {
//           for (let index = 0; index < pages.length; index++) {
//             let page = pages[index];
//             if (window.location.href.indexOf('/' + page.slot) > -1) {
//               this.country_code = page.countries[0];
//               this.getCurrentCountryLoading = false;
//             }
//           }
//         }
//         if (this.country_code === '') {
//           axios({
//             method: 'get',
//             url: '/iplocation',
//             params: {
//               ip: ip,
//             },
//           })
//             .then((res) => {
//               let countryCode_ = res.data.countryCode;
//               if (
//                 this.availableCountries.filter(
//                   (availableCountry) => availableCountry.country_code.toLowerCase() === countryCode_.toLowerCase(),
//                 )[0]
//               ) {
//                 this.country_code = countryCode_.toLowerCase();
//                 this.getCurrentCountryLoading = false;
//               } else {
//                 this.country_code = 'kw';
//                 this.getCurrentCountryLoading = false;
//               }
//             })
//             .catch((error) => {
//               this.country_code = 'kw';
//               this.getCurrentCountryLoading = false;
//             });
//         }
//       })
//       .catch((err) => {
//         this.country_code = 'kw';
//         this.getCurrentCountryLoading = false;
//       });
//   }

//   // getValueBasedOnCountryCode(arr){
//   //   let result = arr.filter(item=>item.country_code.toLowerCase()===this.country_code.toLowerCase())
//   //   result.length===0?result = arr.filter(item=>item.country_code.toLowerCase()==='kw'):null;
//   //   return result[0];
//   // }

//   products_() {
//     axios({
//       method: 'get',
//       url: '/fetch_json',
//       params: {
//         name: 'products',
//         url: 'src/server/dataSource/products.json',
//         exists: false,
//       },
//     })
//       .then((res) => {
//         let _res = res.data;
//         this.products = _res.body;
//         this.productsLoading = false;
//       })
//       .catch((error) => {});
//   }

//   partners_() {
//     axios({
//       method: 'get',
//       url: '/fetch_json',
//       params: {
//         name: 'products',
//         url: 'src/server/dataSource/partners.json',
//         exists: false,
//       },
//     })
//       .then((res) => {
//         let _res = res.data;
//         this.partners = _res.body;
//         this.partnersLoading = false;
//       })
//       .catch((error) => {});
//   }

//   getProduct(product) {
//     typeof product === 'object' && product !== null ? (product = product.slot) : null;
//     let result = product
//       ? this.products.filter((item) => item.product.toLowerCase() === product.toLowerCase())[0]
//       : null;
//     return result;
//   }

//   filterMenuBasedOnCountry(menu) {
//     menu.map((menuObj, key) => {
//       if (menuObj.type === 'product') {
//         let bool = false;
//         let produsctss = this.getProducts();
//         for (var i = 0; i < produsctss.length; i++) {
//           if (produsctss[i].slot === menuObj.slot) {
//             bool = bool || true;
//           }
//         }
//         if (!bool) {
//           menu.splice(key, 1);
//         }
//       }
//     });
//   }

//   filterMenusBasedOnCountry(menus) {
//     menus.map((menu, menukey) => {
//       menu.items.map((item, key) => {
//         if (item.type === 'product') {
//           let countries = this.getProduct(item.slot).countries;
//           countries.filter((country) => country === this.country_code)[0]
//             ? null
//             : menu.items.length === 1
//             ? menus.splice(menukey, 1)
//             : menu.items.splice(key, 1);
//         }
//       });
//     });
//   }

//   getAvailableCountries() {
//     this.availableCountries = countries;
//     this.getAvailableCountriesLoading = false;
//     this.getCurrentCountry();
//   }

//   getCurrentPartner(partner) {
//     let result = this.partners.filter((item) => item.name.toLowerCase() === partner.toLowerCase());
//     return result[0];
//   }

//   getCallToAction(callToAction, product) {
//     typeof product === 'object' && product !== null ? (product = product.slot) : null;
//     let result = product
//       ? callToAction.filter((item) => item.product.toLowerCase() === product.toLowerCase())[0]
//       : null;
//     return result;
//   }

//   composeContentArray(obj, keys) {
//     let _obj = [];
//     for (let index = 0; index < obj.length; index++) {
//       typeof obj[index] === 'object' ? _obj.push(this.composeContentObject(obj[index], keys)) : _obj.push(obj[index]);
//     }
//     return _obj;
//   }

//   composeContentObject(obj, keys) {
//     let _obj;
//     if (Array.isArray(obj)) {
//       _obj = this.composeContentArray(obj, keys);
//     } else {
//       _obj = {};
//       for (var propName in obj) {
//         if (obj.hasOwnProperty(propName) && keys.hasOwnProperty(obj[propName])) {
//           Object.assign(_obj, { [`${propName}`]: keys[obj[propName]] });
//         } else if (typeof obj[propName] === 'string' || obj[propName] instanceof String) {
//           Object.assign(_obj, { [`${propName}`]: obj[propName] });
//         } else if (Array.isArray(obj[propName])) {
//           let __obj = this.composeContentArray(obj[propName], keys);
//           Object.assign(_obj, { [`${propName}`]: __obj });
//         }
//       }
//     }
//     return _obj;
//   }

//   tryRequire(requireFunction) {
//     try {
//       return requireFunction();
//     } catch (err) {
//       return null;
//     }
//   }

//   getFeatures(productMainJson, productKeysJson) {
//     return this.composeContentObject(productMainJson, productKeysJson);
//   }

//   getCommunitySection(communityMainJson, communityKeysJson) {
//     return this.composeContentObject(communityMainJson, communityKeysJson);
//   }
// }

// decorate(UserPreferencesStore, {
//   language: observable,
//   ip: observable,
//   productObj: observable,
//   partnerObj: observable,
//   country_code: observable,
//   getCurrentCountryLoading: observable,
//   getAvailableCountriesLoading: observable,
//   availableCountries: observable,
//   pageUrlKeys: observable,
//   intercomUser: observable,
//   productsLoading: observable,
//   partnersLoading: observable,
// });

// let preferencesStore = new UserPreferencesStore();
// preferencesStore.products_();
// preferencesStore.partners_();
// preferencesStore.getAvailableCountries();
// export default preferencesStore;
