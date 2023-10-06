import { clsx } from 'clsx'
import { useNavigate } from 'react-router-dom'
interface Props {
  name: string
  title: string
}

function Component({ name, title }: Props) {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/${name}`)
  }

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'hover:scale-[1.05] transition-transform',
        'w-96 rounded p-7 bg-igray',
      )}
    >
      <div className={clsx('font-bold text-xl text-iblue py-3')}>{name}</div>
      <div>{title}</div>
      <div className={clsx('flex flex-row items-center')}>
        <div className={clsx('grow')}></div>
        <svg
          className={clsx('w-7')}
          viewBox="0 0 36 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"
            fill="none"
            stroke="#12b2e2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.13rem"
          />
        </svg>
      </div>
    </button>
  )
}

export default Component
