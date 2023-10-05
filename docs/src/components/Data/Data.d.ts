interface TableData {
  name: string
  type: string
  description: string
}

export interface Data {
  name: string
  title: string
  description: string
  parameters?: TableData[]
  returnValues?: TableData[]
  demo: string
}
