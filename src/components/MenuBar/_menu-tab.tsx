import { h, FunctionalComponent } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { useHistory, useLocation } from "react-router-dom";
import './_menu-tab.scss'


export const MenuBarTabs: FunctionalComponent<IMenuBarTabs> = ({ tabs, onTabClick }) => {
  const history = useHistory()
  const location = useLocation()

  const onTabClicked = (e: MouseEvent | TouchEvent, link: string) => {
    history.push(link)
    onTabClick && onTabClick(e, link)
  }

  const renderTab = (tab: IMenuBarTab) => {
    let classNames = 'tab-button '
    if (tab.link.split('/')[1] == location.pathname.split('/')[1]) 
      classNames += 'active '

    return (
      <div className={classNames} 
           onClick={e => onTabClicked(e, tab.link)}>
        <div className="tab-button-content">
          {tab.title}
        </div>
      </div>
    )
  }

  return (
    <div className="menu-bar-tabs">
      {tabs?.map((item, i) => renderTab(item))}
    </div>
  )
}

interface IMenuBarTabs {
  tabs: IMenuBarTab[]
  onTabClick?: (e: MouseEvent | TouchEvent, link: string) => void
}

interface IMenuBarTab {
  active?: boolean
  title: string
  link: string
}

export {
  IMenuBarTabs,
  IMenuBarTab
}