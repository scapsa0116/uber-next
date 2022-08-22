import React, { useEffect } from 'react'
import tw from "tailwind-styled-components"
// import Link from 'next/link';
import Map from './components/map'


const Confirm = () => {

  const getCoordinations = () => {
    location = "Santa Monica"

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json` + 
     new URLSearchParams({ 
      access_token: "pk.eyJ1Ijoic2NhcHNhMDExNiIsImEiOiJjbDZkdDh1eHIwMWE0M2lydzJqdW1kaWNqIn0.eXwFPx-HHljcYye_Pd9JUA"
     }) 
     )
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
  }


  useEffect(()=>{
    getCoordinations();
  }, [])




  return (
    <Wrapper>
        <Map/>
        <RideContainer>
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

        </RideContainer>

        
        
        
        </Wrapper>
  )
}

export default Confirm

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