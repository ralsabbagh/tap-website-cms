import React, { useState } from 'react';
import Input from '../../basic/Input/Input';
import FunctionsUtil from '../../utils/FunctionsUtil';
import BaseWidget from '../BaseWidget/BaseWidget';
const src_placeHolder = 'https://www.domainname.com/image.png';

function ImageWidget(props) {
  const [objValue, setObjValue] = useState({});

  function onChange(value, key) {
    FunctionsUtil.updateObj(objValue, { [`${key}`]: value }, setObjValue);
    FunctionsUtil.updateValue({ component: 'image', props: { ...objValue, ...{ [`${key}`]: value } } }, props.onChange);
  }

  return (
    <BaseWidget
      widgetTitle={'Image'}
      fields={[
        {
          title: 'src',
          field: <Input placeHolder={src_placeHolder} onChange={(value) => onChange(value, 'src')} />,
        },
      ]}
    />
  );
}

ImageWidget.defaultProps = {
  onChange: () => {},
};

export default ImageWidget;
