import { h } from 'preact'
import "./_billboard.scss"
import img1 from "assets/images/billboard/bb-image-1.jpg"


export const Billboard = () => {

  return (
    <div className="al-billboard">
      <div className="al-billboard bkg">
        <img src={img1}/>
        <div id="gradient-radial"/>
        <div id="gradient-linear"/>
      </div>
      <div className="al-billboard content">
        
      </div>
    </div>
  )
}