import * as React from "react";
import "./styles.scss";

class Select extends React.Component {
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
    const options = this.props.options;
    return (
      <select className="select" onChange={this.handleChange}>
        {options.map((o, i) => (
          <option value={o.value} key={i}>
            {o.name}
          </option>
        ))}
      </select>
    );
  }
}

export default Select;
