import { h } from 'preact';
import { Container } from 'components/Container'
import SiteLogoEN from "assets/images/en-site-logo.png"
import './menu-bar.scss'

export const MenuBar = () => {

  return (
    <div className="menu-bar">
      <Container>
        <div className="contents">
          <div className="area-logo">
            <img src={SiteLogoEN}/>
          </div>
        </div>
      </Container>
    </div>
  )
}