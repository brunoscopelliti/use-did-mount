# @bscop/use-did-mount

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/brunoscopelliti/use-did-mount/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@bscop/use-did-mount.svg?style=flat)](https://www.npmjs.com/package/@bscop/use-did-mount)
[![CircleCI Status](https://circleci.com/gh/brunoscopelliti/use-did-mount.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/brunoscopelliti/use-did-mount)
[![Coverage](https://img.shields.io/codecov/c/github/brunoscopelliti/use-did-mount)](https://app.codecov.io/gh/brunoscopelliti/use-did-mount/)


React hook to handle componentDidMount, and componentWillUnmount lifecycle events.

## Install

```
npm i @bscop/use-did-mount
```

## Usage

```js
import useDidMount from "@bscop/use-did-mount";

useDidMount(
  function onMount () {
    console.log("Yay, component is mounted");

    return function onUnmount () {
      console.log("Yay, component is unmounted");
    }
  },
);
```

## Contribute

Read the [guidelines](./CONTRIBUTING.md).

### Run tests

```
npm test
```

### Coverage

Coverage reports are hosted on [codecov](https://codecov.io/).

```
npm run badge:coverage -- --token=<guid>
```

---

Bruno Scopelliti\
www.brunoscopelliti.com
