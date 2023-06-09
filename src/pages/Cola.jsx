import { Card, Col, Divider, List, Row, Tag, Typography } from 'antd'
import { useHiddeMenu } from '../hooks/useHiddeMenu'

const data = [
  {
    ticketNo: 33,
    escritorio: 3,
    agente: 'Fernando Herrera'
  },
  {
    ticketNo: 34,
    escritorio: 4,
    agente: 'Melissa Flores'
  },
  {
    ticketNo: 35,
    escritorio: 5,
    agente: 'Carlos Castro'
  },
  {
    ticketNo: 36,
    escritorio: 3,
    agente: 'Fernando Herrera'
  },
  {
    ticketNo: 37,
    escritorio: 3,
    agente: 'Fernando Herrera'
  },
  {
    ticketNo: 38,
    escritorio: 2,
    agente: 'Melissa Flores'
  },
  {
    ticketNo: 39,
    escritorio: 5,
    agente: 'Carlos Castro'
  }
]

export const Cola = () => {
  const { Title, Text } = Typography
  useHiddeMenu(true)
  return (
    <>
      <Title level={1}>
        Atendiendo al Cliente
      </Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={data.slice(0, 3)}
            renderItem={item => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color='volcano' key={item.ticketNo}>{item.agente}</Tag>,
                    <Tag color='magenta' key={item.ticketNo}>Escritorio: {item.escritorio}</Tag>
                  ]}
                >
                  <Title>No. {item.ticketNo}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={data.slice(3)}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={`No. ${item.ticketNo}`}
                  description={
                    <>
                      <Text type='secondary'> Escritorio: </Text>
                      <Tag color='magenta'>{item.escritorio}</Tag>
                      <Text type='secondary'> Agente: </Text>
                      <Tag color='volcano'>{item.agente}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  )
}
