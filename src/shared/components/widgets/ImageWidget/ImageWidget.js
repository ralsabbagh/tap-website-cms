import React, { useState } from 'react';
import Card from '../../basic/Anchor/Card/Card';
import Spacing from '../../basic/Spacing/Spacing';
import Text from '../../basic/Text/Text';
import Input from '../../basic/Input/Input';
import FunctionsUtil from '../../utils/FunctionsUtil';

function ImageWidget(props) {
  const [objValue, setObjValue] = useState({});

  function onChange(value, key) {
    FunctionsUtil.updateObj(objValue, { [`${key}`]: value }, props.onChange, setObjValue);
  }

  return (
    <Card style={{ lg: { textAlign: 'initial' } }}>
      <Text text={'Image'} level={{ lg: 'h4' }} />
      <Spacing space={{ lg: 20 }} />
      <Text text={'Url'} level={{ lg: 'h6' }} />
      <Spacing space={{ lg: 5 }} />
      <Input placeHolder={'https://www.domainname.com/image.png'} onChange={(value) => onChange(value, 'src')} />
      {/* <Text text={'Class'} level={{ lg: 'h6' }} />
      <Spacing space={{ lg: 10 }} />
      <Input onChange={(value) => onChange(value, 'className')} /> */}
    </Card>
  );
}

ImageWidget.defaultProps = {
  onChange: () => {},
};

export default ImageWidget;
