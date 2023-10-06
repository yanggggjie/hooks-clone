import { clsx } from 'clsx'
import Test from '@components/Test.js'
import Header from '@components/Home/Layout/Header.js'
import { Outlet } from 'react-router-dom'
import Board from '@components/Home/Layout/Board/Board.js'
import Footer from '@components/Home/Layout/Footer.js'
interface Props {}

function Component({}: Props) {
  return (
    <div>
      <div className={clsx('bg-[#221f20] p-4')}>
        <div className={clsx('bg-[#0f0d0e] p-4', 'relative')}>
          <Header></Header>
          <Outlet></Outlet>
          <Board></Board>
          <Footer></Footer>
        </div>
      </div>
      <hr />
      <Test></Test>
    </div>
  )
}

export default Component
