import React from "react";
import tw from "tailwind-styled-components"
import Map from './components/Map.js'


export default function Home() {

  
  return (
    <Wrapper>
      <Map/>
      <ActionItems>
        <Header>
        <UberLogo src="https://turbologo.com/articles/wp-content/uploads/2019/12/Uber-logo.png"/>
        <Profile>
          <Name>Quick</Name>
          <UserImage/>
        </Profile>
        </Header>
        
      </ActionItems>
    </Wrapper>
  )
}

//everitime we create a div class we have to create it in form of variables for example:
// const Wrapper = tw.div`

// `

const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen
`

const ActionItems = tw.div`
bg-blue-500 flex-1 
`

const Header = tw.div`
bg-white
`
const UberLogo = tw.img`
h-28
`
const Profile = tw.div`

`
const Name = tw.div`

`

const UserImage = tw.img`
`