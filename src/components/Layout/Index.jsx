import React from 'react'
import { Layout, Menu } from 'antd';
import { 
  FileSearchOutlined, FireOutlined, 
  FormatPainterOutlined, ExperimentOutlined, 
  DesktopOutlined, MonitorOutlined,
  SmileOutlined, HomeOutlined
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom'

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function Index ({ children }) { 

  return (
    <Layout>
      <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['0']}          
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="0" icon={<HomeOutlined />}> <NavLink exact to='/'>  Home </NavLink> </Menu.Item> 
          
          <SubMenu key="sub1" icon={<FormatPainterOutlined />} title="Styles">
            <Menu.Item key="10"> <NavLink to='/css'> Css </NavLink> </Menu.Item>
          </SubMenu>

          <SubMenu key="sub2" icon={<FileSearchOutlined />} title="Design Pattern">
            <Menu.Item key="20"><NavLink to='/patterns'> Patterns </NavLink> </Menu.Item>            
          </SubMenu>
          
          <SubMenu key="sub3" icon={<FireOutlined />} title="Hooks">
            <Menu.Item key="30"> <NavLink to='/hooks'> Custom Hooks </NavLink>  </Menu.Item>            
          </SubMenu>
          
          <SubMenu key="sub4" icon={<ExperimentOutlined />} title="Functionalities">
            <Menu.Item key="40"> <NavLink to='/functions'> Utils | Algorithms </NavLink> </Menu.Item>
          </SubMenu>
          
          <SubMenu key="sub5" icon={<DesktopOutlined />} title="Learn">
            <Menu.Item key="50"><NavLink to='/webgl'> WebGL </NavLink></Menu.Item>
            <Menu.Item key="51"><NavLink to='/webrtc'> WebRTC </NavLink></Menu.Item>
            <Menu.Item key="52"><NavLink to='/html'> API HTML </NavLink></Menu.Item>
            <Menu.Item key="53"><NavLink to='/regex'> Regex Js </NavLink></Menu.Item>
            <Menu.Item key="54"><NavLink to='/maps'> Google Maps </NavLink></Menu.Item>
            <Menu.Item key="55"><NavLink to='/rxjs'> RxJs </NavLink></Menu.Item>
            <Menu.Item key="56"><NavLink to='/pwa'> PWA </NavLink></Menu.Item>
            <Menu.Item key="57"><NavLink to='/functional'> Functional Programming </NavLink></Menu.Item>
            <Menu.Item key="58"><NavLink to='/tdd'> TDD Jest </NavLink></Menu.Item>            
            <Menu.Item key="59"><NavLink to='/data'> Data Structure </NavLink></Menu.Item>            
          </SubMenu>

          <SubMenu key="sub6" icon={<MonitorOutlined />} title="Utils">
            <Menu.Item key="60"><NavLink to='/utils'> Examples </NavLink></Menu.Item>            
          </SubMenu>
          
          <SubMenu key="sub7" icon={<SmileOutlined />} title="English">
            <Menu.Item key="70"><NavLink to='/phrases'> Phrases | Sentence </NavLink></Menu.Item>
            <Menu.Item key="71"><NavLink to='/verbs'> Verbs </NavLink></Menu.Item>            
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
  Styles: { Animations CSS, SASS, SCSS, Grid, Flex, Styled Components, Designs UI: { Neumorphism, Creations (Like fireship video youtube)} }, 
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

/* <Menu.Item key="11"> Styled Components </Menu.Item> */
