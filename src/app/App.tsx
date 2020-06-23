import { h, render } from 'preact';
import { AppFrameHeader } from './view/HeaderFrame';
import { MenuBar } from '../components/MenuBar'
import { Billboard } from 'components/Billboard';
import "assets/styles/global.scss"
import "assets/styles/frame.scss"
import { AppFrameContent } from './view/ContentFrame';

export const App = () => {

  return (
    <div className="app-frame">
      <AppFrameContent>
        <Billboard/>
      </AppFrameContent>
      <AppFrameHeader>
        <MenuBar/>
      </AppFrameHeader>
      
    </div>
  )
}