/**
 * Rollup configs
 */

const aliasConfig = {
	assets: `${__dirname}/assets`,
}

const copyConfig = {
	targets: [
		{ src: 'assets', dest: 'build/' },
	],
	verbose: true
}

/**
 * Currently, the app name are static to `app.js`, but for a
 * random name of app file use: `app-${new Date().getTime()}.js`
 */
const appBundle = 'react-widget.js'

/**
 * Export all Rollup
 * configs as a single object
 */
export { aliasConfig, copyConfig, appBundle }