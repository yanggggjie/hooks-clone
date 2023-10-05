import { clsx } from 'clsx'
import { useEffect, useState } from 'react'
interface Props {}
interface IHookState {
  name: string
  description?: string
}

function Component({}: Props) {
  const [hooksName, setHooksName] = useState(null)

  const [hooksStateList, setHooksStateList] = useState<IHookState[]>([])

  function addToHooksStateList(hook: IHookState) {
    setHooksStateList((prev) => {
      return [...prev, hook]
    })
  }

  useEffect(() => {
    if (hooksName) return
    import('@components/Data/index.js')
      .then((res) => {
        const { hooksList } = res
        setHooksName(hooksList)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (!hooksName) return
    Promise.all(
      hooksName.map((item) => {
        import(`@components/Data/${item}/index.ts`)
          .then((res) => {
            const { data } = res
            const { name, description } = data
            addToHooksStateList({ name, description })
          })
          .catch(() => {})
      }),
    )
  }, [hooksName])

  return (
    <div className={clsx('text-white')}>
      {hooksStateList.map((item) => {
        return (
          <div key={item.name}>
            <div>name:{item.name}</div>
            <div>description:{item.description}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Component
