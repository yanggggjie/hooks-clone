import { clsx } from 'clsx'
import Header from '@components/Home/Header/Header.js'
import Banner from '@components/Home/Banner/Banner.js'
import HooksBoard from '@components/Home/Board/Board.js'
import Test from '@components/Test.js'
interface Props {}

function Component({}: Props) {
  return (
    <div className={clsx('bg-[#221f20] p-4')}>
      <div className={clsx('bg-[#0f0d0e] p-4')}>
        <Header></Header>
        <Banner></Banner>
        <HooksBoard></HooksBoard>
      </div>
      <hr />
      <Test></Test>
    </div>
  )
}

export default Component
