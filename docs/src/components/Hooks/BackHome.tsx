import { clsx } from 'clsx'
import { useNavigate } from 'react-router-dom'
interface Props {}

function Component({}: Props) {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }
  return (
    <button
      className={clsx(
        'absolute top-6 left-4',
        'flex flex-row items-center gap-3',
      )}
      onClick={handleClick}
    >
      <svg
        className={clsx('w-7')}
        fill="rgb(0, 0, 0)"
        id="b"
        viewBox="0 0 36 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.14 12H3.96M14.69 22.85 1.86 12 14.69 1.15"
          fill="none"
          stroke="#f6f1d7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.13rem"
        />
      </svg>
      <a className={clsx('text-xl hover:underline')} href={'/'}>
        All hooks
      </a>
    </button>
  )
}

export default Component
