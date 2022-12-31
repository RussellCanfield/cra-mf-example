const { dependencies } = require("./package.json");

module.exports = {
	name: "host",
	filename: "remoteEntry.js",
	remotes: {
		remote: "remote@http://localhost:3002/remoteEntry.js",
	},
	shared: {},
};
