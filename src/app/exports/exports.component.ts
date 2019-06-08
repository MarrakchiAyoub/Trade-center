import { Component, OnInit } from '@angular/core';
import { PaysService } from 'src/services/pays.service';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataFrame } from 'dataframe-js'
import { query } from '@angular/core/src/render3/query';
declare var $ : any;

@Component({
  selector: 'app-exports',
  templateUrl: './exports.component.html',
  styleUrls: ['./exports.component.css']
})
export class ExportsComponent implements OnInit {

  private pays;
  private partnaires;
  private df : DataFrame;
  private chart : Chart;
  private query : HttpParams = new HttpParams();

  constructor(private paysService: PaysService, private http : HttpClient) { }

  ngOnInit() {
    this.pays = this.paysService.getReporters();
    this.partnaires = this.paysService.getPartners();
    $('select').selectpicker('refresh');
    this.loadChart();
  }
  private loadChart(){
    this.http.get('http://localhost:8080/export',{params: this.query}).subscribe(
      (data: any)=>{
        this.df= new DataFrame(data.mesures, ['year','value']);
        console.log(data);

        this.chart = new Chart({
          chart: {
              type: 'line'
          },
          title: {
              text: 'Sommes des gains d\'exportation en millions $'
          },
          xAxis: {
              categories: this.df.select('year').toArray()
          },
          yAxis: {
              title: {
                  text: 'Mil $'
              }
          },
          tooltip: {
              enabled: true,
              valueSuffix: ' M$'
          },
          plotOptions: {
              line: {
                  dataLabels: {
                      enabled: false
                  },
                  enableMouseTracking: true
              }
          },
          series: [{
              name: 'Somme',
              data: this.df.select('value').toArray()
          }]
      });
      },
      (err)=>{

      }
    );
  }
  private onPays = ()=>{
    this.query = this.query.set('pays', $('#pays').val());
    this.loadChart();
  }
  private onPart(){
    this.query = this.query.set('partenaire', $('#Partenaire').val());
    this.loadChart();
  }
}
