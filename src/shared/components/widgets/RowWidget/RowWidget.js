import React, { useState } from 'react';
import FunctionsUtil from '../../utils/FunctionsUtil';
import Select from '../../basic/Select/Select';
import BaseWidget from '../BaseWidget/BaseWidget';
import portitions_options from './portitions_options.json';
import NumberField from '../../fields/NumberField/NumberField';
import ChildrenFields from '../../fields/ChildrenFields/ChildrenFields';

function RowWidget(props) {
  const [objValue, setObjValue] = useState({});
  const [childrenValue, setChildrenValue] = useState([]);

  function onChange(value, key) {
    if (key !== 'children') FunctionsUtil.updateObj(objValue, { [`${key}`]: value }, setObjValue);
    if (key === 'children') FunctionsUtil.updateArray(value, key, childrenValue, setChildrenValue);
    setTimeout(() => {
      FunctionsUtil.updateValue({ component: 'row', props: objValue, ...childrenValue }, props.onChange);
    }, 10);
  }

  function onPortitionsChange(value, key) {
    let _value = {};
    for (var propName in value) {
      Object.assign(_value, { [`${propName}`]: JSON.parse(value[propName]) });
    }
    onChange(_value, key);
  }

  let portitions = [];
  childrenValue.map(() => portitions.push(1 / childrenValue.length));

  return (
    <BaseWidget
      widgetTitle={'Row'}
      fields={[
        {
          title: 'portitions',
          field: <Select items={portitions_options} />,
          responsive: true,
          onChange: (value) => onPortitionsChange(value, 'portitions'),
        },
        { title: 'spacing', field: <NumberField />, responsive: true, onChange: (value) => onChange(value, 'spacing') },
        { title: 'children', field: <ChildrenFields onChange={(value) => onChange(value, 'children')} type={'row'} /> },
      ]}
    />
  );
}

RowWidget.defaultProps = {
  onChange: () => {},
};

export default RowWidget;
