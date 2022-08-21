#!/bin/bash

PATH_PREFIX="./bundleHelper"

function errorHandler() {
  if [ $? -gt 0 ]
  then
    node ${PATH_PREFIX}/package-switcher.js ${PATH_PREFIX}/package.dev.json package.json
    exit 1
  fi
}

node ${PATH_PREFIX}/package-switcher.js ${PATH_PREFIX}/package.prod.json package.json
yarn rollup -c || errorHandler;
tsc --emitDeclarationOnly || errorHandler;
yarn publish
node ${PATH_PREFIX}/package-switcher.js package.json ${PATH_PREFIX}/package.prod.json
node ${PATH_PREFIX}/package-switcher.js ${PATH_PREFIX}/package.dev.json package.json
