const path = require("path");
module.exports = ({ config }) => {
    config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve("./src"),
    ];
    config.module.rules.push(
        {
            test: /\.(ts|tsx)$/,
            loader: require.resolve("babel-loader"),
            options: {
                presets: [["react-app", { flow: false, typescript: true }]],
            },
        },
        {
            test: /\.story\.(ts|tsx)?$/,
            loader: require.resolve("@storybook/source-loader"),
            options: { parser: "typescript" },
            enforce: "pre",
        }
    );
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
};
