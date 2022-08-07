import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
function Footer() {
    return (
        
     <Styling>
         <Bounce bottom>
        <Menu>
            <li>
                
                <a>Tesla Clone - 2021</a>
                
            </li>
            |
            <li>

                <a>Terms and Conditions</a>
            </li>
            -
            <li>
                <a>privacy-policy</a>
            </li>
            -
            <li>
                <a>Contact</a>
            </li>
        </Menu>
        </Bounce>
        <Fade top>
        <Copyright>
          <p>
              Made with
              By <FontAwesomeIcon icon={faHeart} color="Red" />
              <a href="https://www.instagram.com/ssef_ti" target="_blank"> Monssef HOUTI</a>
              </p>
        </Copyright>
        </Fade>
     </Styling>
    )
}

export default Footer

const Styling = styled.div`
    height:7vh;
    width:100%;
    
`
const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
cursor:pointer;
a{
    font-weight:600;
    text-transform:uppercase;
    padding: 0 10px;
    flex-wrap:nowrap;
}
a:hover
{
    color:red;
}  
`
const Copyright=styled.div`
    margin-top:1vh;
    a
    {
        color:red;
        text-transform:uppercase;
    }
`