import { clsx } from 'clsx'
interface Props {}

function Component({}: Props) {
  return (
    <div className={clsx('inline', 'absolute right-4')}>
      <img
        className={clsx('w-10')}
        src="https://usehooks.com/img/icon-github.svg"
        alt={'logo'}
      />
    </div>
  )
}

export default Component
