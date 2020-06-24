import { h } from 'preact'
import './_menu-tab.scss'


export const MenuBarTabs = () => (
  <div className="menu-bar-tabs">
    <div className="tab-button active">
      <div className="tab-button-content">
        Home
      </div>
    </div>
    <div className="tab-button">
      <div className="tab-button-content">
        Academics
      </div>
    </div>
    <div className="tab-button">
      <div className="tab-button-content">
        Research
      </div>
    </div>
    <div className="tab-button">
      <div className="tab-button-content">
        News
      </div>
    </div>
  </div>
)