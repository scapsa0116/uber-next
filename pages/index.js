import { useEffect } from "react";
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';


export default function Home() {

  useEffect(() => {
    if (map.current) return; // initialize map only once
    const map = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
    });
    });


// const map = new mapboxgl.Map({
//   container: 'YOUR_CONTAINER_ELEMENT_ID',
//   style: 'mapbox://styles/mapbox/streets-v11'
//   center:, Expression expected.
//   zoom: , Expression expected,
// });







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
bg-red-500 flex-1
`
const ActionItems = tw.div`
bg-blue-500 flex-1 
`