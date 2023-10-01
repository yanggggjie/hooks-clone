import { clsx } from 'clsx'
import Test from '@components/Test.js'
interface Props {}
import {Toaster} from '../dist/index.js'

function Component({}: Props) {
  return (
    <div>
      <Toaster></Toaster>
      <Test></Test>
    </div>
  )
}

export default Component
