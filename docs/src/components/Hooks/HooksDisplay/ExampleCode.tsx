import { clsx } from 'clsx'
interface Props {
  code: string
}

function Component({ code }: Props) {
  return <div>code{code}</div>
}

export default Component
