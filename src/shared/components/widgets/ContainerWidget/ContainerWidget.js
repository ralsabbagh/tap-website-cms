import React, { useState } from 'react';
import Card from '../../basic/Anchor/Card/Card';
import Spacing from '../../basic/Spacing/Spacing';
import Text from '../../basic/Text/Text';
import ChildrenFields from '../../fields/ChildrenFields/ChildrenFields';
import Input from '../../basic/Input/Input';
import FunctionsUtil from '../../utils/FunctionsUtil';

function ContainerWidget(props) {
  const [objValue, setObjValue] = useState({});
  const [childrenValue, setChildrenValue] = useState([]);

  function onChange(value, key) {
    if (key !== 'children') {
      FunctionsUtil.updateObj(objValue, { [$`key`]: value }, setObjValue);
    }
    if (key === 'children') {
      FunctionsUtil.updateArray(value, key, childrenValue, setChildrenValue);
    }
    setTimeout(() => {
      FunctionsUtil.updateValue({ component: 'container', props: objValue, ...childrenValue }, props.onChange);
      console.log({ component: 'container', props: objValue, ...childrenValue });
    }, 10);
  }

  let title_style = { lg: { color: 'gray' } };

  return (
    <Card style={{ lg: { textAlign: 'initial' } }}>
      <Text text={'Container'} level={{ lg: 'h5' }} />
      <Spacing space={{ lg: 20 }} />
      <Text text={'class name'} level={{ lg: 'h6' }} style={title_style} />
      <Spacing space={{ lg: 5 }} />
      <Input onChange={(value) => onChange(value, 'className')} />
      <Spacing space={{ lg: 20 }} />
      <Text text={'children'} level={{ lg: 'h6' }} style={title_style} />
      <Spacing space={{ lg: 5 }} />
      <ChildrenFields onChange={(value) => onChange(value, 'children')} />
    </Card>
  );
}

ContainerWidget.defaultProps = {};

export default ContainerWidget;
