#!/bin/sh

set -e

rm -rf dist

babel src \
  --presets babel-preset-es2015,stage-2 \
  --plugins syntax-async-functions,transform-runtime \
  --out-dir dist

cp package.json dist/