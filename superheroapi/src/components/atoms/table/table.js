import * as React from "react";
import "./styles.scss";

class Table extends React.Component {
  render() {
    return <table className="table">{this.props.children}</table>;
  }
}

export default Table;
