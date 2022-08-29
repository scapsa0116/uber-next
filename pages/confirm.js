import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
// import Link from 'next/link';
import Map from './components/map'
import { useRouter } from 'next/router'
import RideSelector from'./components/RideSelector'


const Confirm = () => {
  const router = useRouter()
const { pickup, dropoff } = router.query
console.log("Pickup", pickup)
console.log("Dropoff", dropoff)

  const [ pickupCoordinates, setPickupCorrdinates ] = useState("")
  const [ dropoffCoordinates, setDropoffCoordinates ] = useState("")

  const getPickupCoordinates = (pickup) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
     new URLSearchParams({ 
      access_token: "pk.eyJ1Ijoic2NhcHNhMDExNiIsImEiOiJjbDZkdDh1eHIwMWE0M2lydzJqdW1kaWNqIn0.eXwFPx-HHljcYye_Pd9JUA",
      limit: 1
     }) 
     )
    .then(response => response.json())
    .then(data => {
      
      setPickupCorrdinates(data.features[0].center)
    })
  }

  const getDropoffCoordinates = (dropoff) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
     new URLSearchParams({ 
      access_token: "pk.eyJ1Ijoic2NhcHNhMDExNiIsImEiOiJjbDZkdDh1eHIwMWE0M2lydzJqdW1kaWNqIn0.eXwFPx-HHljcYye_Pd9JUA",
      limit: 1
     }) 
     )
    .then(response => response.json())
    .then(data => {
      
      setDropoffCoordinates(data.features[0].center)
    })
  }


  useEffect(()=>{
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff])




  return (
    <Wrapper>
        <Map
        pickupCoordinates = {pickupCoordinates}
        dropoffCoordinates = {dropoffCoordinates}
        />
        <RideContainer>
      
            <TitleText>Coose your ride, or swipe up for more.</TitleText>
            <RideSelector />
            


       
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



const ConfirmButton = tw.div`

`
const TitleText = tw.div`
text-black 
`

// 