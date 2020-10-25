import React, { useState } from 'react';
import FunctionsUtil from '../../utils/FunctionsUtil';
import Select from '../../basic/Select/Select';
import BaseWidget from '../BaseWidget/BaseWidget';
import ChildrenFields from '../../fields/ChildrenFields/ChildrenFields';
import classname_options from './classname_options.json';
import Text from '../../basic/Text/Text';

function ContainerWidget(props) {
  const [objValue, setObjValue] = useState({});
  const [childrenValue, setChildrenValue] = useState([]);

  function onChange(value, key) {
    if (key !== 'children') FunctionsUtil.updateObj(objValue, { [`${key}`]: value }, setObjValue);
    if (key === 'children') FunctionsUtil.updateArray(value, key, childrenValue, setChildrenValue);
    setTimeout(() => {
      FunctionsUtil.updateValue({ component: 'container', props: objValue, ...childrenValue }, props.onChange);
    }, 10);
  }

  return (
    <BaseWidget
      widgetTitle={'Container'}
      fields={[
        {
          title: 'class name',
          field: <Select onChange={(value) => onChange(value, 'className')} items={classname_options} />,
        },
        { title: 'children', field: <ChildrenFields onChange={(value) => onChange(value, 'children')} /> },
      ]}
    />
  );
}

ContainerWidget.defaultProps = {
  onChange: () => {},
};

export default ContainerWidget;
