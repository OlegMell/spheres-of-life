import { AfterViewInit, Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { Graph } from "../../models/graph.model";

@Component({
  selector: 'app-spheres-form',
  templateUrl: './spheres-form.component.html',
  styleUrls: [ './spheres-form.component.scss' ]
})
export class SpheresFormComponent implements OnInit, OnDestroy {
  spheresForm!: FormGroup;

  @Input() graph$!: Subject<Graph>;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.spheresForm = this.fb.group({
      spirituality: this.fb.control('', [ Validators.min(0), Validators.max(10) ]),
      job: this.fb.control('', [ Validators.min(0), Validators.max(10) ]),
      family: this.fb.control('', [ Validators.min(0), Validators.max(10) ]),
      health: this.fb.control('', [ Validators.min(0), Validators.max(10) ]),
      recreation: this.fb.control('', [ Validators.min(0), Validators.max(10) ]),
      friends: this.fb.control('', [ Validators.min(0), Validators.max(10) ]),
      hobby: this.fb.control('', [ Validators.min(0), Validators.max(10) ]),
      selfDev: this.fb.control('', [ Validators.min(0), Validators.max(10) ]),
    });
  }

  creatGraph(): void {
    if (this.graph$) {
      this.graph$.next(this.spheresForm.getRawValue());
    }
  }

  ngOnDestroy() {
  }
}
