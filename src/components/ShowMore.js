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
    this.setState({
      show: true,
    });
    event.preventDefault();
  }
  render() {
    const showMoreStyle = {
      textDecoration: "underline",
      color: "white",
    };
    return (
      <div>
        <div>
          <a href="" onClick={this.showMoreHandler} style={showMoreStyle}>
            Show More
          </a>
        </div>

        <div>{this.state.show && <MoreInfo />}</div>
      </div>
    );
  }
}

export default ShowMore;
