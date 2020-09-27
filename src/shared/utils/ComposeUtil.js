import React from 'react';
import Container from '../components/basic/Container/Container';
import Row from '../components/basic/Row/Row';
import Text from '../components/basic/Text/Text';
import Paragraph from '../components/basic/Paragraph/Paragraph';
import Image from '../components/basic/Image/Image';
import Spacing from '../components/basic/Spacing/Spacing';
import Separator from '../components/basic/Separator/Separator';
import Icon from '../components/basic/Icon/Icon';
import Input from '../components/basic/Input/Input';
import Button from '../components/basic/Button/Button';
import Select from '../components/basic/Select/Select';
import countries from '../data_source/countries.json';
import Anchor from '../components/basic/Anchor/Anchor';
import Iframe from '../components/basic/Iframe/Iframe';
import Animation from '../components/basic/Animation/Animation';
class ComposeUtil {
  static composeComponent(component_obj) {
    if (!component_obj) return <React.Fragment />;
    if (typeof component_obj === 'string' || component_obj instanceof String)
      component_obj = ComposeUtil.importJson(component_obj);
    let children = ComposeUtil.composeChildren(component_obj.children);
    switch (component_obj.component) {
      case 'container':
        return <Container {...component_obj.props}>{children}</Container>;
      case 'row':
        return <Row {...component_obj.props}>{children}</Row>;
      case 'anchor':
        return <Anchor {...component_obj.props}>{children}</Anchor>;
      case 'animation':
        return <Animation {...component_obj.props}>{children}</Animation>;
      case 'text':
        return <Text {...component_obj.props} />;
      case 'paragraph':
        return <Paragraph {...component_obj.props} />;
      case 'image':
        return <Image {...component_obj.props} />;
      case 'spacing':
        return <Spacing {...component_obj.props} />;
      case 'separator':
        return <Separator {...component_obj.props} />;
      case 'icon':
        return <Icon {...component_obj.props} />;
      case 'input':
        return <Input {...component_obj.props} />;
      case 'iframe':
        return <Iframe {...component_obj.props} />;
      case 'select':
        return <Select items={countries} {...component_obj.props} />;
      case 'button':
        return <Button {...component_obj.props} />;

      default:
        return <React.Fragment />;
    }
  }

  static importJson(json_name) {
    return require('../data_source/sites/kw/collect/' + json_name);
  }

  static composeChildren(children) {
    if (!children) return <React.Fragment />;
    return children.map((component) => ComposeUtil.composeComponent(component));
  }
}

export default ComposeUtil;
