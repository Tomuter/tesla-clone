import React from 'react'
import  styled from "styled-components";
import Section from './Section';

function Home() {
  return (
    <Container>
       <Section
       model="Model S"
       description="Order Online for Touchless Delivery"
       leftBtnText="Custom Order"
       rightBtnText="Existing Inventory"
       backgroundImg="model-s.jpg"
       />
        <Section
       model="Model 3"
       description="Order Online for Touchless Delivery"
       leftBtnText="Custom Order"
       rightBtnText="Existing Inventory"
       backgroundImg="model-3.jpg"
       />
      <Section
       model="Model X"
       description="Order Online for Touchless Delivery"
       leftBtnText="Custom Order"
       rightBtnText="Existing Inventory"
       backgroundImg="model-x.jpg"
       />
      <Section
       model="Model Y"
       description="Order Online for Touchless Delivery"
       leftBtnText="Custom Order"
       rightBtnText="Existing Inventory"
       backgroundImg="model-y.jpg"
       />
       <Section 
       model="Lowest Cost Solar Panels in Everwhere"
       description="Money-back guarantee"
       leftBtnText="Order Now"
       rightBtnText="Learn more"
       backgroundImg="solar-panel.jpg"
       />
       <Section 
       model="Solar for New Roofs"
       description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
       leftBtnText="Order Now"
       rightBtnText="Learn more"
       backgroundImg="solar-roof.jpg"
       />
       <Section 
       model="Accessories"
       description="Accessories you cant resist"
       leftBtnText="Shop now"
       backgroundImg="accessories.jpg"
       />
    </Container>
  )
}

export default Home;

const Container=styled.div`
    height:100vh;
` 