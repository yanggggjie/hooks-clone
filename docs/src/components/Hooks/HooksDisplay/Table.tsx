import { clsx } from 'clsx'
import { IData, TableData } from '@components/Data/hooksData/Data.js'
interface Props {
  tableData: TableData[]
}

function Component({ tableData }: Props) {
  return (
    <div>
      {tableData && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((value) => {
              return (
                <tr>
                  <td className={clsx('w-36')}>{value.name}</td>
                  <td>{value.type}</td>
                  <td className={clsx('w-72')}>{value.description}</td>
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
