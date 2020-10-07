import React, { useState } from 'react';
import Spacing from '../../basic/Spacing/Spacing';
import Row from '../../basic/Row/Row';
import Icon from '../../basic/Icon/Icon';
import Animation from '../../basic/Animation/Animation';
import Text from '../../basic/Text/Text';
import Container from '../../basic/Container/Container';
import ComposeUtil from '../../../utils/ComposeUtil';
import FunctionsUtil from '../../utils/FunctionsUtil';
let all_icon = 'https://www.flaticon.com/svg/static/icons/svg/639/639371.svg';

function ResponsiveField(props) {
  const [appear, setAppear] = useState(false);
  const [objValue, setObjValue] = useState({});

  let spacing = <Spacing space={{ lg: 10 }} />;
  let title_style = { lg: { color: 'gray' } };

  function unitIcon(unit) {
    switch (unit) {
      case 'lg':
        return 'https://www.flaticon.com/svg/static/icons/svg/2933/2933245.svg';
      case 'md':
        return 'https://websiteimages.b-cdn.net/ipad.svg';
      case 'sm':
        return 'https://www.flaticon.com/svg/static/icons/svg/1221/1221776.svg';
      case 'xs':
        return 'https://www.flaticon.com/svg/static/icons/svg/141/141058.svg';
      default:
        return '';
    }
  }

  function unitField(unit) {
    return (
      <Row verticalAlign={'middle'} portitions={{ lg: [0.03, 0.97], xs: [0.1, 0.9] }}>
        <Icon src={unitIcon(unit)} size={'md'} />
        {ComposeUtil.composeField({
          component: props.field.component,
          props: ComposeUtil.mergeProps(props.field.props, { onChange: (value) => onChange(value, unit) }),
        })}
      </Row>
    );
  }

  function onChange(value, key) {
    FunctionsUtil.updateObj(objValue, { [`${key}`]: value }, props.onChange, setObjValue);
  }

  function showall() {
    setAppear(!appear);
  }

  return (
    <React.Fragment>
      <Row verticalAlign={'middle'} portitions={{ lg: [0.5, 0.5] }}>
        <Text text={props.fieldName} level={{ lg: 'h6' }} style={title_style} />
        <Container style={{ lg: { textAlign: 'right' } }}>
          <Icon
            size={'md'}
            src={all_icon}
            onClick={showall}
            style={{ lg: { opacity: appear ? 1 : 0.5, cursor: 'pointer' } }}
          />
        </Container>
      </Row>
      {spacing}
      {unitField('lg')}
      <Animation type={'expand'} on={'external'} appear={appear} fade={false}>
        {spacing}
        {unitField('md')}
        {spacing}
        {unitField('sm')}
        {spacing}
        {unitField('xs')}
      </Animation>
    </React.Fragment>
  );
}

ResponsiveField.defaultProps = {
  fieldName: 'Properity Name',
  onChange: () => {},
};

export default ResponsiveField;
