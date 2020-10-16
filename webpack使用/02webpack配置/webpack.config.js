const  path=require('path')
module.exports={
    entry: './src/main.js',
    output: {
        path:path.resolve(__dirname,'dist2'),
        filename: 'bundle.js'
    }
}


// npm install webpack@3.6.0 --save-dev
