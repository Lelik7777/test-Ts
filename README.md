#TEST TS

* create in bash dir testTs
* npm init
* npm i --save-dev nodemon ts-node typescript

nodemon - allow automatically reload app, like a live server

typescript - it is actually typescript

ts-node - it transforms ts into js and allow  working  node with ts
* create index.ts
* create scripts in package.json  
```
  "scripts": {
  "dev": "nodemon",
  "build": "tsc index.ts",
  "start": "ts-node index.ts"
  },
```
build - create index.js
tsc - invoke ts compiler
* create nodemon.json
```
{
  "ignore": ["node_modules"],
  "watch": ["./index.ts"],
  "exec": "npm start",
  "ext": "ts"
}
```
exec - launch index.ts

ext - extensions
