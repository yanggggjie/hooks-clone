import { clsx } from 'clsx'
import { useClipboard } from '@components/Install/useClipboard.js'
import { useEffect, useRef, useState } from 'react'
import Install from '@components/Install/Install.js'
interface Props {}

function Component({}: Props) {
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
        <p className={clsx('pt-8 px-20 ')}>
          A collection of modern, server-safe React hooks – from the ui.dev team
        </p>
      </div>
      <div className={clsx('px-20')}>
        <Install bg={'gray'}></Install>
      </div>
    </div>
  )
}

export default Component
