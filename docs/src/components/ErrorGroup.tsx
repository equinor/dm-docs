import Admonition from '@theme/Admonition'
import React from 'react'

export const ErrorGroup = (props: { name: string }) => (
  <>
    <Admonition type="danger">
      Unable to extract component '{props.name}'
    </Admonition>
  </>
)
