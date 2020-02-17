import React, { Component } from "react";
import axios from "../../axios";

export default class User extends Component {
  constructor(props) {
    super(props);
    // console.log(">>>> hello");
    this.state = {
      Users: []
    };
  }
  getUsersData() {
    axios
      .get(`https://app.markitworld.com/api/v2/user/products`, {})
      .then(res => {
        const data = res.data;
        console.log(data);
        const products = data["data"].products;
        const users = products.map(u => (
          <div>
            <h1>{u.title}</h1>
            <p>{u.description}</p>
            {u.images.map(im => (
              <a href={im.large}>
                <img src={im.thumbnail} />
              </a>
            ))}
          </div>
        ));

        this.setState({
          users
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.getUsersData();
  }
  render() {
    return <div>{this.state.users}</div>;
  }
}
