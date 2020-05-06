import React from 'react'
import { Layout, Menu } from 'antd';
import { 
  FileSearchOutlined, FireOutlined, 
  FormatPainterOutlined, ExperimentOutlined, 
  DesktopOutlined, MonitorOutlined,
  SmileOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function Index ({ children }) {

  return (
    <Layout>
      <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<FormatPainterOutlined />} title="Styles">
            <Menu.Item key="10"> CSS Tricks </Menu.Item>
            <Menu.Item key="11"> Styled Components </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<FileSearchOutlined />} title="Design Pattern">
            <Menu.Item key="20">Compound Components </Menu.Item>            
            <Menu.Item key="21">Render Props </Menu.Item>            
            <Menu.Item key="22">Best Practices </Menu.Item>            
          </SubMenu>
          <SubMenu key="sub3" icon={<FireOutlined />} title="Hooks">
            <Menu.Item key="30">Custom Hooks</Menu.Item>            
          </SubMenu>
          
          <SubMenu key="sub4" icon={<ExperimentOutlined />} title="Functionalities">
            <Menu.Item key="40">Examples</Menu.Item>
          </SubMenu>
          
          <SubMenu key="sub5" icon={<DesktopOutlined />} title="Learn">
            <Menu.Item key="50">WebGL</Menu.Item>
            <Menu.Item key="51">WebRTC</Menu.Item>
            <Menu.Item key="52">API HTML</Menu.Item>
            <Menu.Item key="53">Regex</Menu.Item>
            <Menu.Item key="54">Google Maps</Menu.Item>
            <Menu.Item key="55">RxJS</Menu.Item>
            <Menu.Item key="56">PWA</Menu.Item>
            <Menu.Item key="57">Functional Programming</Menu.Item>
            <Menu.Item key="58">TDD - Jest</Menu.Item>            
            <Menu.Item key="59">Data Structure</Menu.Item>            
          </SubMenu>

          <SubMenu key="sub6" icon={<MonitorOutlined />} title="Utils">
            <Menu.Item key="60">Examples</Menu.Item>            
          </SubMenu>
          
          <SubMenu key="sub7" icon={<SmileOutlined />} title="English">
            <Menu.Item key="70">Phrases | Sentence</Menu.Item>
            <Menu.Item key="71">Verbs</Menu.Item>


          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: '100vh',
          }}
        >
          { children }
        </Content>
      </Layout>
      </Layout>
    </Layout>
  )
}

export default Index

/*

Links ... 
  Styles: { Animations CSS, Styled Components, Designs UI: { Neumorphism, Creations (Like fireship video youtube)} }, 
  Design pattern: { Render Props, Compound Components, Context API Components }, 
  Hooks: { Custom hooks }, 
  Best Practices: { Components, Js functions, Routes Transitions }, 
  Functionalities: { 
    Counter Up, 
    Counter Down, 
    Validations, 
    Rating calification, 
    Drag N Drop, 
    Canvas, 
    TimeLine,  
  }, 
  Learn: { WebGL, WebRTC, Regex, API HTML, RxJs, Maps, PWA }, 
  Utils: { Functionalities Utils, Js tricks }, 
  English: { Phrases learned, Vocabulary }

*/