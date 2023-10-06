import demo from './demo.js?raw'
import { IData } from '@components/Data/hooksData/Data.js'

export const data: IData = {
  name: 'useDebounce',
  title: 'Delay the execution of function or state update with useDebounce',
  description: `The useDebounce hook is useful for delaying the execution of functions or state updates until a specified time period has passed without any further changes to the input value. This is especially useful in scenarios such as handling user input or triggering network requests, where it effectively reduces unnecessary computations and ensures that resource-intensive operations are only performed after a pause in the input activity.`,
  parameters: [
    {
      name: 'value',
      type: 'any',
      description:
        'The value that you want to debounce. This can be of any type.',
    },
  ],
  returnValues: [
    {
      name: 'debouncedValue',
      type: 'any',
      description: `The debounced value. After the delay time has passed without the value changing, this will be updated to the latest value.`,
    },
  ],
  demo: demo,
}
