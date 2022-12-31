const { FederatedTypesPlugin } = require("@module-federation/typescript");
const webpackConfigPath = "react-scripts/config/webpack.config";
const webpackConfig = require(webpackConfigPath);
const federationConfig = require("../../modulefederation.config.js");

const override = (config) => {
	config.infrastructureLogging = {
		level: "log",
	};
	config.plugins.push(
		new FederatedTypesPlugin({
			federationConfig,
		})
	);

	config.output.publicPath = "auto";

	return config;
};

require.cache[require.resolve(webpackConfigPath)].exports = (env) =>
	override(webpackConfig(env));

module.exports = require(webpackConfigPath);
