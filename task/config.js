const config = {
	ts: {
		source: "src",
		get files(){
			return [`${this.source}/**/*.ts`,"typings/**/*.d.ts"];
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
		get source(){ 
			return [
				`${config.ts.dest}/**/*`,
				'package.json',
				'typings.json',
				'tsconfig.json',
				['readme.publish.md', 'readme.md']
			];
		},
		get tsSource(){
			return [
				`${config.ts.source}/**/*.ts`,
			];
		},
		dest: "package",
		get tsDest(){
			return this.dest + "/source";
		}
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