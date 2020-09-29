import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import {
  TreeGridModule,
  EditService,
  ToolbarService,
  CommandColumnService,PageService
} from "@syncfusion/ej2-angular-treegrid";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TreeGridModule],
  providers: [EditService, ToolbarService,PageService, CommandColumnService],
  bootstrap: [AppComponent]
})
export class AppModule {}
