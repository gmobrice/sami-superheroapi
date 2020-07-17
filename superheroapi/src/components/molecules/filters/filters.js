import * as React from "react";
import "./styles.scss";
import store from "../../../app/store";
import { setOrder } from "../../organisms/heroes/heroesSlice";
import Label from "../../atoms/label/label";
import Select from "../../atoms/select/select";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { order: state.heroes.order };
};

const options = [
  { name: "Id", value: "id" },
  { name: "Inteligência", value: "intelligence" },
  { name: "Força", value: "strength" },
  { name: "Velocidade", value: "speed" },
  { name: "Durabilidade", value: "durability" },
  { name: "Poder", value: "power" },
  { name: "Combate", value: "combat" },
];

class ConnectedFilters extends React.Component {
  constructor(props) {
    super(props);
    this.getSelectValue = this.getSelectValue.bind(this);
  }

  getSelectValue(value) {
    store.dispatch(setOrder(value));
  }

  render() {
    return (
      <form className="filters">
        <Label>Ordenar por:</Label>
        <Select getValue={this.getSelectValue} options={options} />
      </form>
    );
  }
}

const Filters = connect(mapStateToProps)(ConnectedFilters);
export default Filters;
