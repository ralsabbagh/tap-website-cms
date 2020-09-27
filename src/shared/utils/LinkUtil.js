class LinkUtil {
  static checkCountry(link, country) {
    if (link === undefined) return link;
    if (link.indexOf('/COUNTRY') <= -1) return link;
    return link.replace('/COUNTRY', '/' + country);
  }
}

export default LinkUtil;
