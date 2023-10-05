import { clsx } from 'clsx'
import Test from '@components/Test.js'
import Header from '@components/Home/Header/Header.js'
import Banner from '@components/Home/Banner/Banner.js'
import HooksBoard from '@components/Home/Board/Board.js'
import { Route, Routes } from 'react-router-dom'
import Home from '@components/Home/Home.js'
import Hooks from '@components/Hooks/Hooks.js'
interface Props {}

function Component({}: Props) {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/:hooksName'} element={<Hooks />}></Route>
      </Routes>
    </div>
  )
}

export default Component
