import React from "react";
import { Row, Col, Typography } from "antd";
import {
    PhoneOutlined,MailOutlined
  } from '@ant-design/icons';

const {Title, Text} = Typography

export default function ProfileComponent() {
  return (
    <div className="profileComponent">
      <Row>
        <Col sm={24} md={12}>
          <div className="profileInfo">
              <Title>Manish Kumar Mandela</Title>
              <Text type="secondary">I love challenges. Challenges helps improving myself.</Text>
              <Text type="secondary"> 9812345678, manish@gmail.com</Text>
          </div>
        </Col>
        <Col sm={24} md={12}>
          <div className="profileImage">
              <img src={`https://playerimages.platform.bcci.tv/generic/500x640/123.png`}/>
          </div>
        </Col>
      </Row>
    </div>
  );
}
