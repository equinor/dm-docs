module.exports = (api) => {
	const presets = [require.resolve("@docusaurus/core/lib/babel/preset")];
	const plugins = [];
	api.cache(false);
	return {
		plugins,
		presets,
	};
};
