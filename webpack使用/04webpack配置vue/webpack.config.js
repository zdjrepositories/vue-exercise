const  path=require('path')
module.exports={
    entry: './src/main.js',
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.jpg$/,
                use: [
                    {
                        loader:'url-loader',
                        options: {
                            limit: 156234234
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'less-loader'}
                ]
            }
        ]
    }
}


// npm install webpack@3.6.0 --save-dev
// npm install --save-dev css-loader
// npm install style-loader --save-dev
// npm install less-loader --save-dev