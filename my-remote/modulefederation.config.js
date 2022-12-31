const { dependencies } = require("./package.json");

module.exports = {
	name: "remote",
	exposes: {
		"./Button": "./src/Button",
	},
	filename: "remoteEntry.js",
	shared: {},
};
