---
title: Plugins
sidebar_position: 3
---

You can extend the functionality of the system or your apps by using plugins.

As of now, there are three types of plugins:
- UI plugins
- Repository plugins
- Job handler plugins

## UI Plugins

UI plugins are ReactJS components that implement the IUIPlugin interface, and are used to render entities in a specific way.

You can render an entity, with plugins, by using `<EntityView idReference={entityId} type={typeOfEntity}/>`. `EntityView` is a component exported by the `@development-framwork/dm-core` NPM package. 

If the plugin is correctly registered, this component will then automatically select the correct plugin, and render the entity using that plugin.

Read more about writing and registering a UIPlugin [here](/docs/guides/plugin-development).

## Repository Plugins

Repository plugins are Python modules, used to extends DMSS with the ability to communicate with a specific storage technology.
The `type`-field of a DataSource repository definition (see [datasources](/docs/concepts/data-sources)) is used to determine which RepositoryPlugin should be used when communicating with the storage backend.

For details on implementing a RepositoryPlugin, see [here](https://github.com/equinor/data-modelling-storage-service?tab=readme-ov-file#repository-plugins)

## Job Handler Plugins

Job handler plugins are Python modules added to DM-Job API. They are used to schedule jobs on some specific infrastructure, or can be a job executor itself.

For details on implementing a JobHandlerPlugin, see [here](https://github.com/equinor/dm-job?tab=readme-ov-file#job-handler-plugins)