import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link';




const Confirm = () => {
const router = useRouter()
const { pickup, dropoff } = router.query


const [ pickupCoordinates, setPickupCoordinates ] = useState([0.0])
const [ dropoffCoordinates, setDropoffCoordinates ] = useState([0,0])

const getPickupCoordinates = (pickup) => {
  // 🔥 Emeric
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
      new URLSearchParams({
          access_token:'pk.eyJ1Ijoic2NhcHNhMDExNiIsImEiOiJjbDlyYmw4dDIwZXd6M3Vwa3I3c2t5c2tuIn0.kRnr_rRf95jpS4geYWZeLg',
          limit: 1
      })
  )
  .then(response => response.json())
  .then(data => {
      // 🚀 L M
      setPickupCoordinates(data.features[0].center);
  })
}


const getDropoffCoordinates = (dropoff) => {
  // 🔥 Emeric
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
      new URLSearchParams({
          access_token:'pk.eyJ1Ijoic2NhcHNhMDExNiIsImEiOiJjbDlyYmw4dDIwZXd6M3Vwa3I3c2t5c2tuIn0.kRnr_rRf95jpS4geYWZeLg',
          limit: 1
      })
  )
  .then(response => response.json())
  .then(data => {
      // 🚀 L M
      setDropoffCoordinates(data.features[0].center)
      console.log("HERE",data.features[0])
  })
}

useEffect(()=>{
  getPickupCoordinates(pickup);
  getDropoffCoordinates(dropoff);
}, [pickup, dropoff])




return (
  <Wrapper>
    <Link href="/">
          <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
        </Link>
      <Map 
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
      />
      {/* Benjamin */}
      <RideContainer>
          <RideSelector 
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}/>
          <ConfirmButtonContainer>
              <ConfirmButton>
                  Confirm UberX
              </ConfirmButton>
          </ConfirmButtonContainer>
      </RideContainer>
  </Wrapper>
)
}

export default Confirm

const Wrapper = tw.div`
flex flex-col h-screen 
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`
const ConfirmButtonContainer = tw.div`
border-t-2
`


const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`
const BackButton = tw.img`
h-4 w-4 cursor-pointer
`