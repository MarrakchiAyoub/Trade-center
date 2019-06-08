import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataFrame } from 'dataframe-js';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
@Injectable()
export class PartnersComponent implements OnInit {
  private df : DataFrame;
  private chart: Chart;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/Partenaires').subscribe(
      (data) => {
        this.df= new DataFrame(data, ['Reporter','Indicator','count']);
        this.chart = new Chart({
          chart: {
              type: 'column',
              zoomType: 'x',
              panKey: "shift",
              panning: true
          },
          title: {
              text: 'Nombre de partenaire par pays'
          },
          legend: {
              layout: 'vertical',
              align: 'left',
              verticalAlign: 'top',
              x: 90,
              floating: true,
              borderWidth: 1,
              backgroundColor: '#FFFFFF'
          },
          xAxis: {
              categories: this.df.distinct('Reporter').toArray()
          },
          yAxis: {
              title: {
                  text: 'Nombre de partenaires'
              }
          },
          tooltip: {
              shared: true,
              valueSuffix: ' Partenaires'
          },
          credits: {
              enabled: false
          },
          plotOptions: {
              column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
          },
          series: [{
            name: "Import Partner",
            type: undefined,
            data: this.df.filter(row=> row.get('Indicator') == 'Trade (US$ Mil)-Top 5 Import Partner').select('count').toArray()
        }, {
            name: 'Export Partner',
            type: undefined,
            data: this.df.filter(row=> row.get('Indicator') == 'Trade (US$ Mil)-Top 5 Export Partner').select('count').toArray()
        }]
      });
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

}
