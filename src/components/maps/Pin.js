import React, { PureComponent } from "react";
import marker from '../../resources/marker.png'

export default class CityPin extends PureComponent {
  render() {
    const { size = 25, text } = this.props;

    return (
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div>
          <label>{text}</label>
        </div>
        <div>
          <img onClick ={()=>{}}style={{cursor:"pointer"}}height={size} alt ="" src={marker}></img>
        </div>
      </div>
    );
  }
}
