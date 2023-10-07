import { clsx } from 'clsx'
import { Editor } from '@monaco-editor/react'

interface Props {
  code: string
}

function Component({ code }: Props) {
  return (
    <div>
      <Editor
        theme={'vs-dark'}
        defaultLanguage="javascript"
        value={code}
        className={clsx('w-full h-96')}
      ></Editor>
    </div>
  )
}

export default Component
