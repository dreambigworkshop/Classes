import {
  Button,
  DatePicker,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Skeleton,
  Slider,
} from "antd";
import {
  DownloadOutlined,
  PlayCircleOutlined,
  FacebookOutlined,
  SyncOutlined,
  ScissorOutlined,
} from "@ant-design/icons";

import React, { useState } from "react";
import { Typography } from "antd";

const { Title } = Typography;
const { Option } = Select;

export default function AntdComponent() {
  const [loading, setLoading] = useState(false);
  const size = 50;
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
  return (
    <div>
      <DatePicker />
      <Button
        type="primary"
        loading={loading}
        onClick={() => {
          setLoading(!loading);
        }}
      >
        Primary Button
      </Button>
      <Button type="danger">Primary Button</Button>
      <Button type="primary" icon={<DownloadOutlined />} size={size} />
      <Button type="danger" icon={<DownloadOutlined />} size={size} />
      <br />
      <Title>h1. Ant Design</Title>
      <Title level={2}>h2. Ant Design</Title>
      <Title level={3}>h3. Ant Design</Title>
      <Title level={4}>h4. Ant Design</Title>
      <Title level={5}>h5. Ant Design</Title>

      <br />
      <Title>Icons</Title>
      <PlayCircleOutlined spin />
      <FacebookOutlined spin />
      <SyncOutlined spin />
      <ScissorOutlined />
      <br />

      <Title>Form Fields</Title>
      <input type="text"></input>
      <Input placeholder="Basic usage" style={{ width: 300 }} />
      <InputNumber min={1} max={10} defaultValue={3} />
      <Radio.Group value={value} onChange={onChange}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
      <Rate />
      <br />
      <Select defaultValue="lucy" style={{ width: 120 }}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
    >
      {children}
    </Select>
    <br/>
    <Slider defaultValue={30} disabled={false} />
<br/>
<Skeleton />
    </div>
  );
}
