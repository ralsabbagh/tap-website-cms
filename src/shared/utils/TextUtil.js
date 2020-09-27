import React from 'react';
import { Link } from 'react-router-dom';

class TextUtil {
  static includebreaks(text, action) {
    if (typeof text === 'string' || text instanceof String) {
      return text.split('\n').map((text, key) => (
        <React.Fragment key={key}>
          {action === 'makeBold'
            ? TextUtil.makeBold(text)
            : action === 'includeLinks'
            ? TextUtil.includeLinks(text)
            : text}
          <br />
        </React.Fragment>
      ));
    }
    return text;
  }

  static makeBold(text) {
    return text.split(' ').map((text, key) =>
      text.indexOf('\\') > -1 ? (
        <b key={key} style={{ fontSize: '14px' }}>
          {text.split('\\')[1] + ' '}
        </b>
      ) : (
        text + ' '
      ),
    );
  }

  static includeLinks(text) {
    return text.split(' ').map((text, key) =>
      text.indexOf('\\') > -1 ? (
        <Link style={{ color: '#000', textDecoration: 'underline' }} to={text.split('\\')[1]}>
          {text.split('\\')[0] + ' '}
        </Link>
      ) : (
        text + ' '
      ),
    );
  }
}

export default TextUtil;
