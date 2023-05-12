import React from "react";
import { connect } from "react-redux";
import { getCharacters } from "../redux/actions";
import Card from "./Card";

class CardClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    return (
      <div>
        <h1>Character de Class</h1>
        {this.props.character?.map((char) => {
          return (
            <Card
              key={char?.id}
              id={char?.id}
              image={char?.image}
              name={char?.name}
              gender={char?.gender}
            />
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    character: state.characters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: () => dispatch(getCharacters()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardClass);
