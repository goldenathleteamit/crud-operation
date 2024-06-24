//crud operation

const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'crud');
const filepath=`${dirPath}/mango.txt`;

fs.writeFileSync(filepath,'this is a apple'); //creation
fs.readFile(filepath,'utf8',(err,item)=>{     //read
    console.log(item);
})
fs.appendFile(filepath,'we will know something',(err)=>{
    if(!err) console.log("file is updated");
})                                            //update
// fs.unlinkSync(`${dirPath}/apple.txt`);        //delete
