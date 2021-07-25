import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;
export default function EducationComponent() {
  return (
    <div className="educationComponent">
      <Title>Education</Title>
      <div className="eduList">
        <Title level={3} underline>
          Bachelor In IT
        </Title>
        <Text>Samriddhi Collage Of Technology</Text>
        <br />
        <Text type="secondary" italic>
          2019-2024
        </Text>
      </div>
      <div className="eduList">
        <Title level={3} underline>
          ISC
        </Title>
        <Text>Central Collage Of Technology - Dharan Hattisar</Text>
        <br />
        <Text type="secondary" italic>
          2065-2067
        </Text>
      </div>
      <div className="eduList">
        <Title level={3} underline>
          SLC
        </Title>
        <Text>Shri Jante Higher Secondary School</Text>
        <br />
        <Text type="secondary" italic>
          2064
        </Text>
      </div>
    </div>
  );
}
