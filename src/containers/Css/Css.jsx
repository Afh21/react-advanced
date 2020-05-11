import React, { useState, useContext } from 'react'
import { Row, Steps, Col } from 'antd'
import StepView from './Steps/index.js'
import { HighlightOutlined, RadiusSettingOutlined, BugOutlined } from '@ant-design/icons'
import { CssProvider } from './Context/CssContext';

const { Step } = Steps;

function Css() {

  const [stepCurrent, setViewStepCurrent] = useState(0)
  const handleNextSetp = (current) => setViewStepCurrent(current)
  const handlePrevStep = () =>  setViewStepCurrent(stepCurrent - 1)
  const StepViewToRender = StepView[`Step${stepCurrent}`];


  return (
    <Row>

        <Col span={24}>
          <Steps current={stepCurrent} onChange={handleNextSetp} >
            <Step status={stepCurrent === 0 ? 'process' : ''} title="Design" subTitle="Neumorphism" icon={<HighlightOutlined />}/>
            <Step status={stepCurrent === 1 ? 'process': ''} title="Forms" subTitle="Elements" icon={<RadiusSettingOutlined />}/>
            <Step status={stepCurrent === 2 ? 'process': ''} title="Animations" subTitle="Styles" icon={<BugOutlined />}/>
          </Steps>          
        </Col>

        <Col span={24}>
          <CssProvider
            value={{
              stepCurrent,
              setViewStepCurrent,
              handleNextSetp,
              handlePrevStep
            }}
            > 
            <StepViewToRender />         
          </CssProvider>       
        </Col>

    </Row>
  )
}

export default Css
