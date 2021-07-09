import React from 'react';
import { SmileOutlined, CrownOutlined } from '@ant-design/icons';

export default {
  route: {
    path: '/',
    routes: [
      {
        path: 'welcome',
        name: '欢迎',
        icon: <SmileOutlined />,
        component: () => {
          <h1>123123</h1>
        }
      },
      {
        path: 'home',
        name: 'Home',
        icon: <CrownOutlined />,
        access: 'canAdmin'
      },
      {
        path: 'about',
        name: 'About',
        icon: <CrownOutlined />,
        access: 'canAdmin'
      }
    ]
  },
  location: {
    pathname: '/',
  }
};