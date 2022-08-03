import { useEffect } from "react";
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2NhcHNhMDExNiIsImEiOiJjbDZkdDh1eHIwMWE0M2lydzJqdW1kaWNqIn0.eXwFPx-HHljcYye_Pd9JUA';

export default function Home() {

  useEffect(() => {
    const map = new mapboxgl.Map({
    container: "map",
    style:'mapbox://styles/mapbox/streets-v11',
    center:[-99.29011, 39.39172],
    zoom: 3,
    });
    });



  return (
    <Wrapper>
      <Map id= "map"></Map>
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
bg-red-500 flex-1
`
const ActionItems = tw.div`
bg-blue-500 flex-1 
`