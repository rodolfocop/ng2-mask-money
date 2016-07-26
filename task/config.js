const config = {
	appName: 'Sample',
	ts: {
		source: "src",
		get files() {
			return [`${this.source}/**/*.ts`, "typings/**/*.d.ts"];
		},
		dest: "build"
	},
	assets: {
		source: "sample/assets/**/*",
		get dest() {
			return config.samples.dest;
		}
	},
	package: {
		get source() {
			return [
				`${config.ts.dest}/**/*`,
				'package.json',
				'typings.json',
				'tsconfig.json',
				['readme.publish.md', 'readme.md']
			];
		},
		get tsSource() {
			return [
				`${config.ts.source}/**/*.ts`,
			];
		},
		dest: "package",
		get tsDest() {
			return this.dest + "/source";
		}
	},
	dist: {
		index: './sample/assets/index.html',
		path: './dist',
		output: 'app',
		src: './server',
		clean: ['./dist/', './server/'],
		systemjs: {
			config: require("../systemjs-dist.js"),
			in: './dist/main',
			out: './dist/app.js'
		},
		bundle: {
			output: "bundle",
			js: [
				'node_modules/es6-shim/es6-shim.min.js',
				'node_modules/systemjs/dist/system-polyfills.js',
				'node_modules/systemjs/dist/system.src.js',
				'node_modules/zone.js/dist/zone.js',
				'node_modules/reflect-metadata/Reflect.js',
				'node_modules/reflect-metadata/Reflect.js',
				'node_modules/rxjs/bundles/Rx.min.js'
			],
			css: [
				'node_modules/bootstrap/dist/css/bootstrap.css'
			]
		},
	},
	samples: {
		base: "sample",
		source(folder) {
			return [`${this.base}/${folder}/**/*.ts`, "typings/**/*.d.ts"]
		},
		dest: "server",
		tsConfig: {
			rootDir: "/sample/src",
			typescript: require('typescript'),
			"target": "es5",
			"module": "commonjs",
			"moduleResolution": "node",
			"emitDecoratorMetadata": true,
			"experimentalDecorators": true,
			"noImplicitAny": false,
			"declaration": true
		}
	}
};

module.exports = config;