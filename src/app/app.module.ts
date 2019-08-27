import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Topic1Component } from './topic1/topic1.component';
import { Topic2Component } from './topic2/topic2.component';
import { Topic3Component } from './topic3/topic3.component';
import { Topic4Component } from './topic4/topic4.component';
import { Topic5Component } from './topic5/topic5.component';
import { TesterDirective } from './tester.directive';
import { MyCurrencyPipe } from './my-currency.pipe';
import { DisablerDirective } from './disabler.directive';
import { OtherPipePipe } from './other-pipe.pipe';
import { AbcPipePipe } from './_pipes/abc-pipe.pipe';
import { AnotherCurrencyPipe } from './another-currency.pipe';
import { Topic6Component } from './topic6/topic6.component';
import { ContentComponent } from './content/content.component';
import { Topic7Component } from './topic7/topic7.component';

@NgModule({
  declarations: [
    AppComponent,
    Topic1Component,
    Topic2Component,
    Topic3Component,
    Topic4Component,
    Topic5Component,
    TesterDirective,
    MyCurrencyPipe,
    DisablerDirective,
    OtherPipePipe,
    AbcPipePipe,
    AnotherCurrencyPipe,
    Topic6Component,
    ContentComponent,
    Topic7Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
