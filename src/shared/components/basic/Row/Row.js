import React from 'react';
import GeneralUtil from '../../../utils/GeneralUtil';

function Row(props) {
  function children(children, portitions, spacing) {
    if (!children.length) children = [children];
    let spaceStyle = { display: 'inline-block', width: spacing + 'px' };
    let rows = 0;
    portitions.map((portition) => {
      portition = portition ? portition : 0;
      rows += portition;
    });
    rows = Math.round(rows);
    let all_spacing = spacing * (children.length - rows);
    return children.map((child, key) => {
      let break_point = children.length / rows;
      let _portition = portitions[key] * 100 + '%';
      let childStyle = {
        width: 'calc(' + _portition + ' - ' + all_spacing / children.length + 'px)',
        display: 'inline-block',
        verticalAlign: props.verticalAlign,
      };
      return (
        <React.Fragment>
          {key % break_point !== 0 ? <div style={spaceStyle} /> : <React.Fragment />}
          <div style={childStyle}>{child}</div>
        </React.Fragment>
      );
    });
  }

  let _portitions = GeneralUtil.responsiveObject(props.portitions);
  let _spacing = GeneralUtil.responsiveObject(props.spacing);
  let _children = props.children.length ? props.children : [props.children];
  let __children = children(_children, _portitions, _spacing);
  let _style = GeneralUtil.responsiveObject(props.style);
  return <div style={_style}>{__children}</div>;
}

Row.defaultProps = {
  style: {},
  portitions: { lg: [] },
  spacing: { lg: 0 },
  verticalAlign: 'top',
};

export default Row;
