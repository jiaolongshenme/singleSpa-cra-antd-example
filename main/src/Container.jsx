

import React, { useState } from 'react';
import * as singleSpa from 'single-spa/lib/esm/single-spa.dev';
import 'antd/dist/antd.css';
import {  useHistory } from "react-router-dom";

import '@ant-design/pro-layout/dist/layout.css'; 
import {  Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ProLayout  from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';
import { loadResources } from './utils';


export default function Container ()  {
  const [settings, setSetting] = useState({ fixSiderbar: true });
  const [pathname, setPathname] = useState('/welcome');
  const history = useHistory();
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...defaultProps}
        location={{
          pathname,
        }}
        waterMarkProps={{
          content: 'Pro Layout',
        }}

        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            href="javascript:void(0)"
            onClick={() => {
              setPathname(item.path)
              history.push(item.path)
            }}
          >
            {dom}
          </a>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
        {...settings}
      >
        <div id="container" ></div>
      </ProLayout>
    </div>
  );
};


// 配置子应用
const apps = [
  {
    name: 'home',
    host: 'http://localhost:3001',
    match: /^\/home/
  },
  {
    name: 'about',
    host: 'http://localhost:3002',
    match: /^\/about/
  }
]
// 注册应用
for (let i = 0, app = null; i < apps.length; i++) {
  app = apps[i];
  singleSpa.registerApplication(
    app.name, 
    async (arg) => {
      await loadResources(app.host);
      return window[app.name];
    },
    location => {
      return app.match.test(location.pathname)
    }
  );
}
 // 启动
singleSpa.start();


