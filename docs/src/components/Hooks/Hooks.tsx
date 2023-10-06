import { clsx } from 'clsx'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import BackHome from '@components/Hooks/BackHome.js'
import HooksDisplay from '@components/Hooks/HooksDisplay/HooksDisplay.js'
interface Props {}

function Component({}: Props) {
  const { hooksName } = useParams()
  const [Demo, setDemo] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    import(`@components/Data/hooksData/${hooksName}/demo.tsx`)
      .then((value) => {
        setDemo(() => {
          return value.default
        })
      })
      .catch(() => {
        console.log('import demo error')
      })
  }, [hooksName])

  useEffect(() => {
    import(`@components/Data/hooksData/${hooksName}/data.ts`)
      .then((value) => {
        setData(() => {
          return value.data
        })
      })
      .catch(() => {
        console.log('import data error')
      })
  }, [hooksName])

  return (
    <div>
      <BackHome></BackHome>
      <div
        className={clsx(
          'm-3 mt-32 bg-igray',
          'border border-iblack rounded-xl',
          'relative py-12 px-8',
        )}
      >
        {data && Demo && <HooksDisplay data={data} Demo={Demo}></HooksDisplay>}
      </div>
    </div>
  )
}

export default Component
