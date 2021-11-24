import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers: [
  ],
  exports: [
    MatStepperModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSlideToggleModule
  ],
})
export class MaterialModule { }
