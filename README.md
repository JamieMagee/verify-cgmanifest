# `cgmanifest.json` verification script

This repository contains a small script to help you verify that your `cgmanifest.json` file is valid.

## Setup

1. Copy your `cgmanifest.json` file to the root of this repository
2. `npm install`
3. `npm run verify`
4. Any validation errors will be printed to the console

## FAQ

### Why camel case?

Component Detection will accept object properties in PascalCase, but JSON schema does not have a case-insensitive mode.
Camel case is the most common way to write object properties in JSON.

### Where can I find the JSON schema definition?

https://json.schemastore.org/component-detection-manifest.json
