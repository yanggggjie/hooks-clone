import { clsx } from 'clsx'
interface Props {
  name: string
  title: string
}

function Component({ name, title }: Props) {
  return (
    <div className={clsx('py-2', 'space-y-2')}>
      <div className={clsx('text-iblue text-5xl font-bold')}>{name}</div>
      <div className={clsx('w-[500px]', 'text-xl')}>{title}</div>
    </div>
  )
}

export default Component
