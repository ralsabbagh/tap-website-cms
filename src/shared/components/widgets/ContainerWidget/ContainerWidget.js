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
      console.log({ component: 'container', props: objValue, children: childrenValue });
    }, 10);
  }

  return (
    <Card style={{ lg: { textAlign: 'initial' } }}>
      <Text text={'Container'} level={{ lg: 'h4' }} />
      <Spacing space={{ lg: 20 }} />
      <Text text={'Class Name'} level={{ lg: 'h6' }} />
      <Spacing space={{ lg: 5 }} />
      <Input onChange={(value) => onChange(value, 'className')} />
      <Spacing space={{ lg: 20 }} />
      <Text text={'Children'} level={{ lg: 'h6' }} />
      <Spacing space={{ lg: 5 }} />
      <ChildrenFields onChange={(value) => onChange(value, 'children')} />
    </Card>
  );
}

ContainerWidget.defaultProps = {};

export default ContainerWidget;
