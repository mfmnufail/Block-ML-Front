import React from 'react'
import home from "../Assets/Home1.png";
import {Button, Header, Icon, Segment } from 'semantic-ui-react'

const Home = () => {
  return (
    <div>
      <div style={{"textAlign":"center"}}>
      <img alt="logo" src={home} />

      <Segment padded>
      <Header icon style={{"color":"black"}}>
        <Icon name='fort awesome' />
       A Blockchain platform to validate Machine Learning datasets through the novel consensus algorithm called <b>"Proof of Chosen"</b>
      </Header>
      </Segment>
      </div>
      <footer>
      <div style={{"textAlign":"center"}}>
      <Icon name='copyright outline'/> 2022 All Rights Reserved by Faculty of Engineering University of Ruhuna


        → <Icon name='spy' /> Group 13

      </div>
      </footer>
    </div>
  )
}

export default Home