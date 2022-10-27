import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../data/carList'

const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {

    const [rideDduration, setRideDuration ] = useState(0);
    


useEffect(()=>{
    fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_tokenb= pk.eyJ1Ijoic2NhcHNhMDExNiIsImEiOiJjbDlyYmw4dDIwZXd6M3Vwa3I3c2t5c2tuIn0.kRnr_rRf95jpS4geYWZeLg`)
    .then(res => res.json())
    .then(data => {
        setRideDuration(data.routes[0].duration / 100)
    })

}, [pickupCoordinates, dropoffCoordinates])

  return (
    <Wrapper>
        
        <Title>Choose the ride, or swipe up for more</Title>
        <CarList>
            {carList.map((car, index) => (
                <Car key = {index}>
                <CarImage src={car.imgUrl}/>
                    <CarDetails>
                        <Service>{car.service}</Service>
                        <Time>{car.multiplier}</Time>
                        
                    </CarDetails>
                    <Price>$10</Price>
            </Car>

            ))}
            
            
        </CarList>
        
  </Wrapper>
  )
}

export default RideSelector;



const Title = tw.div` 
text-gray-500 text-center text-xs py-2 border-b

`

const Car = tw.div` 
flex p-4 items-center
`

const CarList = tw.div`
overflow-y-scroll 
`

const CarImage = tw.img`
h-14 mr-2
`

const CarDetails = tw.div`
flex-1
`

const Service = tw.div`
font-medium
`

const Time = tw.div`
text-xs text-blue-500
`

const Price = tw.div`
text-xs
`

const Wrapper = tw.div`
flex-1 bg-white overflow-y-scroll flex flex-col

`

