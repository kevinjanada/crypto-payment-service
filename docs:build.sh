#!/bin/bash

npx lerna run build --scope=docs
cp -r ./packages/docs/build/* docs/
