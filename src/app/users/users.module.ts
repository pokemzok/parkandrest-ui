import {NgModule} from '@angular/core';
import {FormModule} from '../form/form.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {ENVIRONMENT} from '../../environments/environment';
import {Provider} from '@angular/core/src/di/provider';
import {MockUsernameValidator} from './new/validator/mock.username.validator';
import {MockUsersService} from './manage/mock.users.service';
import {MockUserManagementService} from './mock.user-management.service';
import {UserManagementService} from './user-management.service';
import {AsyncUsernameValidator} from './new/validator/async.username.validator';
import {UsersService} from './manage/users.service';
import {UsersComponent} from './users.component';
import {NewUserComponent} from './new/new-user.component';
import {UsersManagementComponent} from './manage/users-management.component';
import {CommonsModule} from '../common/commons.module';
import {TranslatedToastrFacade} from '../common/toaster/translated-toaster.service';
import {ToastrModule} from 'ngx-toastr';
import {MatTabsModule} from '@angular/material';
import {TranslatedOptionFactory} from '../form/select/options/translated-option.factory';
import {PaginationModule} from '../pagination/pagination.module';

function provideServices(): any[] {
  if (!(ENVIRONMENT.PRODUCTION) && ENVIRONMENT.SERVER_OFFLINE) {
    return provideMockServices();
  } else {
    return provideBackendServices()
  }
}

function provideMockServices(): Provider[] {
  return [
    {provide: 'UserManagementService', useClass: MockUserManagementService},
    {provide: 'UsersService', useClass: MockUsersService},
    {provide: 'UsernameValidator', useClass: MockUsernameValidator},
  ]
}

function provideBackendServices(): Provider[] {
  return [
    {provide: 'UserManagementService', useClass: UserManagementService},
    {provide: 'UsersService', useClass: UsersService},
    {provide: 'UsernameValidator', useClass: AsyncUsernameValidator},
  ]
}

@NgModule(
  {
    declarations: [
      UsersComponent,
      NewUserComponent,
      UsersManagementComponent
    ],
    imports: [
      CommonsModule,
      ReactiveFormsModule,
      MatTabsModule,
      TranslateModule.forChild(),
      ToastrModule,
      FormModule,
      PaginationModule
    ],
    providers: [
      TranslatedToastrFacade,
      TranslatedOptionFactory
    ]
      .concat(provideServices()),
  }
)
export class UsersModule {

}
