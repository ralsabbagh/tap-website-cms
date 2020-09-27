import languages from '../dataSource/languages.json';
import { useAppContext } from '../Context/AppContext';

class GeneralUtil {
  static ArrayIs(array, model) {
    if (array && array[0] && array[0] instanceof model) return true;
    return false;
  }

  static extractFileName(src) {
    return src ? src.substring(src.lastIndexOf('/') + 1, src.lastIndexOf('.')) : '';
  }

  static generateId(string) {
    return string + '_' + Math.floor(Math.random() * 1000000000);
  }

  static mediaMatch(pixels) {
    return window.matchMedia('(max-width: ' + pixels + 'px)').matches;
  }

  static responsiveObject(obj) {
    if (GeneralUtil.mediaMatch(767) && obj.xs !== null && obj.xs !== undefined) return obj.xs;
    if (GeneralUtil.mediaMatch(992) && obj.sm !== null && obj.sm !== undefined) return obj.sm;
    if (GeneralUtil.mediaMatch(1199) && obj.md !== null && obj.md !== undefined) return obj.md;
    if (GeneralUtil.mediaMatch(8000) && obj.lg !== null && obj.lg !== undefined) return obj.lg;
    return {};
  }

  static onClick_(onClick) {
    let { controllers } = useAppContext();
    if (onClick.controller && onClick.function && onClick.args && controllers) {
      return () => {
        controllers[onClick.controller][onClick.function](onClick.args);
      };
    }
    return onClick;
  }

  static loadExternalCss(href) {
    let id = GeneralUtil.extractFileName(href);
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.href = href;
      link.id = id;
      link.rel = 'preload';
      link.as = 'style';
      document.body.appendChild(link);
      document.getElementById(id).rel = 'stylesheet';
    }
  }

  static getMetaTag(metaTags, link, notFound) {
    let lang = '';
    let metatag = {};
    languages.map((language) => {
      link.indexOf('/' + language.slot) > -1 ? (lang = language.slot) : null;
    });
    metaTags.map((metaTag) => {
      link.indexOf(metaTag.link) > -1 ? (metatag = metaTag) : null;
    });
    !(lang === 'ar' || lang === 'en') ? (lang = 'en') : null;
    if (notFound) metatag = metaTags.find((metaTag) => metaTag.link === '/notfound');
    return { metatag: metatag, language: lang };
  }

  static appDir() {
    let appDiv = document.getElementsByClassName('App');
    return appDiv[0] && appDiv[0].dir ? appDiv[0].dir : 'ltr';
  }
}

export default GeneralUtil;
