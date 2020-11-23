import * as babel from '@babel/core';
const fs = require('fs');


export default class ASTNodeGenerator {

    //generate the ast node for each file in the directory
    generateASTNodes(folderPath:string, map:any):any{
        let nodes :Array<any> = []
        let counter = 0
        fs.readdirSync(folderPath).forEach(file=>{
            // let code = fs.readFileSync()
            let filePath = folderPath+'/'+file
            map[counter] = filePath
            nodes.push(babel.transformFileSync(filePath, {ast:true}).ast)
            counter = counter+1
        })
        return nodes;
    }
}