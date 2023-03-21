import { Button, Form, Input, InputNumber, Typography } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import { Navigate, useNavigate } from 'react-router-dom'
import { useHiddeMenu } from '../hooks/useHiddeMenu'
import { getUsuarios } from '../helper/getUsuarios'
import { useState } from 'react'

export const Ingresar = () => {
  const [usuario] = useState(getUsuarios())
  const { Title } = Typography
  useHiddeMenu(false)
  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log('Success:', values)
    const { agente, escritorio } = values
    window.localStorage.setItem('agente', agente)
    window.localStorage.setItem('escritorio', escritorio)
    navigate('/escritorio')
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  if (usuario.agente && usuario.escritorio) {
    return (<Navigate to='/escritorio' />)
  }
  return (
    <>
      <Title level={2}>Ingresar</Title>
      <Form
        name='basic'
        labelCol={{
          span: 6
        }}
        wrapperCol={{
          span: 16
        }}
        style={{
          maxWidth: 600
        }}
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Nombre del Agente'
          name='agente'
          rules={[
            {
              required: true,
              message: 'Profavor ingrese su nombre'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Escritorio'
          name='escritorio'
          rules={[
            {
              required: true,
              message: 'Ingrese el numero de escritorio'
            }
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 16
          }}
        >
          <Button type='primary' htmlType='submit'>
            <LoginOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
