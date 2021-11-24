import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import { FormControl } from "@angular/forms";
import { takeUntil } from "rxjs/operators";
import { ThemeService } from "../../services/theme.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  private uns$: Subject<void> = new Subject<void>();

  toggleControl = new FormControl(false);

  @Input() openInfo$!: Subject<void>;

  @Output() changeThemeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private themeService: ThemeService
  ) {
  }

  ngOnInit(): void {
    this.toggleControl.setValue(this.themeService.isDark);
    this.observeToggleTheme();
    this.observeBrowserTheme();
  }

  private observeToggleTheme(): void {
    this.toggleControl
      .valueChanges
      .pipe(takeUntil(this.uns$))
      .subscribe((darkMode) => {
        this.changeThemeEvent.emit(darkMode);
      });
  }

  private observeBrowserTheme(): void {
    this.themeService.theme
      .pipe(takeUntil(this.uns$))
      .subscribe(isDark => {
        this.toggleControl.setValue(isDark);
      });
  }

  ngOnDestroy(): void {
    this.uns$.next();
    this.uns$.complete();
  }


}
