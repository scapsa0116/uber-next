import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"

export default function Home() {
  return (
    <Wrapper>
      <Map>Map</Map>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  )
}

//everitime we create a div class we have to create it in form of variables for example:
// const Wrapper = tw.div`

// `

const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen

`
const Map = tw.div`
bg-red-500 
`
const ActionItems = tw.div`

`