import { clsx } from 'clsx'
interface Props {
  name: string
  description: string
}

function Advertisement({ name }: { name: string }) {
  return (
    <div
      className={clsx(
        'relative',
        'border-2 border-iblack rounded-xl p-4',
        'flex flex-col items-center',
      )}
    >
      <img
        className={clsx('py-1', 'w-36')}
        alt={'image'}
        src="https://usehooks.com/img/react-gg-logo.svg"
      />
      <p className={clsx('p-2 mb-5')}>
        &nbsp;&nbsp; Want to learn how to build {name} yourself? Check out{' '}
        <a
          className={clsx('hover:bg-iyellow hover:text-iblack', 'text-iyellow')}
          href=""
        >
          <span className={clsx('underline')}>react</span>.gg
        </a>{' '}
        – the interactive way to master modern React.
      </p>
      <a
        className={clsx(
          'absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2',
          'font-bold text-iblack bg-igreen py-2 px-4 rounded-full',
        )}
        href=""
      >
        LEARN MORE
      </a>
    </div>
  )
}

function Component({ name, description }: Props) {
  return (
    <div className={clsx('grid grid-cols-5')}>
      <div className={clsx('col-span-3')}>{description}</div>
      <div className={clsx('col-span-2')}>
        <Advertisement name={name}></Advertisement>
      </div>
    </div>
  )
}

export default Component
