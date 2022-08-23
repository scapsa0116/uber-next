import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
// import Link from 'next/link';
import Map from './components/map'


const Confirm = () => {

  const [ pickupCoordinates, setPickupCorrdinates ] = useState()
  const [ dropoffCoordinates, setDropoffCoordinates ] = useState()

  const getPickupCoordinates = () => {
    const pickup = "Santa Monica"

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
     new URLSearchParams({ 
      access_token: "pk.eyJ1Ijoic2NhcHNhMDExNiIsImEiOiJjbDZkdDh1eHIwMWE0M2lydzJqdW1kaWNqIn0.eXwFPx-HHljcYye_Pd9JUA",
      limit: 1
     }) 
     )
    .then(response => response.json())
    .then(data => {
      console.log("Picup")
      console.log(data.features[0].center)
      setPickupCorrdinates(data.features[0].center)
    })
  }

  const getDropoffCoordinates = () => {
    const dropoff = "Los Angeles"

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
     new URLSearchParams({ 
      access_token: "pk.eyJ1Ijoic2NhcHNhMDExNiIsImEiOiJjbDZkdDh1eHIwMWE0M2lydzJqdW1kaWNqIn0.eXwFPx-HHljcYye_Pd9JUA",
      limit: 1
     }) 
     )
    .then(response => response.json())
    .then(data => {
      console.log("Dropoff")
      console.log(data.features[0].center)
      setDropoffCoordinates(data.features[0].center)
    })
  }


  useEffect(()=>{
    getPickupCoordinates();
    getDropoffCoordinates()
  }, [])




  return (
    <Wrapper>
        <Map
        pickupCoordinates = {pickupCoordinates}
        dropoffCoordinates = {dropoffCoordinates}
        />
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