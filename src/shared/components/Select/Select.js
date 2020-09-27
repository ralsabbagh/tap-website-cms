import React, { useState } from 'react';
import GeneralUtil from '../../utils/GeneralUtil';

function Select(props) {
  const [currentItem, setCurrentItem] = useState({});

  require('./Select.css');

  function onChange(e) {
    props.onChange(e.target.value);
    setCurrentItem(findItem(e.target.value));
  }

  function findItem(value) {
    if (value === 'default') return {};
    return props.items.find((item) => item[props.valueKey] === value);
  }

  let style = GeneralUtil.responsiveObject(props.style);
  let className = props.className + ' t_select ' + props.shape + ' fa-' + props.iconSize + ' h6';
  let icon = currentItem[props.iconKey]
    ? currentItem[props.iconKey]
    : 'https://websiteimages.b-cdn.net/select_default_icon.svg';
  if (props.iconKey && props.shape === 'icon') style.backgroundImage = 'url(' + icon + ')';
  if (props.shape === 'bordered') style.borderColor = props.primaryColor;

  return (
    <select className={className} style={style} onChange={(e) => onChange(e)}>
      <option value={'default'} selected={'selected'}>
        {props.title}
      </option>
      {props.items.map((item, key) => (
        <option value={item[props.valueKey]} key={key}>
          {props.textKeys.map((textkey) => textkey.prefixText + item[textkey.textkey])}
        </option>
      ))}
    </select>
  );
}

Select.defaultProps = {
  style: {},
  className: '',
  items: [],
  shape: 'flat', /// flat //// bordered //// icon
  iconSize: 'md',
  iconKey: null,
  valueKey: '',
  textKeys: [],
  title: '',
  primaryColor: 'gray',
  onChange: () => {},
};

export default Select;
