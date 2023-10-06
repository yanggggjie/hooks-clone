import { clsx } from 'clsx'
interface Props {
  image: string
  title: string
}

function Component({ image, title }: Props) {
  return (
    <button
      className={clsx(
        'w-96 border-2 bg-[#0f0d0e] rounded-xl border-[#221f20]',
        'flex flex-col items-center gap-4',
      )}
      key={image}
    >
      <img className={clsx('w-20 -mt-5')} src={image} alt="image" />
      <img
        className={clsx('w-36')}
        src="https://usehooks.com/img/react-gg-logo.svg"
        alt={'react-gg'}
      />
      <p className={clsx('w-80 mb-7 text-center')}>{title}</p>
    </button>
  )
}

export default Component
