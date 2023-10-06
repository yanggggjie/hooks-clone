import { clsx } from 'clsx'
import { useEffect, useState } from 'react'
import HooksItem from '@components/Home/Layout/Board/HooksItem.js'
import { hooksList } from '@components/Data/hooksData/index.js'
import { Index } from '@components/Data/ADdata/index.js'
import ADItem from '@components/Home/Layout/Board/ADItem.js'
import SortButton from '@components/Home/Layout/Board/SortButton.js'

interface Props {}
export interface IHookState {
  name: string
  title?: string
}

function Component({}: Props) {
  const [hooksStateList, setHooksStateList] = useState<IHookState[]>([])

  function addToHooksStateList(hook: IHookState) {
    setHooksStateList((prev) => {
      return [...prev, hook]
    })
  }

  useEffect(() => {
    hooksList.map((item) => {
      import(`@components/Data/hooksData/${item}/index.ts`)
        .then((res) => {
          const { data } = res
          const { name, title } = data
          addToHooksStateList({ name, title })
        })
        .catch(() => {})
    })
  }, [])

  const HooksArr = hooksStateList.map((item) => {
    return (
      <HooksItem
        key={item.name}
        name={item.name}
        title={item.title}
      ></HooksItem>
    )
  })
  const ADArr = Index.map(({ image, title }) => {
    return <ADItem image={image} title={title}></ADItem>
  })
  const renderArr = [...HooksArr, ...ADArr]

  return (
    <div className={clsx('text-white p-10')}>
      <div className={clsx('flex flex-row items-center', 'pr-11 pb-3')}>
        <div className={'grow'}></div>
        <SortButton setHooksStateList={setHooksStateList}></SortButton>
      </div>
      <div className={clsx('grid grid-cols-2 gap-y-10 place-items-center')}>
        {renderArr}
      </div>
    </div>
  )
}

export default Component
