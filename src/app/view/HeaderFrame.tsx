import { h, FunctionalComponent } from "preact"


export const AppFrameHeader: FunctionalComponent = ({children}) => {

  return (
    <div className="app-frame header-bar">
      {children}
    </div>
  )
}