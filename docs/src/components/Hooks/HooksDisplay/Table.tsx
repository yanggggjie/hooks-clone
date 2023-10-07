import { clsx } from 'clsx'
import { TableData } from '@components/Data/hooksData/Data.js'
interface Props {
  tableData: TableData[]
}

function Component({ tableData }: Props) {
  return (
    <div className={clsx('pr-52')}>
      {tableData && (
        <table className={clsx('table-fixed w-full border-collapse')}>
          <thead>
            <tr className={clsx('bg-ilightgray border-ilightgray border')}>
              <td className={clsx('w-20 p-2')}>Name</td>
              <td className={clsx('w-20 p-2')}>Type</td>
              <td className={clsx('p-2')}>Description</td>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => {
              return (
                <tr
                  className={clsx('border-ilightgray border')}
                  key={data.name}
                >
                  <td className={clsx('break-all p-2')}>{data.name}</td>
                  <td className={clsx('break-all p-2')}>{data.type}</td>
                  <td className={clsx('break-all p-2')}>{data.description}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Component
