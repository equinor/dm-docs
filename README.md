# Data Modelling Docs
[![License][license-badge]][license]
[![build docs](https://github.com/equinor/dm-docs/actions/workflows/docs.yml/badge.svg?branch=main)](https://github.com/equinor/dm-docs/actions/workflows/docs.yml)

## Documentation

You can find the Data Modelling documentation at [https://equinor.github.io/dm-docs](https://equinor.github.io/dm-docs).

## Developing
 
See [docs/README.md](./docs/README.md) for instructions on extending the documentation.


### Pre-commit

We use pre-commit to do a minimum of checks on the developer pc before committing. The same checks, plus a few more are
also run in the build pipeline. You should catch any errors early to save time.

Setup;

```shell
pip install pre-commit  # Should be installed in global python environment
pre-commit install  # Pre-commit will now run on every commit (can be skipped with 'git commit --no-verify')

# To run manually on all files
pre-commit run -a 
```

## Contributing 

Read our [contributors' guide](https://equinor.github.io/dm-docs/contributing) to get started.

[license-badge]: https://img.shields.io/badge/License-MIT-yellow.svg
[license]: https://github.com/equinor/dm-docs/blob/master/LICENSE
[releases]: https://github.com/equinor/dm-docs/releases