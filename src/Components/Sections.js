import React from 'react'
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

function Section({title,description,image,leftBtnText,rightbtnText}) {
    return (
        <Wrap bgImage={image}> 
        <Zoom top>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Zoom>
            <Buttons>
                <ButtonGroup>

                    <Bounce left>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                    </Bounce>

                        {/* that means .. if right butn is exists*/}
                    <Bounce right>
                        {rightbtnText &&
                        
                        <RightButton>
                        {rightbtnText}
                        </RightButton>
                        }
                   </Bounce>
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>
        </Wrap>
    )
}

export default Section
//#region 
const Wrap=styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image:${props => `url("/images/${props.bgImage}");`}
    display:flex;
    flex-direction:column;
    justify-content:space-between; //vertical
    align-items:center; //horizontal
`
const ItemText=styled.div`
 padding-top:18vh;
 text-aligh:center;
`
const ButtonGroup=styled.div`
display:flex;
margin-bottom:30px;
@media (max-width: 768px)
{ 
    flex-direction:column;
}
`
const LeftButton=styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;
`
const RightButton=styled(LeftButton)`
    background-color:white;
    color:black;
    opacity:.65 ;
`

const DownArrow = styled.img `
    height:40px;
    animation:animateDown infinite 1.5s;
    overflow-x:hidden;
`
const Buttons=styled.div`

`
//#endregion