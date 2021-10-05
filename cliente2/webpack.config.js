module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader?name=img/[name].[ext]?[hash]',
                options: {
                    outputPath: 'images',
                },
            },
        ],
    },
};