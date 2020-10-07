import React, { useState } from 'react';
import ComposeUtil from '../../../utils/ComposeUtil';
import AddWidget from '../../pageBuilder/addWidget/addWidget';
import { observer } from 'mobx-react-lite';
import Spacing from '../../basic/Spacing/Spacing';
import FunctionsUtil from '../../utils/FunctionsUtil';
import Row from '../../basic/Row/Row';
import Container from '../../basic/Container/Container';

function ChildrenFields(props) {
  const [widgets, setWidgets] = useState([]);
  const [arrayValue, setArrayValue] = useState([]);

  function onChange(value, key) {
    FunctionsUtil.updateArray(value, key, arrayValue, props.onChange, setArrayValue);
  }

  function onClick(component) {
    let _component = {
      component: component,
      props: {
        onChange: (value) => onChange(value, widgets.length),
      },
    };
    setWidgets([
      ...widgets,
      <Container>
        {ComposeUtil.composeWidget(_component)}
        {props.type !== 'row' && <Spacing space={{ lg: 15 }} />}
      </Container>,
    ]);
    onChange({ component: component }, widgets.length);
  }

  function children() {
    // let _widgets = widgets;
    // _widgets[_widgets.length] = <AddWidget onClick={onClick} />;
    // return _widgets;
    return [...widgets, <AddWidget onClick={onClick} />];
  }

  let row_props = {
    portitions: {
      lg: new Array(widgets.length + 1).fill(1 / (widgets.length + 1)),
      sm: new Array(widgets.length + 1).fill(1),
    },
    spacing: { lg: 15 },
  };

  if (props.type === 'row') return <Row {...row_props}>{children()}</Row>;
  if (props.type !== 'row') return children();
}

ChildrenFields.defaultProps = {
  onChange: () => {},
};

export default observer(ChildrenFields);
