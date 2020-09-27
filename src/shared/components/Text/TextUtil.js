const { default: Text } = require('./Text');

class TextUtil {
  static createText(text_obj) {
    return <Text text={text_obj.text} level={text_obj.level} xslevel={text_obj.xslevel} style={text_obj.style} />;
  }
}

export default TextUtil;
