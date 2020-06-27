import { h, FunctionalComponent } from "preact"
import { MenuBar, IMenuBarTab } from 'components/MenuBar'
import SiteLogoEN from "assets/images/en-site-logo.png"


export const AppFrameHeader: FunctionalComponent = ({children}) => {

  const MenuLists: IMenuBarTab[] = [
    {
      active: true,
      title: "Home",
      link: "/"
    },
    {
      title: "Academics",
      link: "/academics"
    },
    {
      title: "Research",
      link: "/research",
    }
  ]
  
  return (
    <div className="app-frame header-bar">
      <MenuBar siteLogo={SiteLogoEN} tabs={MenuLists}  />
    </div>
  )
}