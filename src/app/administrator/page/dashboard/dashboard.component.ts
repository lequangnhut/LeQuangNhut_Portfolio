import { AfterViewInit, Component } from '@angular/core';
import * as echarts from 'echarts';

declare var ApexCharts: any;

@Component({
  selector: 'ngx-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.initializeChart();
    this.initializeBudgetChart();
    this.initializeTrafficChart();
  }

  initializeChart() {
    new ApexCharts(document.querySelector("#reportsChart"), {
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 82, 56],
        },
        {
          name: "Revenue",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
        {
          name: "Customers",
          data: [15, 11, 32, 18, 9, 24, 11],
        },
      ],
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      colors: ["#4154f1", "#2eca6a", "#ff771d"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    }).render();
  }

  initializeBudgetChart() {
    const budgetChartElement = document.querySelector("#budgetChart") as HTMLElement;
    if (budgetChartElement) {
      const budgetChart = echarts.init(budgetChartElement);
      budgetChart.setOption({
        legend: {
          data: ["Allocated Budget", "Actual Spending"],
        },
        radar: {
          indicator: [
            { name: "Sales", max: 6500 },
            { name: "Administration", max: 16000 },
            { name: "Information Technology", max: 30000 },
            { name: "Customer Support", max: 38000 },
            { name: "Development", max: 52000 },
            { name: "Marketing", max: 25000 },
          ],
        },
        series: [
          {
            name: "Budget vs spending",
            type: "radar",
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: "Allocated Budget",
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: "Actual Spending",
              },
            ],
          },
        ],
      });
    }
  }

  initializeTrafficChart() {
    const trafficChartElement = document.querySelector(
      '#trafficChart'
    ) as HTMLElement;
    if (trafficChartElement) {
      const trafficChart = echarts.init(trafficChartElement);
      trafficChart.setOption({
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '5%',
          left: 'center',
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '18',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' },
            ],
          },
        ],
      });
    }
  }
}
