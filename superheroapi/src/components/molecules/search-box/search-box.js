import * as React from "react";
import "./styles.scss";
import store from "../../../app/store";
import Label from "../../atoms/label/label";
import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";
import { setSearch, getHeroes } from "../../organisms/heroes/heroesSlice";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { search: state.heroes.search };
};

class ConnectedSearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
  }

  getInputValue(value) {
    store.dispatch(setSearch(value));
  }

  handleSubmit(e) {
    e.preventDefault();
    const searchQuery = this.props.search;
    store.dispatch(getHeroes(searchQuery));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-box">
        <Label>{this.props.label}</Label>
        <Input
          getValue={this.getInputValue}
          placeholder={this.props.placeholder}
        />
        <Button action={() => null}>{this.props.button}</Button>
      </form>
    );
  }
}

const SearchBox = connect(mapStateToProps)(ConnectedSearchBox);

export default SearchBox;
