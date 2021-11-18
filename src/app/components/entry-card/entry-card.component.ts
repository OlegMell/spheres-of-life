import { Component, HostBinding, HostListener, Input, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: [ './entry-card.component.scss' ]
})
export class EntryCardComponent implements OnInit, OnDestroy {
  private uns$: Subject<void> = new Subject<void>();

  isClosed: boolean = false;

  @Input() openInfo$!: Subject<void>;

  ngOnInit(): void {
    this.observeOpenState();
  }

  observeOpenState(): void {
    this.openInfo$
      .pipe(takeUntil(this.uns$))
      .subscribe(() => this.isClosed = false);
  }

  @HostListener('click', [ '$event.target' ])
  onClick(e: Event) {
    this.isClosed = true;
  }

  ngOnDestroy(): void {
    this.uns$.next();
    this.uns$.complete();
  }

}
