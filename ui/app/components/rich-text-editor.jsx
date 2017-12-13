//libraries
import React, {Component, PropTypes} from 'react';
import userHelper from 'focus-core/user';
import Input from 'focus-components/components/input/text';
import RichTextEditor from 'react-rte-image';

export default React.createClass({
    getValue(){
        return this.state.value.toString('html');
    },
    getInitialState() {
        let value = this.props.value ? RichTextEditor.createValueFromString(this.props.value, 'html') : RichTextEditor.createEmptyValue();

        return {value: value};
    },
    resetInput() {
        this.setState({value: RichTextEditor.createEmptyValue()});
    },
    onChangeValue(value) {
        this.setState({value});
        if (this.props.onChange) {
          // Send the changes up to the parent component as an HTML string. 
          // This is here to demonstrate using `.toString()` but in a real app it 
          // would be better to avoid generating a string on each change. 
          this.props.onChange(
            value.toString('html')
          );
        }
      },
    render() {
        if (!this.props.isEdit) {
            return  <div dangerouslySetInnerHTML={{ __html: this.state.value.toString('html') }} />
        }
        return (
            <RichTextEditor
                value={this.state.value}
                onChange={this.onChangeValue}
                />);
    }
});

