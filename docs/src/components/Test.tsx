import { clsx } from 'clsx'

function Component() {
  return (
    <div className={clsx('bg-iyellow m-10')}>
      <div className={clsx('bg-red-500 rounded-xl w-36 h-20')}>123</div>
    </div>
  )
}

export default Component
