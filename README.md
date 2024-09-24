This repository is a showcase of the simplicity of Express as a library for back-end applications.

Each folder is a different project, with it's own dependencies. Before running then, you must `cd` into the directory and install the dependencies.

```
cd simple
npm install
```

That will create a folder called `node_modules/` with all of the dependencies. This folder can be safely removed, but the dependencies would have to be reinstalled if you want to run the project again.

To run the project, look at the `package.json` file, inside you'll find different scripts defined.

```
npm run <script>
```

So for example, the the Simple project's `package.json` file contains the following:

```json
/* ... */
"main": "index.js",
"scripts": {
	"start": "node ./app/index.js",
	"test": "echo \"Error: no test specified\" && exit 1"
},
"author": "",
/* ... */
```

As you can see, there are two scripts defined: `start` and `test`; so to run the program you would do:

```
npm run start
```
