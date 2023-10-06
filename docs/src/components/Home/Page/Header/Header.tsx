import { clsx } from 'clsx'
import { useClipboard } from '@components/Home/Page/Header/useClipboard.js'
import { useEffect, useRef, useState } from 'react'
interface Props {}

function Component({}: Props) {
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
    <div>
      <div className={clsx('inline', 'absolute left-4')}>
        <img
          className={clsx('w-10')}
          src="https://usehooks.com/img/ui-logo.svg"
          alt={'logo'}
        />
      </div>
      <div className={clsx('py-10 px-20')}>
        <img src="https://usehooks.com/img/logo-useHooks.svg" alt={'image'} />
        <p className={clsx('pt-8 px-20 text-white')}>
          A collection of modern, server-safe React hooks – from the ui.dev team
        </p>
      </div>
      <div className={clsx('px-20')}>
        <div
          className={clsx(
            'bg-[#221f20] px-4',
            'flex flex-row items-center justify-between',
          )}
        >
          <p className={clsx('rounded text-white py-4')}>
            <span className={clsx('text-green-500')}>{'>'}</span> npm i
            @uidotdev/usehooks
          </p>
          <button
            className={clsx(
              'inline-block text-white border p-1 rounded-md',
              'flex flex-row items-center gap-1',
              'hover:bg-[#0f0d0e]',
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
      </div>
    </div>
  )
}

export default Component
