import { clsx } from 'clsx'
interface Props {}

function Component({}: Props) {
  return (
    <div
      className={clsx(
        ' border-2 border-igray p-5',
        'flex flex-col items-center',
      )}
    >
      <img
        className={clsx('w-48 p-4')}
        alt={'image'}
        src="https://usehooks.com/img/logo-useHooks.svg"
      />
      <button
        className={clsx(
          'm-2 transition-colors hover:bg-iyellow hover:text-iblack',
          'bg-igray px-2 py-1 rounded',
        )}
      >
        by ui.dev
      </button>
      <div className={clsx('py-6 space-x-6')}>
        <a href={''}>Fork on GitHub</a>
        <a href={''}>JavaScript Newsletter</a>
        <a href={''}>Learn React</a>
      </div>
    </div>
  )
}

export default Component
