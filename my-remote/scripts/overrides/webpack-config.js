const { FederatedTypesPlugin } = require("@module-federation/typescript");
const federationConfig = require("../../modulefederation.config.js");
const webpackConfigPath = "react-scripts/config/webpack.config";
const webpackConfig = require(webpackConfigPath);

const override = (config) => {
	config.plugins.push(
		new FederatedTypesPlugin({
			federationConfig,
			typescriptFolderName: "../public/@mf-types",
		})
	);

	config.output.publicPath = "auto";

	return config;
};

require.cache[require.resolve(webpackConfigPath)].exports = (env) =>
	override(webpackConfig(env));

module.exports = require(webpackConfigPath);
