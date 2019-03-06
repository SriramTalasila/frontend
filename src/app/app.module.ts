import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './accounts/login/login.component';
import { RegisterComponent } from './accounts/register/register.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './accounts/forgotpassword/forgotpassword.component';
import { AdminComponent } from './admin/admin.component';
import { AdcomplaintsComponent } from './adminComponents/adcomplaints/adcomplaints.component';
import { AddcategoryComponent } from './adminComponents/addcategory/addcategory.component';
import { AddhostelComponent } from './adminComponents/addhostel/addhostel.component';
import { AddstaffComponent } from './adminComponents/addstaff/addstaff.component';
import { AddcollegeComponent } from './adminComponents/addcollege/addcollege.component';
import { StudentComponent } from './student/student.component';
import { StudentprofileComponent } from './studentComponents/studentprofile/studentprofile.component';
import { MakecomplaintComponent } from './studentComponents/makecomplaint/makecomplaint.component';
import { ViewmycomplaintsComponent } from './studentComponents/viewmycomplaints/viewmycomplaints.component';
import { StaffComponent } from './staff/staff.component';
import { AddtechnicianComponent } from './staffComponents/addtechnician/addtechnician.component';
import {AuthService} from './services/auth.service';
import {AdminGuard} from './navGuard/admin.guard';
import {TokenInterceptorService} from './services/token-interceptor.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FeedbackComponent } from './studentComponents/feedback/feedback.component';
import { StaffcomplaintsComponent } from './staffComponents/staffcomplaints/staffcomplaints.component';
import { TechniciansComponent } from './staffComponents/technicians/technicians.component';
import { WardenComponent } from './warden/warden.component';
import {WardenGuard} from './navGuard/warden.guard';
import {StudentGuard} from './navGuard/student.guard';
import {StaffGuard} from './navGuard/staff.guard';
import { AdminwardenComponent } from './adminComponents/adminwarden/adminwarden.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgotpasswordComponent,
    AdminComponent,
    AdcomplaintsComponent,
    AddcategoryComponent,
    AddhostelComponent,
    AddstaffComponent,
    AddcollegeComponent,
    StudentComponent,
    StudentprofileComponent,
    MakecomplaintComponent,
    ViewmycomplaintsComponent,
    StaffComponent,
    AddtechnicianComponent,
    FeedbackComponent,
    StaffcomplaintsComponent,
    TechniciansComponent,
    WardenComponent,
    AdminwardenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [AuthService, AdminGuard, WardenGuard, StudentGuard, StaffGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService   , multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
