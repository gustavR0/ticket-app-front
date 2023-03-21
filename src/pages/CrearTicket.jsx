import { Button, Col, Row, Typography } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { useHiddeMenu } from '../hooks/useHiddeMenu'

export const CrearTicket = () => {
  const { Title, Text } = Typography
  useHiddeMenu(true)

  const newTicket = () => {
    console.log('nuevo ticket')
  }

  return (
    <>
      <Row>
        <Col span={14} offset={6} align='center'>
          <Title level={2}>
            Precione Para nuevo Ticket
          </Title>
          <Button
            type='primary'
            icon={<DownloadOutlined />}
            onClick={newTicket}
          >
            Nuevo Ticket
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6} align='center'>
          <Text level={2}>
            Su número
          </Text>
          <br />
          <Text type='success' style={{ fontSize: 55 }}>
            55
          </Text>
        </Col>
      </Row>
    </>
  )
}
