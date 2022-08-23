import { useEffect } from "react";
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2NhcHNhMDExNiIsImEiOiJjbDZkdDh1eHIwMWE0M2lydzJqdW1kaWNqIn0.eXwFPx-HHljcYye_Pd9JUA';

const Map = (props) => {
  console.log(props)

    useEffect(() => {
        const map = new mapboxgl.Map({
        container: "map",
        style:'mapbox://styles/mapbox/streets-v11',
        center:[-99.29011, 39.39172],
        zoom: 3,
        })

        if(props.pickupCoordinates){
          addToMap(map, props.pickupCoordinates)} 
          
          if(props.dropoffCordinates){
            addToMap(map, props.dropoffCoordinates)}  

          if(props.pickupCoordinates && props.dropoffCoordinates){
             map.fitBounds([
              props.pickupCoordinates,
              props.dropoffCoordinates
             ],{
              padding: 60
             })
          }  


        }, [props.pickupCoordinates, props.dropoffCoordinates]);

       

        const addToMap = (map, coordinates) => {
          const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
        }

        
    
return (
    <Wrapper id="map">
     
    </Wrapper>
  )
}

export default Map


const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen flex-1

`
