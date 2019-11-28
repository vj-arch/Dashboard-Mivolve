import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IconsProviderModule } from "./icons-provider.module";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { NzButtonModule } from "ng-zorro-antd/button";
import {
  NzGridModule,
  NzSelectModule,
  NzIconModule,
  NzInputModule,
  NzUploadModule,
  NzDatePickerModule,
  NzSliderModule
} from "ng-zorro-antd";

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzInputModule,
    NzDatePickerModule,
    NgZorroAntdModule,
    NzSliderModule,
    NzUploadModule,
    FormsModule,
    HttpClientModule,
    NzGridModule,
    NzButtonModule,
    NzSelectModule,
    NzIconModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
