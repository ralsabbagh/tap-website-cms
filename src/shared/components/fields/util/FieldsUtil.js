import React from 'react';
import Text from '../../basic/Text/Text';
import Spacing from '../../basic/Spacing/Spacing';

class FieldsUtil {
  static fieldTitle(title) {
    return <Text text={title} level={{ lg: 'h6' }} style={{ lg: { color: 'gray' } }} />;
  }

  static titleSpace() {
    return <Spacing space={{ lg: 5 }} />;
  }
}

export default FieldsUtil;
