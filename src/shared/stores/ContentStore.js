import { decorate, observable } from 'mobx';
import axios from 'axios';

class ContentStore {
  constructor() {
    this.currentContent = null;
    this.currentContentLoaded = false;
    this.commonContent = null;
    this.commonContentLoaded = false;
    this.allContent = {};
    this.location;
  }

  setLocation(location) {
    this.location = location;
  }

  loadCommonContent() {
    const content = {
      leftMenuItems: 'src/server/dataSource/leftMenuItems.json',
      rightMenuItems: 'src/server/dataSource/rightMenuItems.json',
      footerMenus: 'src/server/dataSource/footerMenus.json',
      footerImages: 'src/server/dataSource/footerImages.json',
      socialMedia: 'src/server/dataSource/socialMedia.json',
      rightsFooterMenu: 'src/server/dataSource/rightsFooterMenu.json',
      loginHeaderData: 'src/server/dataSource/loginHeaderData.json',
      notifications: 'src/server/dataSource/notifications.json',
      allCountries: 'src/server/dataSource/all_countries.json',
      metaTags: 'src/server/dataSource/metaTags.json',
    };
    this.setContent(content, 'common');
  }

  clearCurrentContent() {
    this.setContentwithLoader('currentContent', null, 'currentContentLoaded', false);
  }

  getCommonContent() {
    return this.commonContent;
  }

  getCurrentContent() {
    return this.currentContent;
  }

  setContentwithLoader(contentProp, contentValue, loaderProp, loaderValue) {
    this[contentProp] = contentValue;
    this[loaderProp] = loaderValue;
  }

  setContent(content, current) {
    let contentProp = current === 'current' ? 'currentContent' : 'commonContent';
    let loaderProp = current === 'current' ? 'currentContentLoaded' : 'commonContentLoaded';
    if (Object.keys(content).length === 0) {
      this.setContentwithLoader(contentProp, {}, loaderProp, true);
    }
    let _content = {};
    for (var propName in content) {
      if (content.hasOwnProperty(propName)) {
        axios({
          method: 'get',
          url: '/fetch_json',
          params: {
            name: propName,
            url: content[propName],
            exists: this.allContent.hasOwnProperty(content[propName]),
          },
        })
          .then((res) => {
            let _res = res.data;
            if (_res.body === 'exists_') {
              Object.assign(_content, { [`${_res.name}`]: this.allContent[`${_res.url}`] });
            }
            if (_res.body !== 'exists_') {
              Object.assign(_content, { [`${_res.name}`]: _res.body });
              Object.assign(this.allContent, { [`${_res.url}`]: _res.body });
            }
            if (Object.keys(content).length === Object.keys(_content).length) {
              this.setContentwithLoader(contentProp, _content, loaderProp, true);
            }
          })
          .catch((error) => {});
      }
    }
  }
}

decorate(ContentStore, {
  currentContentLoaded: observable,
  commonContentLoaded: observable,
  location: observable,
});

let contentStore = new ContentStore();
contentStore.loadCommonContent();
export default contentStore;
