import { UserOutlined } from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import React, { useContext } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { UiContext } from '../context/UiContext'
import { Cola } from './Cola'
import { CrearTicket } from './CrearTicket'
import { Escritorio } from './Escritorio'
import { Ingresar } from './Ingresar'
const { Sider, Content } = Layout

export const RouterPages = () => {
  const { ocultarMenu } = useContext(UiContext)

  const menuPublic = [
    { key: 'ingresar', icon: <UserOutlined />, label: <Link to='/ingresar'>Ingresar</Link> },
    { key: 'cola', icon: <UserOutlined />, label: <Link to='/cola'>Cola de Tickets</Link> },
    { key: 'crear', icon: <UserOutlined />, label: <Link to='/crear'>Crear Ticket</Link> }
  ]
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  return (
    <Layout style={{ height: '100vh', padding: 0, margin: 0 }}>
      <Sider collapsedWidth='0' breakpoint='md' hidden={ocultarMenu}>
        <Menu
          theme='dark'
          defaultSelectedKeys={['ingresar']}
          items={menuPublic}
        />
      </Sider>
      <Layout className='site-layout'>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer
          }}
        >
          <Routes>
            <Route path='ingresar' element={<Ingresar />} />
            <Route path='cola' element={<Cola />} />
            <Route path='crear' element={<CrearTicket />} />
            <Route path='escritorio' element={<Escritorio />} />
            <Route path='*' element={<Navigate to='ingresar' />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}
