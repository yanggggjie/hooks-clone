import { clsx } from 'clsx'
import * as React from 'react'
import { IHookState } from '@components/Home/Layout/Board/Board.js'
import { useState } from 'react'
interface Props {
  setHooksStateList: React.Dispatch<React.SetStateAction<IHookState[]>>
}
enum Sort {
  Popular = 'Popular',
  Name = 'Name',
}
function Component({ setHooksStateList }: Props) {
  const [sort, setSort] = useState<Sort>(Sort.Name)

  function handleSortByPopular() {
    setSort(Sort.Popular)
    setHooksStateList((prev) => {
      return prev
        .sort((a, b) => {
          return b.name.length - a.name.length
        })
        .slice()
    })
  }
  function handleSortByName() {
    setSort(Sort.Name)
    setHooksStateList((prev) => {
      return prev
        .slice()
        .sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
        .slice()
    })
  }

  return (
    <div className={clsx(' space-x-2')}>
      Sort:{' '}
      <Button
        isActive={sort === Sort.Popular}
        text={Sort.Popular}
        onClick={handleSortByPopular}
      ></Button>
      <Button
        isActive={sort === Sort.Name}
        text={Sort.Name}
        onClick={handleSortByName}
      ></Button>
    </div>
  )
}
function Button({
  isActive,
  text,
  onClick,
}: {
  isActive: boolean
  text: string
  onClick: () => void
}) {
  return (
    <button
      className={clsx(
        isActive ? 'bg-iyellow text-iblack' : ' bg-iblack border-iwhite border',
        'hover:bg-igray',
        'rounded-md py-1 px-2',
      )}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Component
