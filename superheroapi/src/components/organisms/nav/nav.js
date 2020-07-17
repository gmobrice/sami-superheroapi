import * as React from "react";
import "./styles.scss";

import SearchBox from "../../molecules/search-box/search-box";
import Filters from "../../molecules/filters/filters";
import Heading from "../../atoms/heading/heading";

const searchHeroProps = {
  label: "Buscar herói por nome ou ID:",
  placeholder: "Nome/ID do herói",
  button: "Buscar!",
  action: "searchHero",
};

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchHero: searchHeroProps,
    };
  }

  render() {
    return (
      <nav className="nav">
        <Heading priority={1}>Superhero API</Heading>
        <SearchBox {...this.state.searchHero} />
        <Heading priority={2}>Filtros</Heading>
        <Filters />
      </nav>
    );
  }
}

export default Nav;
