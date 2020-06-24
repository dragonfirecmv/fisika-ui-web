import { h } from 'preact';
import { Container } from 'components/Container'
import SiteLogoEN from "assets/images/en-site-logo.png"
import './menu-bar.scss'
import { MenuBarTabs } from './_menu-tab';

export const MenuBar = () => {

  return (
    <div className="menu-bar">
      <Container>
        <div className="menu-contents">
          <div className="area-logo">
            <img src={SiteLogoEN}/>
          </div>
          <div className="area-tabs">
            <MenuBarTabs/>
          </div>
          {/* <div className="area-misc">
            X
          </div> */}
        </div>
      </Container>
    </div>
  )
}