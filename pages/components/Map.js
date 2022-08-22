import { useEffect } from "react";
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2NhcHNhMDExNiIsImEiOiJjbDZkdDh1eHIwMWE0M2lydzJqdW1kaWNqIn0.eXwFPx-HHljcYye_Pd9JUA';

const Map = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
        container: "map",
        style:'mapbox://styles/mapbox/streets-v11',
        center:[-99.29011, 39.39172],
        zoom: 3,
        });
        
        addToMap(map)
        
        
        });

        const addToMap = (map) => {
          const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
          .setLngLat([12.65147, 55.608166])
          .addTo(map);

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
