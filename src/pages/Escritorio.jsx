import { Button, Col, Divider, Row, Typography } from 'antd'
import { CloseOutlined, RightOutlined } from '@ant-design/icons'
import { useHiddeMenu } from '../hooks/useHiddeMenu'
import { useState } from 'react'
import { getUsuarios } from '../helper/getUsuarios'
import { Navigate, useNavigate } from 'react-router-dom'

export const Escritorio = () => {
  const [usuario] = useState(getUsuarios())
  const { Title, Text } = Typography
  useHiddeMenu(false)
  const navigate = useNavigate()

  const salir = () => {
    window.localStorage.clear()
    navigate('/ingresar', { replace: true })
  }

  const siguienteTicket = () => {
    console.log('sigueinte')
  }

  if (!usuario.agente && !usuario.escritorio) {
    return (<Navigate to='/ingresar' />)
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>Escritorio: </Text>
          <Text type='success'>{usuario.escritorio}</Text>
        </Col>
        <Col span={4} align='rigth'>
          <Button
            type='primary' danger
            onClick={salir}
          >
            <CloseOutlined />
            salir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>Ticket: </Text>
          <Text
            style={{ fontSize: 30 }}
            type='danger'
          >4
          </Text>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6}>
          <Button
            type='primary'
            onClick={siguienteTicket}
          >
            Sigueinte <RightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  )
}
