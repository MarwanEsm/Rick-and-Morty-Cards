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

        <div>
          {/* in ShowMore you receive it as a prop and pass it to MoreInfo accessing it through this.props.character */}
          {this.state.show && <MoreInfo character={this.props.character} />}
        </div>
      </div>
    );
  }
}

export default ShowMore;
