import React from 'react';
import { useDispatch } from 'react-redux';
import { Layout, Menu } from 'antd';
import { LogoutOutlined, UsergroupAddOutlined, SettingOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

/** Import Styles */
import '../../../styles/css/sidebar.scss';
import { logout } from '../../../store/slices/auth';

const { Sider } = Layout;

const AppSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div className="titulo">
        <h1 className="h4 m-0">Panel de administración</h1>
      </div>
      <Menu mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UsergroupAddOutlined />}>
          <Link to="usuarios">
            Usuarios
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<SettingOutlined />}>
          <Link to="ajustes">
            Ajustes
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<LogoutOutlined />} onClick={handleLogout}>
          Salir
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AppSidebar;
