import React, { useState } from 'react';
import Row from '../../basic/Row/Row';
import ComposeUtil from '../../../utils/ComposeUtil';

function ArrayFields(props) {
  let portitions = new Array(props.length).fill(1 / props.length);
  const [arrayValue, setArrayValue] = useState([]);

  function onChange(value, key) {
    let _arrayValue = arrayValue;
    _arrayValue[key] = value;
    setArrayValue(_arrayValue);
    if (props.onChange) props.onChange(_arrayValue);
  }

  return (
    <Row portitions={{ lg: portitions }} spacing={{ lg: 10 }}>
      {portitions.map((_, key) =>
        ComposeUtil.composeField({
          component: props.field.component,
          props: ComposeUtil.mergeProps(props.field.props, { onChange: (e) => onChange(e, key) }),
        }),
      )}
    </Row>
  );
}

ArrayFields.defaultProps = {
  length: 0,
  field: { component: 'number', props: {} },
};

export default ArrayFields;
