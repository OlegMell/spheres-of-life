import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from "ng2-charts";
import { ChartOptions, ChartType } from "chart.js";
import { Subject } from "rxjs";
import { Graph } from "../../models/graph.model";
import { distinctUntilChanged, takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: [ './graph.component.scss' ]
})
export class GraphComponent implements OnInit, OnDestroy {
  private uns$: Subject<void> = new Subject();

  @Input() graph$!: Subject<Graph>;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        display: false
      },
      outlabels: {
        display: false
      }
    },
    legend: { position: 'top', display: true, }
  };
  public pieChartType: ChartType = 'pie';
  public pieChartLabels: Label[] = [ 'Духовность', 'Работа', 'Семья', 'Здоровье', 'Отдых', 'Друзья', 'Хобби', 'Саморазвитие' ];
  public pieChartData!: SingleDataSet;
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.onResize();
  }

  ngOnInit(): void {
    this.observeGraphData();
  }

  private observeGraphData(): void {
    if (this.graph$) {
      this.graph$
        .pipe(
          takeUntil(this.uns$),
          distinctUntilChanged()
        ).subscribe((graphData: Graph) => {
        this.pieChartData = [];
        this.pieChartData = Object.values(graphData);
      });
    }
  }

  onResize() {
    if (window.innerWidth < 1001) {
      this.pieChartOptions = {
        responsive: true,
        plugins: {
          datalabels: {
            display: false
          },
          outlabels: {
            display: false
          }
        },
        legend: { display: false }
      }
    } else if (window.innerWidth > 1001) {
      this.pieChartOptions = {
        responsive: true,
        plugins: {
          datalabels: {
            display: false
          },
          outlabels: {
            display: false
          }
        },
        legend: { position: 'top', display: true }
      }
    }
  }

  ngOnDestroy(): void {
    this.uns$.next();
    this.uns$.complete();
  }
}
