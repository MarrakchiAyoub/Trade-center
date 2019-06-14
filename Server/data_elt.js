const fs = require('fs')
const path = require('path');

function readcsv(filepath){
    let result = [];
    let document = fs.readFileSync(filepath, 'utf8');
        let lines = document.split('\r\n');
        lines.forEach(line =>{
            result.push(line.split(','));
        });
    return result;
}
 //Extract
let folder = path.join("wits_en_trade_summary_allcountries_allyears",);
let data = Array();
fs.readdir(folder, (err, files)=>{
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    i=0
    //transform
    let counter=0;
    files.forEach(file => {
            file = path.join(folder, file);
            let doc = readcsv(file);
            header = doc[0];
            doc = doc.slice(1,doc.length-1);
            for(i=0; i<doc.length; i++){
                let obj = {};
                obj.Reporter= doc[i][0];
                if(doc[i][1]!='...'){
                    obj.Partner = doc[i][1];
                }
                if(doc[i][2]!='...'){
                    obj.Product_categories = doc[i][2];
                }
                obj.Indicator_Type= doc[i][3];
                obj.Indicator= doc[i][4];
                obj.mesures= [];
                for(j=5; j<doc[i].length; j++){
                    if(doc[i][j]){
                        obj.mesures.push({'year': header[j], 'value': parseFloat(doc[i][j])});
                    }
                }
                data= data.concat([obj]);
            }
            counter+=doc.length;
            fs.writeFileSync('data.json', JSON.stringify(data));
            console.log(data.length+' :: '+counter);
    });
});

