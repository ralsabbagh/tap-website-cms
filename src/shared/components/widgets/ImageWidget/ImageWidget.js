import React from 'react';
import Card from '../../basic/Anchor/Card/Card';
import Spacing from '../../basic/Spacing/Spacing';
import Text from '../../basic/Text/Text';
import Input from '../../basic/Input/Input';
let obj_value = {};

function ImageWidget(props) {
  function onChange(value, key) {
    obj_value[key] = value;
    console.log(obj_value);
  }

  return (
    <Card style={{ lg: { textAlign: 'initial' } }}>
      <Text text={'Image'} level={{ lg: 'h4' }} />
      <Spacing space={{ lg: 20 }} />
      <Text text={'Url'} level={{ lg: 'h6' }} />
      <Spacing space={{ lg: 10 }} />
      <Input placeHolder={'https://www.domainname.com/image.png'} onChange={(value) => onChange(value, 'src')} />
      {/* <Text text={'Class'} level={{ lg: 'h6' }} />
      <Spacing space={{ lg: 10 }} />
      <Input onChange={(value) => onChange(value, 'className')} /> */}
    </Card>
  );
}

ImageWidget.defaultProps = {};

export default ImageWidget;
