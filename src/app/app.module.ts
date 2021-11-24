import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from "ng2-charts";
import { HeaderComponent } from "./components/header/header.component";
import { MaterialModule } from "./material.module";
import { EntryCardComponent } from "./components/entry-card/entry-card.component";
import { SpheresFormComponent } from "./components/spheres-form/spheres-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { GraphComponent } from "./components/graph/graph.component";
import { InfoBoxComponent } from "./components/info-box/info-box.component";
import { SpheresDescrComponent } from "./components/spheres-descr/spheres-descr.component";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MATERIAL_SANITY_CHECKS } from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntryCardComponent,
    SpheresFormComponent,
    GraphComponent,
    InfoBoxComponent,
    SpheresDescrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatInputModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
