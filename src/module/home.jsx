import React from "react";
import { Card, Col, Flex, Row, Space, Tag } from "antd";
import Search from "antd/es/input/Search";
import { FilterOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { gql, useQuery } from "urql";
import "./home.css";

const { Title } = Typography;
const waterBillData = [
  {
    id: "1",
    title: "P0001",
    tag: "Pending",
    waterBillTitle: "WT78945601",
    size: "15mm",
    date: "02/03/2024",
    rupees: 3000,
  },
  {
    id: "2",
    title: "P0002",
    tag: "Rejected",
    waterBillTitle: "WT78945602",
    size: "20mm",
    date: "03/03/2024",
    rupees: 4000,
  },
  {
    id: "3",
    title: "P0003",
    tag: "Rejected",
    waterBillTitle: "WT78945602",
    size: "20mm",
    date: "03/03/2024",
    rupees: 4000,
  },
  {
    id: "4",
    title: "P0004",
    tag: "Rejected",
    waterBillTitle: "WT78945602",
    size: "20mm",
    date: "03/03/2024",
    rupees: 4000,
  },
  {
    id: "5",
    title: "P0005",
    tag: "Rejected",
    waterBillTitle: "WT78945602",
    size: "20mm",
    date: "03/03/2024",
    rupees: 4000,
  },
  {
    id: "6",
    title: "P0006",
    tag: "Rejected",
    waterBillTitle: "WT78945602",
    size: "20mm",
    date: "03/03/2024",
    rupees: 4000,
  },
  {
    id: "7",
    title: "P0007",
    tag: "Rejected",
    waterBillTitle: "WT78945602",
    size: "20mm",
    date: "03/03/2024",
    rupees: 4000,
  },
  {
    id: "8",
    title: "P0008",
    tag: "Rejected",
    waterBillTitle: "WT78945602",
    size: "20mm",
    date: "03/03/2024",
    rupees: 4000,
  },
  {
    id: "9",
    title: "P0009",
    tag: "Rejected",
    waterBillTitle: "WT78945602",
    size: "20mm",
    date: "03/03/2024",
    rupees: 4000,
  },
  {
    id: "10",
    title: "P00010",
    tag: "Rejected",
    waterBillTitle: "WT78945602",
    size: "20mm",
    date: "03/03/2024",
    rupees: 4000,
  },
  {
    id: "11",
    title: "P00011",
    tag: "Rejected",
    waterBillTitle: "WT78945602",
    size: "20mm",
    date: "03/03/2024",
    rupees: 4000,
  },
  {
    id: "12",
    title: "P00012",
    tag: "Rejected",
    waterBillTitle: "WT78945602",
    size: "20mm",
    date: "03/03/2024",
    rupees: 4000,
  },
  {
    id: "13",
    title: "P00013",
    tag: "Rejected",
    waterBillTitle: "WT78945602",
    size: "20mm",
    date: "03/03/2024",
    rupees: 4000,
  },
  {
    id: "14",
    title: "P00014",
    tag: "Rejected",
    waterBillTitle: "WT78945602",
    size: "20mm",
    date: "03/03/2024",
    rupees: 4000,
  },
  {
    id: "15",
    title: "P00015",
    tag: "Rejected",
    waterBillTitle: "WT78945602",
    size: "20mm",
    date: "03/03/2024",
    rupees: 4000,
  },
  {
    id: "16",
    title: "P00016",
    tag: "Rejected",
    waterBillTitle: "WT78945602",
    size: "20mm",
    date: "03/03/2024",
    rupees: 4000,
  },
  {
    id: "17",
    title: "P00017",
    tag: "Rejected",
    waterBillTitle: "WT78945602",
    size: "20mm",
    date: "03/03/2024",
    rupees: 4000,
  },
  {
    id: "18",
    title: "P00018",
    tag: "Rejected",
    waterBillTitle: "WT78945602",
    size: "20mm",
    date: "03/03/2024",
    rupees: 4000,
  },
  {
    id: "19",
    title: "P00019",
    tag: "Rejected",
    waterBillTitle: "WT78945602",
    size: "20mm",
    date: "03/03/2024",
    rupees: 4000,
  },
  {
    id: "20",
    title: "P00020",
    tag: "Rejected",
    waterBillTitle: "WT78945602",
    size: "20mm",
    date: "03/03/2024",
    rupees: 4000,
  },
];

const Home = () => {
  const TodosQuery = gql`
    query {
      countries {
        code
        name
        emoji
      }
    }
  `;

  const [result, reexecuteQuery] = useQuery({
    query: TodosQuery,
  });

  const { data, fetching, error } = result;
  const dataVal = data?.countries.map((d) => d);
  console.log(">>dataVal", dataVal);
  // const homeData = dataVal.map((item) => item);
  // console.log(">>homeData", homeData);
  return (
    <div style={{ padding: "20px" }}>
      <Flex justify="space-between" align="center">
        <Title level={5} style={{ margin: 0 }}>
          All WaterBill
        </Title>
        <Flex gap={20}>
          <Search
            placeholder="Search..."
            style={{
              width: 200,
            }}
          />
          <FilterOutlined />
        </Flex>
      </Flex>
      <div style={{ padding: "20px 0px" }}>
        <Row gutter={[20, 20]}>
          {waterBillData.map((item) => (
            <Col xs={24} sm={6}>
              <Card
                size="small"
                title={item.title}
                extra={<Tag color="blue">{item.tag}</Tag>}
              >
                <Flex justify="space-between">
                  <Space direction="vertical">
                    <Title
                      level={5}
                      style={{ margin: 0, fontSize: "10px", fontWeight: 400 }}
                    >
                      {item.waterBillTitle}
                    </Title>
                    <Title
                      level={5}
                      style={{ margin: 0, fontSize: "10px", fontWeight: 400 }}
                    >
                      {item.size}
                    </Title>
                  </Space>
                  <Space direction="vertical">
                    <Title
                      level={5}
                      style={{ margin: 0, fontSize: "10px", fontWeight: 400 }}
                    >
                      {item.date}
                    </Title>
                    <Title
                      level={5}
                      style={{ margin: 0, fontSize: "10px", fontWeight: 400 }}
                    >
                      {item.rupees}
                    </Title>
                  </Space>
                  <div style={{ display: "flex", alignItems: "flex-end" }}>
                    <a href="#">View </a>
                  </div>
                </Flex>
              </Card>
            </Col>
          ))}
        </Row>
        <div>
          <Row gutter={[20, 20]}>
            {dataVal?.map((item) => (
              <Col xs={24} sm={6}>
                <Card
                  size="small"
                  title={item.name}
                  extra={<Tag color="blue">{item.tag}</Tag>}
                >
                  <Flex justify="space-between">
                    <Space direction="vertical">
                      <Title
                        level={5}
                        style={{ margin: 0, fontSize: "10px", fontWeight: 400 }}
                      >
                        {item.code}
                      </Title>
                      <Title
                        level={5}
                        style={{ margin: 0, fontSize: "10px", fontWeight: 400 }}
                      >
                        {item.emoji}
                      </Title>
                    </Space>
                    <div style={{ display: "flex", alignItems: "flex-end" }}>
                      <a href="#">View </a>
                    </div>
                  </Flex>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
