import React from 'react'
import { TComponentDocPartProps } from '../types'
import { extractParameterInfo, getParameters } from '../utils'
import { Table } from './Table'

const columns: Array<string> = ['Name', 'Type', 'Optional', 'Description']

type TTableRow = {
  _id?: string
  name: string
  type: string
  optional: string
  description: string
}

export const Parameters = (props: TComponentDocPartProps) => {
  const { typeDoc, typeDocs, title } = props
  const header: JSX.Element = <h2>{title ?? 'Parameters'}</h2>
  const rows: Array<TTableRow> = []

  const parameters = getParameters(typeDoc)

  parameters.forEach((parameter: any, index: number) => {
    if (parameter.type.type === 'reference') {
      try {
        const reference = typeDocs.children.find(
          (child: any) => child.id === parameter.type.id
        )
        const referenceChildren = Object.prototype.hasOwnProperty.call(
          reference,
          'children'
        )
          ? reference.children
          : reference.type.declaration.children ?? []
        referenceChildren.forEach((child: any, _index: number) => {
          const row: TTableRow = {
            _id: `${_index}`,
            name: `${child.name}`,
            ...extractParameterInfo(child),
          }
          rows.push(row)
        })
      } catch (refErr) {
        console.error('Something went wrong while fetching the reference')
        console.error(refErr)
      }
    } else {
      const row: TTableRow = {
        _id: `${index}`,
        name: parameter.name,
        ...extractParameterInfo(parameter),
      }
      rows.push(row)
    }
  })

  return (
    <>
      {header}
      <Table columns={columns} rows={rows} onRowClicked={() => {}} />
    </>
  )
}
