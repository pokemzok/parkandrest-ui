import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {FormInputComponent} from './form/form-input/form-input.component';
import {FormSubmitComponent} from './form/form-submit/form-submit.component';
import {TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
/*import {TranslateHttpLoader} from '@ngx-translate/http-loader';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}*/

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    LoginComponent,
    FormInputComponent,
    FormSubmitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot()
  ],
  providers: [ ], /*FIXME internatinalization */
  bootstrap: [AppComponent]
})
export class AppModule { }
