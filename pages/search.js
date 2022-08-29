import {useState} from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link';



const search = () => {


const [pickup, setPickup ] = useState("")
const [dropoff, setDropoff ] = useState("")

console.log(pickup)
console.log(dropoff)


  return (
    <Wrapper>
      <ButtonContainer>
      <Link href="/">
        <BackButton src ="https://img.icons8.com/ios-filled/50/000000/long-arrow-left.png"/>
      </Link>
      </ButtonContainer>
      <InputContainer>
      <FromToIcons>
        <Circle src= "https://img.icons8.com/plumpy/24/000000/unchecked-circle.png" />
        <Line src= "https://img.icons8.com/ios/50/000000/vertical-line.png" />
        <Square src= "https://img.icons8.com/windows/32/000000/square-full.png" />
      </FromToIcons>

      <InputBoxes>
      <Input
      value = {pickup}
      onChange = {(e) => setPickup(e.target.value)}
       placeholder="Enter pickup location"/>
       
      <Input
      value = {dropoff} 
      onChange = {(e) => setDropoff(e.target.value)}
      placeholder="Where to?"/>
      </InputBoxes>
      <PlusIcon src="https://img.icons8.com/external-simple-solid-edt.graphics/50/000000/external-Plus-add-and-remove-simple-solid-edt.graphics.png"/>
      
      </InputContainer>
      

      <SavedPlaces>
      <StarIcon src="https://img.icons8.com/sf-ultralight/25/000000/star.png"/>
        Saved Places
      </SavedPlaces>
      <CreateLocationsButton>
      <Link href={{
        pathname: "/confirm",
        query: {
          pickup: pickup,
          dropoff: dropoff
        }
      
      }
        
        }>
        <LocationText>Confirm Location</LocationText>
        </Link>
      </CreateLocationsButton>




    </Wrapper>
  )
}

export default search


const Wrapper = tw.div`
bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
bg-white px-4
`
const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`
const BackButton = tw.img`
w-10 h-10 cursor-pointer
`

const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2

`
const FromToIcons = tw.div`
 w-10 flex flex-col items-center mr-2

`
const Circle = tw.img`
h-2.5 px-1
`

const Line = tw.img`
h-10
`

const Square = tw.img`
h-3 px-1
`

const InputBoxes = tw.div`
flex flex-col flex-1
`

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`

const PlusIcon = tw.img`
h-10 w-10 bg-gray-200 rounded-full ml-3
`


const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`

const CreateLocationsButton = tw.div`
h-10 px-7 py-4
`

const LocationText = tw.div`
flex flex-col  bg-black h-10 text-center text-white py-2 transform hover:scale-105 transition cursor-pointer
`