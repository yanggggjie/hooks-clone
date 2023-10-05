import { clsx } from 'clsx'
import { useNavigate } from 'react-router-dom'
interface Props {
  hooksList: string[]
}

function Component({ hooksList }: Props) {
  const navigate = useNavigate()

  return (
    <div className={clsx('flex flex-row items-center gap-10', 'px-5')}>
      {hooksList.map((item) => {
        function handleClick() {
          navigate(`/${item}`)
        }

        return (
          <button onClick={handleClick} key={item}>
            <div
              className={clsx(
                'bg-[#f8f4dd] py-1 px-2  rounded outline outline-black ',
              )}
            >
              {item}
            </div>
            <div
              className={clsx('border-[#f2bd4c] border-b-8 rounded-b')}
            ></div>
          </button>
        )
      })}
    </div>
  )
}

export default Component
