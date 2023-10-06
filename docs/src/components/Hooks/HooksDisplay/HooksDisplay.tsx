import { clsx } from 'clsx'
import { IData } from '@components/Data/hooksData/Data.js'
import Header from '@components/Hooks/HooksDisplay/Header.js'
import Description from '@components/Hooks/HooksDisplay/Description.js'
import Table from '@components/Hooks/HooksDisplay/Table.js'
import ExampleCode from '@components/Hooks/HooksDisplay/ExampleCode.js'
import Install from '@components/Install/Install.js'
interface Props {
  data: IData
  Demo: any
}

function Component({ data, Demo }: Props) {
  return (
    <>
      <img
        className={clsx('w-36', 'absolute -top-3 left-8')}
        alt={'image'}
        src="https://usehooks.com/img/logo-useHooks.svg"
      />
      <Header name={data.name} title={data.title}></Header>
      <Install bg={'black'}></Install>
      <Description
        name={data.name}
        description={data.description}
      ></Description>
      <Table tableData={data.parameters}></Table>
      <Table tableData={data.returnValues}></Table>
      <Demo></Demo>
      <ExampleCode code={data.demoCode}></ExampleCode>
    </>
  )
}

export default Component
