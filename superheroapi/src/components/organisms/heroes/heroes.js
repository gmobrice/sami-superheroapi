import * as React from "react";
import { connect } from "react-redux";
import store from "../../../app/store";
import { setVisibility, setHero } from "../../organisms/modal/modalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
import Paragraph from "../../atoms/paragraph/paragraph";
import Heading from "../../atoms/heading/heading";
import HeroesTable from "../../molecules/heroes-table/heroes-table";

const mapStateToProps = (state) => {
  return { data: state.heroes };
};

const tableHeaders = [
  { title: "Imagem" },
  { title: "Id" },
  { title: "Name" },
  { title: "Inteligência" },
  { title: "Força" },
  { title: "Velocidade" },
  { title: "Durabilidade" },
  { title: "Poder" },
  { title: "Combate" },
  { title: "Info" },
];

class ConnectedHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.showHeroDetails = this.showHeroDetails.bind(this);
  }

  showHeroDetails(id) {
    const hero = this.props.data.heroes.filter((h) => h.id === id)[0];
    store.dispatch(setVisibility(true));
    store.dispatch(setHero(hero));
  }

  render() {
    const data = this.props.data;

    if (data.loading) {
      return (
        <div className="heroes loading">
          <FontAwesomeIcon icon={faCircleNotch} size="3x" spin />
        </div>
      );
    } else if (data.error === "" && data.heroes.length > 0) {
      const orderBy = data.order;
      let heroes;

      if (orderBy !== "id") {
        heroes = [...data.heroes].sort((a, b) => {
          a =
            a["powerstats"][orderBy] === "null" ? 0 : a["powerstats"][orderBy];
          b =
            b["powerstats"][orderBy] === "null" ? 0 : b["powerstats"][orderBy];
          return b - a;
        });
      } else {
        heroes = data.heroes;
      }

      return (
        <div className="heroes">
          <Heading priority={2}>Listagem de heróis</Heading>
          <HeroesTable
            data={heroes}
            headers={tableHeaders}
            showModal={this.showHeroDetails}
          />
        </div>
      );
    } else if (data.error === "" && data.heroes.length === 0) {
      return (
        <div className="heroes">
          <Heading priority={2}>Listagem de heróis</Heading>
          <Paragraph>
            Utilize o menu à esquerda para buscar um herói por nome ou pelo seu
            ID.
          </Paragraph>
          <Paragraph>
            A lista de IDs pode ser encontrada em{" "}
            <a
              href="https://superheroapi.com/ids.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://superheroapi.com/ids.html
            </a>
          </Paragraph>
        </div>
      );
    } else {
      return (
        <div className="heroes">
          <Heading priority={2}>Erro!</Heading>
          <Paragraph>{data.error}</Paragraph>
        </div>
      );
    }
  }
}
const Heroes = connect(mapStateToProps)(ConnectedHeroes);
export default Heroes;
