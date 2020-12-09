import React from 'react';
import Button from '../../basic/Button/Button';
import Container from '../../basic/Container/Container';
import Icon from '../../basic/Icon/Icon';
import Input from '../../basic/Input/Input';
import Row from '../../basic/Row/Row';
import Spacing from '../../basic/Spacing/Spacing';
import Text from '../../basic/Text/Text';
import ContainerWidget from '../../widgets/ContainerWidget/ContainerWidget';
import { useAppContext } from '../../../Context/AppContext';

function PageEditor() {
  const { pageEditorStore } = useAppContext();
  require('./PageEditor.css');

  return (
    <Container className={'page_container'}>
      <Container style={{ lg: { textAlign: 'initial ' } }}>
        <Row spacing={{ lg: 10 }}>
          <Icon src={'https://www.flaticon.com/svg/static/icons/svg/189/189688.svg'} size={'md'} />
          <Text text={'Page Name'} level={{ lg: 'h5' }} />
        </Row>
        <Spacing space={{ lg: 10 }} />
        <Input placeHolder={'new-page-name'} />
        <Spacing space={{ lg: 45 }} />
        <Row spacing={{ lg: 10 }}>
          <Icon src={'https://www.flaticon.com/svg/static/icons/svg/2572/2572630.svg'} size={'md'} />
          <Text text={'Meta Data'} level={{ lg: 'h5' }} />
        </Row>
        <Spacing space={{ lg: 10 }} />
        <Input placeHolder={'Page Title'} />
        <Spacing space={{ lg: 5 }} />
        <Input placeHolder={'Page Description'} />
        <Spacing space={{ lg: 5 }} />
        <Input placeHolder={'Page Icon'} />
      </Container>
      <Spacing space={{ lg: 45 }} />
      <Row portitions={{ lg: [0.5, 0.5] }} verticalAlign={'bottom'}>
        <Row spacing={{ lg: 10 }} style={{ lg: { textAlign: 'initial ' } }}>
          <Icon src={'https://www.flaticon.com/svg/static/icons/svg/432/432429.svg'} size={'md'} />
          <Text text={'Page Builder'} level={{ lg: 'h5' }} />
        </Row>
        <Row spacing={{ lg: 10 }} style={{ lg: { textAlign: 'right ' } }}>
          <Button
            text={{ text: 'Save' }}
            icon={{ src: 'https://www.flaticon.com/svg/static/icons/svg/907/907027.svg' }}
            shape={'solid'}
          />
          <Button
            text={{ text: 'Prerview' }}
            icon={{ src: 'https://www.flaticon.com/svg/static/icons/svg/560/560523.svg' }}
            shape={'solid'}
          />
        </Row>
      </Row>
      <Spacing space={{ lg: 10 }} />
      <ContainerWidget onChange={store} />
      <Spacing space={{ lg: 100 }} />
    </Container>
  );
}

PageEditor.defaultProps = {};

export default PageEditor;
