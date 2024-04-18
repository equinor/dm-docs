import {
  Autocomplete,
  AutocompleteChanges,
  EdsProvider,
  Radio,
  Table,
} from '@equinor/eds-core-react'
import React, { useState } from 'react'
import CodeBlock from '@theme/CodeBlock'
import styled from 'styled-components'
import { TBlueprint } from '@development-framework/dm-core'
import { GrFormCheckmark } from 'react-icons/gr'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const ControlsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  justify-content: space-between;
`

export const BlueprintPreview = (props: { blueprints: TBlueprint[] }) => {
  const { blueprints } = props
  const [previewType, setPreviewType] = useState<'table' | 'json'>('table')
  const [selectedItems, setSelectedItems] = useState<string[]>([
    blueprints?.[0]?.name,
  ])
  const blueprintNames: string[] = blueprints?.map(
    (blueprint) => blueprint.name
  )
  const selectedBlueprint: TBlueprint = blueprints?.find(
    (blueprint) => blueprint.name === selectedItems[0]
  )

  const onChange = (changes: AutocompleteChanges<string>) => {
    setSelectedItems(changes.selectedItems)
  }

  const getShortenedAttributeType = (attributeType: string) => {
    if (!attributeType.includes('/')) return attributeType
    return `./${attributeType.split('/').pop()}`
  }

  return (
    <Wrapper>
      <ControlsWrapper>
        <Autocomplete
          label="Select blueprint"
          selectedOptions={selectedItems}
          onOptionsChange={onChange}
          options={blueprintNames}
          style={{ minWidth: 300 }}
        />
        <EdsProvider density="compact">
          <ControlsWrapper role="radiogroup">
            <Radio
              label="Table view"
              value="table"
              checked={previewType === 'table'}
              onClick={() => setPreviewType('table')}
            />
            <Radio
              label="JSON view"
              value="json"
              checked={previewType === 'json'}
              onClick={() => setPreviewType('json')}
            />
          </ControlsWrapper>
        </EdsProvider>
      </ControlsWrapper>
      {previewType === 'table' && (
        <Table style={{ width: '100%' }}>
          <Table.Head>
            <Table.Row>
              <Table.Cell>Attribute name</Table.Cell>
              <Table.Cell>Attribute type</Table.Cell>
              <Table.Cell>Dimensions</Table.Cell>
              <Table.Cell>Description</Table.Cell>
              <Table.Cell>Required</Table.Cell>
              <Table.Cell>Default value</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {selectedBlueprint?.attributes?.map((attribute) => (
              <Table.Row key={attribute.name}>
                <Table.Cell>{attribute.name}</Table.Cell>
                <Table.Cell>
                  {getShortenedAttributeType(attribute.attributeType)}
                </Table.Cell>
                <Table.Cell style={{ textAlign: 'center' }}>
                  {attribute.dimensions}
                </Table.Cell>
                <Table.Cell>{attribute.description || '-'}</Table.Cell>
                <Table.Cell style={{ textAlign: 'center' }}>
                  {attribute.optional !== true ? (
                    <GrFormCheckmark size={24} color="#007079" />
                  ) : null}
                </Table.Cell>
                <Table.Cell>
                  {attribute.default === undefined ||
                  attribute.default === '' ? (
                    '-'
                  ) : typeof attribute.default === 'object' ? (
                    <pre
                      style={{
                        margin: 0,
                        padding: '0.25rem',
                        fontSize: '0.675rem',
                        maxWidth: '200px',
                        background: 'none',
                        wordBreak: 'break-word',
                      }}
                    >
                      {JSON.stringify(attribute.default, null, 2)}
                    </pre>
                  ) : (
                    `${attribute.default}`
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
      {previewType === 'json' && (
        <CodeBlock language="json" title={selectedItems[0]} showLineNumbers>
          {JSON.stringify(selectedBlueprint, null, 2)}
        </CodeBlock>
      )}
    </Wrapper>
  )
}
