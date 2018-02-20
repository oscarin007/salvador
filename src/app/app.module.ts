import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VideoComponent } from './programa/video.component';
import { FooterComponent } from './programa/footer.component';


@NgModule({
  declarations: [
    AppComponent, VideoComponent, FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
