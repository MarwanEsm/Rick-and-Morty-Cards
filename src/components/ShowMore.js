import React, { Component } from "react";
import MoreInfo from "./MoreInfo";

class ShowMore extends Component {
  constructor(props) {
    super(props);
    this.showMoreHandler = this.showMoreHandler.bind(this);
    this.state = {
      show: false,
    };
  }

  showMoreHandler(event) {
    event.preventDefault();
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.show && <MoreInfo character={this.props.character} />}
        </div>
        <div>
          <a href="" onClick={this.showMoreHandler} style={showMoreStyle}>
            {this.state.show ? "Show Less" : "Show More"}
          </a>
        </div>
      </div>
    );
  }
}

const showMoreStyle = {
  textDecoration: "underline",
  color: "white",
  fontSize: 14,
};
export default ShowMore;
