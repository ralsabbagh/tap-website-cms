import { keys } from 'mobx';
import React, { useState } from 'react';
import Animation from '../../basic/Animation/Animation';
import Container from '../../basic/Container/Container';
import Icon from '../../basic/Icon/Icon';
import Row from '../../basic/Row/Row';
import Spacing from '../../basic/Spacing/Spacing';
import Text from '../../basic/Text/Text';
import FunctionsUtil from '../../utils/FunctionsUtil';
import responsive_options from './responsive_options.json';
const title_style = { lg: { color: 'gray' } };
const field_space = <Spacing space={{ lg: 20 }} />;
const fieldtitle_space = <Spacing space={{ lg: 5 }} />;
const responsive_icon = 'https://www.flaticon.com/svg/static/icons/svg/639/639371.svg';

function BaseField(props) {
  const [appear, setAppear] = useState(false);
  const [objValue, setObjValue] = useState({});

  function onChange(value, key) {
    FunctionsUtil.updateObj(objValue, { [`${key}`]: value }, props.onChange, setObjValue);
  }

  function showall() {
    setAppear(!appear);
  }

  function responsiveField(field, responsive_option, key) {
    return (
      <React.Fragment key={key}>
        <Row verticalAlign={'middle'} portitions={{ lg: [0.03, 0.97], xs: [0.1, 0.9] }}>
          <Icon src={responsive_option.icon} size={'md'} />
          {React.cloneElement(field, { onChange: (value) => onChange(value, responsive_option.key) })}
        </Row>
        {fieldtitle_space}
      </React.Fragment>
    );
  }

  function responsiveFields(field) {
    let responsive_options_ = responsive_options.slice(1, responsive_options.length);
    return (
      <React.Fragment>
        {responsiveField(field, responsive_options[0], 0)}
        <Animation type={'expand'} on={'external'} appear={appear} fade={false}>
          {responsive_options_.map((responsive_option, key) => responsiveField(field, responsive_option, key))}
        </Animation>
      </React.Fragment>
    );
  }

  function responsiveIcon() {
    return (
      <Container style={{ lg: { textAlign: 'right' } }}>
        <Icon
          size={'md'}
          src={responsive_icon}
          onClick={showall}
          style={{ lg: { opacity: appear ? 1 : 0.5, cursor: 'pointer' } }}
        />
      </Container>
    );
  }

  function fieldtitle(text) {
    return (
      <Row verticalAlign={'middle'} portitions={{ lg: [0.5, 0.5] }}>
        <Text text={text} level={{ lg: 'h6' }} style={title_style} />
        {props.responsive && responsiveIcon()}
      </Row>
    );
  }

  return (
    <React.Fragment>
      {field_space}
      {fieldtitle(props.title)}
      {fieldtitle_space}
      {!props.responsive && props.field}
      {props.responsive && responsiveFields(props.field)}
    </React.Fragment>
  );
}

BaseField.defaultProps = {
  onChange: () => {},
};

export default BaseField;
