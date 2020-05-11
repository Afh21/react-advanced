import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import { Col } from 'antd'

function Card ({ children, title, render }) {

  const cardClass = ClassNames({
    card: true,
    'card-neumorphism': true,
  })

  return (
    <Col lg={6}>
      <div className={cardClass}>
        <div className="card-title"> { render && render() } { title } </div>
        <div className="card-body"> { children } </div>        
      </div>  
    </Col>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  render: PropTypes.func.isRequired
}

Card.defaultProps = {
  title: '',
  children: null,
  render: () => {}
}

export default Card
