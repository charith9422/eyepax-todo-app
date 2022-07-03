import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginUiComponent } from './login-ui/login-ui.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginUiComponent],
  imports: [ReactiveFormsModule],
  exports: [LoginRoutingModule],
  providers: [],
})
export class LoginModule {}
