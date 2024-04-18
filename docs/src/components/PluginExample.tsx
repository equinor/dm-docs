import React, { Suspense } from 'react'
import DMTPlugins from '@development-framework/dm-core-plugins'
import {
  ApplicationContext,
  ErrorGroup,
  IUIPlugin,
} from '@development-framework/dm-core'
import styled from 'styled-components'

type TPluginExample = {
  exampleConfig: {
    scope?: string
    entity: any
    recipe: any
    blueprint: any
  }
}

const DemoWrapper = styled.div`
  margin-bottom: 2rem;
  background: white;
  padding: 0.5rem;
  color: black;
  border: 2px dotted rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  table {
    margin-bottom: 0;
    display: table;
    th {
      font-weight: 700;
    }
    thead {
      background-color: inherit;
    }
    tr {
      background-color: inherit;
    }
  }
`

export const BoxPlugin = ({ config }) => (
  <div
    style={{
      background: 'rgb(222 237 238)',
      width: '100%',
      height: '80px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {config?.content}
  </div>
)

export const demoPlugins = {
  'custom-box-plugin': {
    component: BoxPlugin,
  },
}

export const PluginPreview = ({ exampleConfig }: TPluginExample) => {
  const { entity, blueprint, recipe, scope } = exampleConfig

  const dmssAPI = {
    documentGet: async () => {
      return { data: scope ? entity[scope] : entity }
    },
    blueprintGet: async () => ({ data: { blueprint } }),
    attributeGet: async () => ({
      data: {
        attribute: {
          contained: true,
          ensureUID: true,
          attributeType: 'doc_attributeType',
        },
        address: 'doc_address',
      },
    }),
    instantiateEntity: async () => ({ data: entity[scope]?.[0] }),
    documentAdd: async () => ({}),
    documentUpdate: async () => ({}),
  }

  if (!recipe?.plugin) {
    return <span>No plugin defined in recipe</span>
  }

  const plugins = { ...DMTPlugins, ...demoPlugins }

  const UIPlugin = DMTPlugins[recipe?.plugin]?.component

  function getUiPlugin(
    pluginName: string
  ): (props: IUIPlugin) => React.ReactElement {
    console.log(pluginName)
    const plugin = plugins[pluginName]?.component
    if (!plugin)
      return () => (
        <ErrorGroup>Did not find the plugin: {pluginName}</ErrorGroup>
      )
    return plugin
  }

  return (
    /* @ts-expect-error*/
    <ApplicationContext.Provider value={{ dmssAPI, getUiPlugin }}>
      <UIPlugin type="" idReference="example" config={recipe?.config} />
    </ApplicationContext.Provider>
  )
}

export const PluginExample = (props: TPluginExample) => {
  return (
    <Suspense fallback={<span />}>
      <DemoWrapper className="dm-preflight">
        <PluginPreview {...props} />
      </DemoWrapper>
    </Suspense>
  )
}
