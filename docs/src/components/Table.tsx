import React, { type MouseEventHandler } from 'react'

type Column = { name: string; accessor: string }

const prepareColumns = (columns: Array<string>): Array<Column> => {
  const prepared: Array<Column> = []
  for (const col of columns) {
    prepared.push({ name: col, accessor: col.replace(/ /g, '') })
  }

  return prepared
}

const ignoredRows = ['_id']

export const Table = (props: {
  columns: Array<string>
  rows: Array<any>
  onRowClicked?: MouseEventHandler
}): JSX.Element => {
  const { columns, rows } = props
  const onRowClicked = props.onRowClicked
    ? props.onRowClicked
    : (event: any) => {
        document.location = event.target.parentElement.accessKey
      }
  const cols = prepareColumns(columns)

  return (
    <>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            {cols.map((col) => (
              <th key={`head-${col.accessor}`}>{col.name}</th>
            ))}
          </tr>
        </thead>
        <tbody
          onClick={onRowClicked}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              onRowClicked(event as any)
            }
          }}
          style={{ cursor: 'pointer' }}
        >
          {rows?.map((row, index) => (
            <tr key={row._id} id={row._id} tabIndex={row.index ?? index}>
              {Object.keys(row)
                .filter((key) => !ignoredRows.includes(key))
                .map((attrKey: string) => (
                  <td key={attrKey}>{row[attrKey]}</td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
