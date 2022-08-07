import React from 'react'
import styled from 'styled-components'
import Sections from './Sections'


function HomePage(props) {
    return (
        <Container>
           <Sections
                title="Model S"
                description="Order Online for Touchless Delivery"
                image="model-s.jpg"
                leftBtnText="Custom order"
                rightbtnText="Existing Inventory"    
           />
        
            <Sections
                title="Model Y"
                description="Order Online for Touchless Delivery"
                image="model-y.jpg"
                leftBtnText="Custom order"
                rightbtnText="Existing Inventory"    
           />

            <Sections
                title="Model 3"
                description="Order Online for Touchless Delivery"
                image="model-3.jpg"
                leftBtnText="Custom order"
                rightbtnText="Existing Inventory"
            />

             <Sections
                title="Model X"
                description="Order Online for Touchless Delivery"
                image="model-X.jpg"
                leftBtnText="Custom order"
                rightbtnText="Existing Inventory"
            />
       
            <Sections
                title="Lowest Cost Solar panels In America"
                description="Money-back guarantee"
                image="solar-panel.jpg"
                leftBtnText="Order Now"
                rightbtnText="Learn More ..."
            />

             <Sections
                title="Solar for new Roofs"
                description="Solar Float Costs Less That's a New Roof Plus Salor Panels"
                image="solar-roof.jpg"
                leftBtnText="Order Now"
                rightbtnText="Learn More ..."
            />

             <Sections
                title="Accessories"
                image="accessories.jpg"
                leftBtnText="shop Now"

            />
        </Container>
    );
}

export default HomePage

const Container=styled.div`

height:100vh;

`
