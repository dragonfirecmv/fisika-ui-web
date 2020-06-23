import { h, render } from 'preact';
import { MenuBar } from '../components/MenuBar'
import { Billboard } from 'components/Billboard';
import "assets/styles/global.scss"

export const App = () => {

  return (
    <div>
      <Billboard/>
      <MenuBar/>
    </div>
  )
}