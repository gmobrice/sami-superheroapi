import * as React from "react";
import { connect } from "react-redux";
import store from "../../../app/store";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "../../atoms/button/button";
import Paragraph from "../../atoms/paragraph/paragraph";
import Heading from "../../atoms/heading/heading";
import { setVisibility, setHero } from "./modalSlice";

const mapStateToProps = (state) => {
  return { modal: state.modal };
};

class ConnectedModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    store.dispatch(setVisibility(false));
    store.dispatch(setHero({}));
  }

  render() {
    if (this.props.modal.isVisible) {
      const hero = this.props.modal.hero;
      return (
        <div className="modal">
          <div className="container">
            <div className="close">
              <Button clear action={this.closeModal}>
                {<FontAwesomeIcon icon={faTimes} />}
              </Button>
            </div>

            <div className="content">
              <Heading priority={1}>{hero.name}</Heading>

              <img width="200" src={hero.image.url} alt={hero.name} />

              <div className="modal-text">
                <Heading priority={2}>Status</Heading>
                <Paragraph>
                  <b>Inteligência: </b>
                  {hero.powerstats.intelligence}
                </Paragraph>
                <Paragraph>
                  <b>Força: </b>
                  {hero.powerstats.strength}
                </Paragraph>
                <Paragraph>
                  <b>Velocidade: </b>
                  {hero.powerstats.speed}
                </Paragraph>
                <Paragraph>
                  <b>Durabilidade: </b>
                  {hero.powerstats.durability}
                </Paragraph>
                <Paragraph>
                  <b>Poder: </b>
                  {hero.powerstats.power}
                </Paragraph>
                <Paragraph>
                  <b>Combate: </b>
                  {hero.powerstats.combat}
                </Paragraph>
              </div>

              <div className="modal-text">
                <Heading priority={2}>Biografia</Heading>
                <Paragraph>
                  <b>Nome completo: </b>
                  {hero.biography["full-name"]}
                </Paragraph>
                <Paragraph>
                  <b>Alter-Egos: </b>
                  {hero.biography["alter-egos"]}
                </Paragraph>
                <Paragraph>
                  <b>Alias: </b>
                  {hero.biography.aliases.map((a, i) => (
                    <span key={i}>{a}, </span>
                  ))}
                </Paragraph>
                <Paragraph>
                  <b>Local de Nascimento: </b>
                  {hero.biography["place-of-birth"]}
                </Paragraph>
                <Paragraph>
                  <b>Primeira aparição: </b>
                  {hero.biography["first-appearance"]}
                </Paragraph>
                <Paragraph>
                  <b>Editora: </b>
                  {hero.biography.publisher}
                </Paragraph>
                <Paragraph>
                  <b>Alinhamento: </b>
                  {hero.biography.alignment}
                </Paragraph>
              </div>

              <div className="modal-text">
                <Heading priority={2}>Aparência</Heading>
                <Paragraph>
                  <b>Gênero: </b>
                  {hero.appearance.gender}
                </Paragraph>
                <Paragraph>
                  <b>Raça: </b>
                  {hero.appearance.race}
                </Paragraph>
                <Paragraph>
                  <b>Altura: </b>
                  {hero.appearance.height.map((a, i) => (
                    <span key={i}>{a}, </span>
                  ))}
                </Paragraph>
                <Paragraph>
                  <b>Peso: </b>
                  {hero.appearance.weight.map((a, i) => (
                    <span key={i}>{a}, </span>
                  ))}
                </Paragraph>
                <Paragraph>
                  <b>Cor dos olhos: </b>
                  {hero.appearance["eye-color"]}
                </Paragraph>
                <Paragraph>
                  <b>Cor do cabelo: </b>
                  {hero.appearance["hair-color"]}
                </Paragraph>
              </div>

              <div className="modal-text">
                <Heading priority={2}>Trabalho</Heading>
                <Paragraph>
                  <b>Ocupação: </b>
                  {hero.work.occupation}
                </Paragraph>
                <Paragraph>
                  <b>Base: </b>
                  {hero.work.base}
                </Paragraph>
              </div>

              <div className="modal-text">
                <Heading priority={2}>Conexões</Heading>
                <Paragraph>
                  <b>Afiliações de Grupo: </b>
                  {hero.connections["group-affiliation"]}
                </Paragraph>
                <Paragraph>
                  <b>Parentes: </b>
                  {hero.connections.relatives}
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
const Modal = connect(mapStateToProps)(ConnectedModal);
export default Modal;
