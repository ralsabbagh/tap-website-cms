import React, { useState } from 'react';
import NumberField from '../../fields/NumberField/NumberField';
import FunctionsUtil from '../../utils/FunctionsUtil';
import BaseWidget from '../BaseWidget/BaseWidget';

function SpacingWidget(props) {
  const [objValue, setObjValue] = useState({});

  function onChange(value, key) {
    FunctionsUtil.updateObj(objValue, { [`${key}`]: value }, setObjValue);
    FunctionsUtil.updateValue(
      { component: 'spacing', props: { ...objValue, ...{ [`${key}`]: value } } },
      props.onChange,
    );
  }

  return (
    <BaseWidget
      widgetTitle={'Spacing'}
      fields={[
        {
          title: 'space',
          field: <NumberField />,
          responsive: true,
          onChange: (value) => onChange(value, 'space'),
        },
      ]}
    />
  );
}

SpacingWidget.defaultProps = {
  onChange: () => {},
};

export default SpacingWidget;
