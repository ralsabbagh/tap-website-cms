import React, { useState } from 'react';
import ComposeUtil from '../../../utils/ComposeUtil';
import AddWidget from '../../pageBuilder/addWidget/addWidget';
import { observer } from 'mobx-react-lite';
import Spacing from '../../basic/Spacing/Spacing';
import FunctionsUtil from '../../utils/FunctionsUtil';
import Row from '../../basic/Row/Row';
import Container from '../../basic/Container/Container';
import GeneralUtil from '../../../utils/GeneralUtil';

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
        {(props.type !== 'row' || GeneralUtil.mediaMatch(992)) && <Spacing space={{ lg: 15 }} />}
      </Container>,
    ]);
    onChange({ component: component }, widgets.length);
  }

  let outer_row_props = {
    portitions: {
      lg: [0.9, 0.1],
      sm: [1, 1],
    },
    spacing: { lg: 15 },
  };

  let row_props = {
    portitions: {
      lg: new Array(widgets.length).fill(1 / widgets.length),
      sm: new Array(widgets.length).fill(1),
    },
    spacing: { lg: 15 },
  };

  if (props.type !== 'row') return [...widgets, <AddWidget onClick={onClick} />];
  if (props.type === 'row')
    return (
      <React.Fragment>
        {widgets.length === 0 ? (
          <AddWidget onClick={onClick} />
        ) : (
          <Row {...outer_row_props}>
            <Row {...row_props}>{widgets}</Row>
            <AddWidget onClick={onClick} />
          </Row>
        )}
      </React.Fragment>
    );
}

ChildrenFields.defaultProps = {
  onChange: () => {},
};

export default observer(ChildrenFields);
