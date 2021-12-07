import React,{useState} from 'react'
import MapGL, { Marker } from 'react-map-gl';
import Pin from './Pin'
import 'mapbox-gl/dist/mapbox-gl.css';

function Maps(props){
    const {lat,lng,text,click, venues} = props;
    const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
    const [viewport, setViewport] = useState({
        latitude:lat,
        longitude:lng,
        zoom: 16,
      });
      //mapStyle="mapbox://styles/mapbox/dark-v9"
      return (
        <MapGL
         mapboxApiAccessToken={token}
          {...viewport}
          width="100%"
          height="100%"
          onViewportChange={(viewport) => setViewport(viewport)}>
            {venues&&(
                venues.map((venue)=>(
                  <Marker key = {venue._id} latitude={venue.lat} longitude={venue.lng} offsetLeft={0} offsetTop={0} >
                    <Pin size={25} text={text} venue={venue} click={click}/>
                  </Marker>
                ))
              )}
        </MapGL>
      );
    }
export default Maps;