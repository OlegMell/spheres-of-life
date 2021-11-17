import { Component } from '@angular/core';
import { Subject } from "rxjs";
import { Graph } from "./models/graph.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spheres-of-life';

  openInfo$: Subject<void> = new Subject<void>();
  graph$: Subject<Graph> = new Subject<Graph>();

}
