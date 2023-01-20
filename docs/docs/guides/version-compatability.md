---
title: Version compatability
sidebar_position: 5
---

## Component version compatibility matrix

The Development Framework has many different component, and not all versions of these
are neccesarily compatible with one another.

This table shows which versions of which component _are_ compatible. Expressed in semantic versioning.  
For a description on the _semver_ syntax you could have a look at [this page](https://semver.npmjs.com).

| `COMPONENT` | DMSS    | DM-Job  | @dm-core | react |
|-------------|---------|-------- |----------|-------|
|DM-Job       | >1.0.0  | -       |    -     |    -  |
|@dm-core     |  >1.0.0 | >1.0.4  |    -     | ^17*  |
|@form        |  -      | -       |   >1.0.29|    -  |
|@blueprint   |  -      | -       |   >1.0.29|    -  |

Cells marked with `-` indicate no hard relationship between the components.  
Components prefixed with `@` are NPM pacakges under the `development-framework@` group.
