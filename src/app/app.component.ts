import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subject } from "rxjs";
import { Graph } from "./models/graph.model";
import { ThemeService } from "./services/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, OnDestroy {
  private uns$: Subject<void> = new Subject();

  @HostBinding('class') className = '';

  title = 'spheres-of-life';

  openInfo$: Subject<void> = new Subject<void>();
  graph$: Subject<Graph> = new Subject<Graph>();

  constructor(
    private themeService: ThemeService
  ) {
  }

  ngOnInit(): void {
    if (this.themeService.isDark) {
      this.className = 'darkMode';
    }
  }

  onThemeChanged(darkMode: boolean): void {
    const darkClassName = 'darkMode';
    this.className = darkMode ? darkClassName : '';
  }

  ngOnDestroy(): void {
    this.uns$.next();
    this.uns$.complete();
  }

}
