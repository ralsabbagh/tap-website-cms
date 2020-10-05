import React from 'react';
import Row from '../Row/Row';
import GeneralUtil from '../../../utils/GeneralUtil';
import ComposeUtil from '../../../utils/ComposeUtil';

function Input(props) {
  require('./Input.css');

  let level = GeneralUtil.responsiveObject(props.level);
  let style = GeneralUtil.responsiveObject(props.style);
  let prefix = ComposeUtil.composeComponent(props.prefix);
  style.backgroundColor = props.primaryColor;
  if (props.shape === 'bordered') style.borderColor = props.secondaryColor;

  let _input = (
    <input
      {...props}
      className={'t_input ' + level}
      style={{ width: 'calc(' + style.width + ' - 80px)' }}
      onChange={props.onChange}
    />
  );

  return (
    <div className={props.className + ' t_input_container ' + props.shape} style={style}>
      {!props.prefix && _input}
      {props.prefix && (
        <Row verticalAlign={'middle'} spacing={{ lg: props.prefix ? 15 : 0 }} style={{ lg: { textAlign: 'initial' } }}>
          <div className={'t_input_prefix'}>{prefix}</div>
          {_input}
        </Row>
      )}
    </div>
  );
}

Input.defaultProps = {
  style: {},
  className: '',
  level: { lg: 'h6' },
  prefix: null,
  shape: 'flat', /// bordered /// flat
  primaryColor: 'white',
  secondaryColor: 'gray',
};

export default Input;
