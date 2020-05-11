import React, { useContext } from 'react'
import { CssContext } from '../Context/CssContext'
import Card from '../../../shared/Card'
import { PicCenterOutlined } from '@ant-design/icons'
import { Button } from 'antd'

function Step1 () {
  const { handleNextSetp, handlePrevStep } = useContext(CssContext)
  
  return (
    <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
      <Card title='Neumorphism'
        render = { () => (<> <PicCenterOutlined /> &nbsp; </>) }
      >
          Here functionality!
      </Card>

      <Card title='Neumorphism'
        render = { () => (<> <PicCenterOutlined /> &nbsp; </>) }
      >
          Here functionality!
      </Card>

      <Card title='Neumorphism'
        render = { () => (<> <PicCenterOutlined /> &nbsp; </>) }
      >
          Here functionality!
      </Card>

      <Card title='Neumorphism'
        render = { () => (<> <PicCenterOutlined /> &nbsp; </>) }
      >
          Here functionality!
      </Card>

      <Card title='Neumorphism'
        render = { () => (<> <PicCenterOutlined /> &nbsp; </>) }
      >
          <Button>Hola</Button>
      </Card>

    </div>
  )
}

export default Step1
