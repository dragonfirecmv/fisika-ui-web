import { h, FunctionalComponent } from "preact"


export const AppFrameContent: FunctionalComponent = ({children}) => {

  return (
    <div className="app-frame content-area">
      {children}
    </div>
  )
}