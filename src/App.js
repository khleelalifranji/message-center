import React from "react";
import './App.scss'
import { Col, Row } from "antd";
import Contacts from "./Components/ContactsContainer/Contacts";
import Chat from "./Components/ChatContainer/Chat";

const App = () => (
  <div className="ParentContainer">
    <h1 orientation="left">Messages</h1>
    <div className="Row">
      <Row>
          <Col className="col1" span={7}>
            <div> <Contacts /> </div>
          </Col>
          <Col className="col2" span={16}>
            <div> <Chat /> </div>
          </Col>
      </Row>
    </div>
  </div>
);

export default App;
