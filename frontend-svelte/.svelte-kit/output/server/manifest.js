export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start._VIR8pmj.js",app:"_app/immutable/entry/app.FCd6VAyw.js",imports:["_app/immutable/entry/start._VIR8pmj.js","_app/immutable/chunks/DclRlc1y.js","_app/immutable/chunks/vJz4ddcz.js","_app/immutable/entry/app.FCd6VAyw.js","_app/immutable/chunks/vJz4ddcz.js","_app/immutable/chunks/BcWSPPfT.js","_app/immutable/chunks/Dt66tBJQ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/clients",
				pattern: /^\/clients\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
