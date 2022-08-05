import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link';
import Map from './components/map'


const confirm = () => {
  return (
    <Wrapper>
        <Map/>
        <RideContainer>

        </RideContainer>

        <RideSelector>
            <TitleText>Coose your ride, or swipe up for more.</TitleText>
            <Buttons/>
            <Buttons/>
            <Buttons/>
            <Buttons/>
            


        </RideSelector>
        <ConfirmButton>
           Confirm UberX
        </ConfirmButton>
        
        
        </Wrapper>
  )
}

export default confirm

const Wrapper = tw.div`
flex flex-col h-screen 
`

const RideContainer = tw.div`
flex-1
`

const RideSelector = tw.div`

`

const ConfirmButton = tw.div`

`
const TitleText = tw.div`
text-black 
`

const Buttons = tw.div`

`