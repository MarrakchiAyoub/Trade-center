var mongoclient = require('mongodb').MongoClient;
var express = require('express');
var url = "mongodb://localhost:27017/";
var app = express();
var cors = require('cors');

function castYear(tab){
    for(i=0; i<tab.length; i++){
        tab[i].year = parseInt(tab[i].year);
    }
    return tab;
}
function yearInArray(year, array){
    for(i=0; i<array.length; i++){
        if(array[i].year==year){
            return i;
        }
    }
    return -1;
}
function orderData(array){
    for(i=array.length-1; i>=0 ;i--){
        for(j=0; j<array.length-1; j++){
            if(array[j+1].year<array[j].year){
                pivot=array[j+1];
                array[j+1]=array[j];
                array[j]=pivot;
            }
        }
    }
    return array;
}
app.use(cors()).get("/Partenaires", function(req,res){
    if (req.method == "GET"){
        mongoclient.connect(url, { useNewUrlParser: true } ,(err, rst)=>{
            var db = rst.db('project');
            var query = [
                {$match:{$and:[{Partner:{$ne:'World'}}, 
                               {$or:[{Indicator:'Trade (US$ Mil)-Top 5 Import Partner'},
                                     {Indicator:'Trade (US$ Mil)-Top 5 Export Partner'}]},
                               {Reporter:{$ne:'World'}}
                               ]}},
                {$group:{_id:{Reporter:'$Reporter', Indicator:'$Indicator'}, count:{$sum:1}}}
            ];
            db.collection('trade').aggregate(query, (err, curr)=>{
                if (err) throw err;
                curr.toArray((err, result)=>{
                                if (err) throw err;
                                let arr=[];
                                result.forEach(r=>{
                                    let obj={};
                                    obj.Reporter=r._id.Reporter;
                                    obj.Indicator=r._id.Indicator;
                                    obj.count=r.count;
                                    arr.push(obj);
                                });
                                result=arr;
                                res.json(result);
                            });
            });
                
        });
    }
}).get("/Export", function(req,res){
    if (req.method == "GET"){
        mongoclient.connect(url, { useNewUrlParser: true } ,(err, rst)=>{
            var db = rst.db('project');
            var query = {
                Reporter:'World',
                Partner:{$ne:'World'},
                Indicator:'Trade (US$ Mil)-Top 5 Export Partner'
            };
            if(req.param('pays')){
                query.Reporter=req.param('pays');
            }
            if(req.param('partenaire')){
                query.Partner=req.param('partenaire');
            }
            db.collection('trade').find(query
            ).toArray((err, result)=>{
                if (err) throw err;
                    obj={Reporter:query.Reporter, Indicator:query.Indicator, mesures:[]};
                    result.forEach((r)=>{
                        r.mesures.forEach((m)=>{
                            let index = yearInArray(m.year, obj.mesures);
                            if(index == -1){
                                obj.mesures.push(m);
                            }
                            else{
                                obj.mesures[index].value =+ m.value
                            }
                        });
                    });
                    result = obj;
                    if(result.mesures){
                        result.mesures = castYear(result.mesures);
                        result.mesures = orderData(result.mesures);
                    }
                res.json(result);
            })
        });
    }
}).get("/Import", function(req,res){
    if (req.method == "GET"){
        mongoclient.connect(url, { useNewUrlParser: true } ,(err, rst)=>{
            var db = rst.db('project');
            var query = {
                Reporter:'World',
                Partner:{$ne:'World'},
                Indicator:'Trade (US$ Mil)-Top 5 Import Partner'
            };
            if(req.param('pays')){
                query.Reporter=req.param('pays');
            }
            if(req.param('partenaire')){
                query.Partner=req.param('partenaire');
            }
            db.collection('trade').find(query
            ).toArray((err, result)=>{
                if (err) throw err;
                    obj={Reporter:query.Reporter, Indicator:query.Indicator, mesures:[]};
                    result.forEach((r)=>{
                        r.mesures.forEach((m)=>{
                            let index = yearInArray(m.year, obj.mesures);
                            if(index == -1){
                                obj.mesures.push(m);
                            }
                            else{
                                obj.mesures[index].value =+ m.value
                            }
                        });
                    });
                    result = obj;
                    if(result.mesures){
                        result.mesures = castYear(result.mesures);
                        result.mesures = orderData(result.mesures);
                    }
                res.json(result);
            })
        });
    }
}).get("/getReporters", function(req,res){
    mongoclient.connect(url, { useNewUrlParser: true } ,(err, rst)=>{
        var db = rst.db('project');
            var query = {Reporter:{$ne:'World'}};
            db.collection('trade').distinct('Reporter', query, (err,result)=>{
                if (err) throw err;
                res.json(result);
            });
    });
}).get("/getPartners", function(req,res){
    mongoclient.connect(url, { useNewUrlParser: true } ,(err, rst)=>{
        var db = rst.db('project');
            var query = {Partner:{$ne:'World'}};
            db.collection('trade').distinct('Partner', query, (err,result)=>{
                if (err) throw err;
                res.json(result);
            });
    });
}).use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
}).listen(8080, ()=>{ console.log('Listening on: http://localhost:8080')});


