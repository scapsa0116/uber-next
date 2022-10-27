import React from 'react'
import tw from "tailwind-styled-components"

const RideSelector = () => {
  return (
    <Wrapper>
        
        <Title>Choose the ride, or swipe up for more</Title>
        <CarList>
            <Car>
                <CarImage src="https://i.ibb.co/cyvcpfF/uberx.png "/>
                    <CarDetails>
                        <Service>Uber X</Service>
                        <Time>5 min awai</Time>
                        
                    </CarDetails>
                    <Price>$10</Price>
            </Car>
            <Car>
                <CarImage src="https://i.ibb.co/cyvcpfF/uberx.png "/>
                    <CarDetails>
                        <Service>Uber XL</Service>
                        <Time>5 min awai</Time>
                        
                    </CarDetails>
                    <Price>$30</Price>
            </Car>
            <Car>
                <CarImage src="https://img.icons8.com/ios-glyphs/30/000000/hennessey-venom.png"/>
                    <CarDetails>
                        <Service>Black</Service>
                        <Time>5 min awai</Time>
                        
                    </CarDetails>
                    <Price>$100</Price>
            </Car>

        </CarList>
        
  </Wrapper>
  )
}

export default RideSelector;

const Wrapper = tw.div`
flex-1 bg-white

`

const Title = tw.div` 
text-gray-500 text-center text-xs py-2 border-b

`

const Car = tw.div` 
flex p-4
`

const CarList = tw.div`

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