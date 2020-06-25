import { h, FunctionalComponent } from 'preact'


export const Container: FunctionalComponent = ({ children }) => (
  <div className="al-container root">
    <div className="al-container content">
      {children}
    </div>
  </div>
)


// export const Col: FunctionalComponent = ({ children }) => (
//   <div className="al-container row">
//     {children}
//   </div>
// )

// export const Row: FunctionalComponent = ({ children }) => (
//   <div className="al-container row">
//     {children}
//   </div>
// )