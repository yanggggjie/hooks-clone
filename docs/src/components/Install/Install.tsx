import { clsx } from 'clsx'
import { useClipboard } from '@components/Install/useClipboard.js'
import { useEffect, useRef, useState } from 'react'

type BG = 'gray' | 'black'
interface Props {
  bg: BG
}

function Component({ bg }: Props) {
  const { setToClipboard } = useClipboard()
  const [buttonText, setButtonText] = useState('copy')

  const timeoutRef = useRef(null)

  useEffect(() => {
    if (buttonText === 'copied!') {
      timeoutRef.current = setTimeout(() => {
        setButtonText('copy')
      }, 2000)
    }
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [buttonText])

  async function handleCopy() {
    const { success } = await setToClipboard('npm i @uidotdev/usehooks')
    if (success) setButtonText('copied!')
  }
  return (
    <div
      className={clsx(
        bg === 'black' ? 'bg-iblack' : 'bg-igray',
        'px-4 py-2 rounded-xl',
        'flex flex-row items-center justify-between',
      )}
    >
      <p className={clsx('rounded  py-4 text-xl tracking-widest')}>
        <span className={clsx('text-igreen')}>{'>'}</span> npm i
        @uidotdev/usehooks
      </p>
      <button
        className={clsx(
          'inline-block  border p-1 rounded-md',
          'flex flex-row items-center gap-1',
          bg === 'black'
            ? 'bg-iblack hover:bg-igray'
            : 'bg-igray hover:bg-iblack',
        )}
        onClick={handleCopy}
      >
        <img
          className={clsx('w-4')}
          src="https://usehooks.com/img/icon-copy.svg"
          alt="copy logo"
        />
        {buttonText}
      </button>
    </div>
  )
}

export default Component
