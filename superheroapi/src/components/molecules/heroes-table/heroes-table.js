import * as React from "react";
import "./styles.scss";
import Table from "../../atoms/table/table";
import Row from "../../atoms/row/row";
import Column from "../../atoms/column/column";
import Button from "../../atoms/button/button";

class HeroesTable extends React.Component {
  render() {
    const headers = this.props.headers;
    const data = this.props.data;

    const headerItems = [];

    headers.map((h, i) => {
      return headerItems.push(
        <Column header key={i}>
          {h.title}
        </Column>
      );
    });

    const dataItems = [];

    data.map((d, i) => {
      const dataItem = (
        <Row key={i}>
          <Column>
            <img width="48px" src={d.image.url} alt={d.name} />
          </Column>
          <Column>{d.id}</Column>
          <Column>{d.name}</Column>
          <Column>{d.powerstats.intelligence}</Column>
          <Column>{d.powerstats.strength}</Column>
          <Column>{d.powerstats.speed}</Column>
          <Column>{d.powerstats.durability}</Column>
          <Column>{d.powerstats.power}</Column>
          <Column>{d.powerstats.combat}</Column>
          <Column>
            <Button actionProp={d.id} action={this.props.showModal}>
              Mais info
            </Button>
          </Column>
        </Row>
      );

      return dataItems.push(dataItem);
    });

    return (
      <Table>
        <thead>
          <Row>{headerItems}</Row>
        </thead>
        <tbody>{dataItems}</tbody>
      </Table>
    );
  }
}

export default HeroesTable;
