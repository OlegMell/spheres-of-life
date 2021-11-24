import { Injectable } from "@angular/core";
import { fromEvent, Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDark: boolean = false;
  theme: Observable<boolean> = new Observable<boolean>();

  constructor() {

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.isDark = true;
    }

    this.observeBrowserTheme();
  }

  private observeBrowserTheme(): void {
    this.theme = fromEvent(window.matchMedia('(prefers-color-scheme: dark)'), 'change')
      .pipe(
        map((e: Event) => {
          // @ts-ignore
          return e.matches;
        })
      );
  }
}
