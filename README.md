# Hugo Multilingual Website Boilerplate

## Getting started

### Install Hugo
[Follow the instructions](http://gohugo.io/#action).

If Hugo is already installed, copy the folders in its current location to the hugo folder of this project.

Also, copy the following folders:
- hugo/static/img to src/img
- hugo/static/css to src/styles
- hugo/static/js to src/scripts
- any svg files to src/svg

### Install Node
[Follow the instructions](https://nodejs.org)

If Node is already installed, no further action is required.

### Clone the repository
Copy the stock project to a local folder

```
$ git clone https://github.com/tizzle/hemme-hugo
```

Change directory to the newly created project
```
$ cd hemme-shop
```

### Install npm dependencies
```
$ npm install
```

This runs through all dependencies listed in `package.json` and downloads them to a `node_modules` folder in your project directory.

### Run gulp
Run the `default` gulp task with

```
$ npm run gulp
```

It will do the following:
- The **styles**, **scripts** and **images** tasks get executed first to do the heavy lifting of compressing images and minifying css/js files.
- The **revision** task runs next to fingerprint the optimized assets.
- Then the **hugo:all** task is invoked to generate the static site<br>
hugo will run as if invoked like this:
```
$ hugo --config=./hugo/config.toml -s ./hugo -d ./public --buildDrafts=true --verbose=true --baseUrl="http://localhost:3000/"
```

- The **reference:all** task replaces all asset occurrences with their fingerprinted versions
- Finally, the browser is reloaded so that you can very quickly check the changes you made

---

## Update favicons and social images
check the folder `src/img` and edit the files to your liking. To generate favicons you can use this awesome generator: [http://www.favicon-generator.org/](http://www.favicon-generator.org/)

---

## Publishing the site
There's also a `publish` task you can run:

```
$ npm run gulp publish
```

It will perform all the steps above, but Hugo will be run with as follows:
```
$ hugo --config=./hugo/config.toml -s ./hugo -d ./public"
```
