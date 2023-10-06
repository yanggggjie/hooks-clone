export interface TableData {
  name: string
  type: string
  description: string
}

export interface IData {
  name: string
  title: string
  description: string
  parameters?: TableData[]
  returnValues?: TableData[]
  demoCode: string
}
