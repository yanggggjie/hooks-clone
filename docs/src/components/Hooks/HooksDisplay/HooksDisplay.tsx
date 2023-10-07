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

function SectionTitle({ str }: { str: string }) {
  return (
    <h1 className={clsx('py-3 font-bold text-xl uppercase tracking-widest')}>
      {str}
    </h1>
  )
}

function Component({ data, Demo }: Props) {
  return (
    <div className={clsx('space-y-8')}>
      <img
        className={clsx('w-36', 'absolute -top-3 left-8')}
        alt={'image'}
        src="https://usehooks.com/img/logo-useHooks.svg"
      />
      <Header name={data.name} title={data.title}></Header>

      <div>
        <SectionTitle str={'install :'} />
        <Install bg={'black'}></Install>
      </div>

      <div>
        <SectionTitle str={'description :'} />
        <Description
          name={data.name}
          description={data.description}
        ></Description>
      </div>

      <div>
        <SectionTitle str={'parameters'} />
        <Table tableData={data.parameters}></Table>
      </div>

      <div>
        <SectionTitle str={'return values'} />
        <Table tableData={data.returnValues}></Table>
      </div>

      <div>
        <SectionTitle str={'demo:'} />
        <Demo></Demo>
      </div>

      <div>
        <SectionTitle str={'example:'} />
        <ExampleCode code={data.demoCode}></ExampleCode>
      </div>
    </div>
  )
}

export default Component
