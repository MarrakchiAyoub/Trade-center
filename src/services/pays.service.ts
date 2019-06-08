import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PaysService {
    private reporters = null;
    private partners = null;
    constructor(private http: HttpClient){
    }
    public initComponent(){
        this.http.get('http://localhost:8080/getReporters').subscribe(
                (data)=>{
                    this.reporters=data;
                },
                (err)=>{
                    console.log(err);
                }
            );
            this.http.get('http://localhost:8080/getPartners').subscribe(
                (data)=>{
                    this.partners=data;
                },
                (err)=>{
                    console.log(err);
                }
            );
    }
    public getPartners(){
        return this.partners;
        }
    public getReporters(){
        return this.reporters; 
    }
}