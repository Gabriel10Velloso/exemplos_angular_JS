import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarkdownParserComponent } from './markdown-parser/markdown-parser.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkdownParserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
