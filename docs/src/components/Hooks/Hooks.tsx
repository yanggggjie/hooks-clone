import { clsx } from 'clsx'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface Props {}

function Component({}: Props) {
  const { hooksName } = useParams()
  const [data, setData] = useState(null)
  const [Demo, setDemo] = useState(null)

  useEffect(() => {
    import(`@components/Data/${hooksName}/index.ts`).then((value) => {
      if (!value) {
        console.error('Imported module is null or undefined')
        return
      }
      const { Demo: ImportedDemo, data: importedData } = value
      setData(importedData)
      setDemo(() => {
        return ImportedDemo
      })
    })
  }, [hooksName])

  return (
    <div>
      <div>
        <div>{hooksName}</div>
        <div>{JSON.stringify(data)}</div>
        {Demo && <Demo />}
      </div>
    </div>
  )
}

export default Component
