import { Route, Routes } from 'react-router-dom'
import HomeLayout from '@components/Home/Layout/Layout.js'
import HomePage from '@components/Home/Page/Page.js'
import Hooks from '@components/Hooks/Hooks.js'

interface Props {}

function Component({}: Props) {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<HomeLayout />}>
          <Route index={true} element={<HomePage />}></Route>
          <Route path={':hooksName'} element={<Hooks />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default Component
