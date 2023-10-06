import { clsx } from 'clsx'
interface Props {}
import Marquee from 'react-fast-marquee'
import HooksList from '@components/Home/Page/Banner/HooksList.js'
import { hooksList } from '@components/Data/hooksData/hooksList.js'

function Component({}: Props) {
  const leftList = hooksList.filter((_, index) => {
    return index < hooksList.length / 2
  })
  const rightList = hooksList.filter((_, index) => {
    return index >= hooksList.length / 2
  })

  return (
    <div className={clsx('py-12', 'space-y-3')}>
      <Marquee direction={'right'} speed={20} pauseOnHover={true}>
        <HooksList hooksList={leftList}></HooksList>
      </Marquee>
      <Marquee direction={'left'} speed={20} pauseOnHover={true}>
        <HooksList hooksList={rightList}></HooksList>
      </Marquee>
    </div>
  )
}

export default Component
