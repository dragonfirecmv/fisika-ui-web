import { h, FunctionalComponent } from 'preact';
import { Container } from 'components/Container'
import { MenuBarTabs, IMenuBarTab } from './_menu-tab';
import './menu-bar.scss'


export const MenuBar: FunctionalComponent<IMenuBarProps> = (props) => {
  return (
    <div className="menu-bar">
      <Container>
        <div className="menu-contents">
          <div className="area-logo">
            {props.siteLogo && <img src={props.siteLogo}/>}
          </div>
          <div className="area-tabs">
            <MenuBarTabs 
              tabs={props.tabs} 
              onTabClick={props.onTabClick}/>
          </div>
          {/* <div className="area-misc">
            X
          </div> */}
        </div>
      </Container>
    </div>
  )
}

interface IMenuBarProps {
  siteLogo?: string | any
  tabs: IMenuBarTab[]
  onTabClick?: (e: MouseEvent | TouchEvent, link: string) => void
}

export {
  IMenuBarTab
}