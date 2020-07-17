import * as React from "react";
import "./styles.scss";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(e) {
    const val = e.target.value;
    await this.setState(() => {
      return { value: val };
    });

    this.props.getValue(this.state.value);
  }

  render() {
    return (
      <input
        className="input"
        type="text"
        value={this.state.value}
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;
