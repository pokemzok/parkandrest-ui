import {NgModule} from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SecurityModule} from '../security/security.module';
import {CommonsModule} from '../common/commons.module';
import {TranslateModule} from '@ngx-translate/core';
import {ModalModule} from 'ngx-modal';
import {RouterModule} from '@angular/router';
import {ROUTES_DEFINITIONS} from '../routes-definitions';


@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonsModule,
    SecurityModule,
    ModalModule,
    TranslateModule.forChild(),
    RouterModule.forChild(ROUTES_DEFINITIONS),
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule {

}
