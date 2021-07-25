import React from "react";
import { Typography, Slider, Row, Col } from "antd";

const { Title, Text } = Typography;
export default function SkillComponent() {
  return (
    <div className="skillComponent">
      <Title>Skills</Title>
      <div className="skills">
        <div className="skill">
          <Row>
            <Col span={4}>
              <Text>HTML</Text>
            </Col>
            <Col span={20}>
              <Slider className="slider" defaultValue={60} disabled={false} tooltipVisible />
            </Col>
          </Row>
        </div>
        <div className="skill">
          <Row>
            <Col span={4}>
              <Text>CSS</Text>
            </Col>
            <Col span={20}>
              <Slider className="slider" defaultValue={50} disabled={false} tooltipVisible />
            </Col>
          </Row>
        </div>
        <div className="skill">
          <Row>
            <Col span={4}>
              <Text>JS</Text>
            </Col>
            <Col span={20}>
              <Slider className="slider" defaultValue={40} disabled={false} tooltipVisible />
            </Col>
          </Row>
        </div>
        <div className="skill">
          <Row>
            <Col span={4}>
              <Text>React</Text>
            </Col>
            <Col span={20}>
              <Slider className="slider" defaultValue={80} disabled={false} tooltipVisible />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
