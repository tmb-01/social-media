import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Profile from "../components/profile";
import "./main.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <div className="container">
          <div className="col-3">
            <Profile/>
            <div className="suggestion">suggestion</div>
          </div>
          <div className="col-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos odio
            doloremque, consectetur aperiam dignissimos aspernatur molestias
            harum minus. Repellat, deserunt quaerat blanditiis consectetur quos
            eos voluptates omnis nisi odio in!
          </div>
          <div className="col-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            sapiente sint facilis inventore assumenda dolorum suscipit eius
            molestiae minima tempora. Eius, expedita. Minus dolorem possimus
            ipsam cum fugiat assumenda blanditiis!
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
