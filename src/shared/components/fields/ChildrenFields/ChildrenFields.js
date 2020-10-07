import React, { useState } from 'react';
import ComposeUtil from '../../../utils/ComposeUtil';
import AddWidget from '../../pageBuilder/addWidget/addWidget';
import { observer } from 'mobx-react-lite';
import Spacing from '../../basic/Spacing/Spacing';
import FunctionsUtil from '../../utils/FunctionsUtil';

function ChildrenFields(props) {
  const [widgets, setWidgets] = useState([]);
  const [arrayValue, setArrayValue] = useState([]);

  function onChange(value, key) {
    FunctionsUtil.updateArray(value, key, arrayValue, props.onChange, setArrayValue);
  }

  function onClick(component) {
    setWidgets([
      ...widgets,
      <React.Fragment>
        {ComposeUtil.composeWidget({
          component: component,
          props: {
            onChange: (value) => onChange(value, widgets.length),
          },
        })}
        <Spacing space={{ lg: 15 }} />
      </React.Fragment>,
    ]);
    onChange({ component: component }, widgets.length);
  }

  return (
    <React.Fragment>
      {widgets}
      <AddWidget onClick={onClick} />
    </React.Fragment>
  );
}

ChildrenFields.defaultProps = {
  onChange: () => {},
};

export default observer(ChildrenFields);
