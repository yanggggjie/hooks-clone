import { clsx } from 'clsx'
interface Props {}

function Component({}: Props) {
  return (
    <div className={clsx('text-white')}>
      <div>footer</div>
    </div>
  )
}

export default Component
