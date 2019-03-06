import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';
import {RegisterComponent} from './accounts/register/register.component';
import {HomeComponent} from './home/home.component';
import {ForgotpasswordComponent} from './accounts/forgotpassword/forgotpassword.component';
import {AdminComponent} from './admin/admin.component';
import {AdcomplaintsComponent} from './adminComponents/adcomplaints/adcomplaints.component';
import {AddcategoryComponent} from './adminComponents/addcategory/addcategory.component';
import {AddhostelComponent} from './adminComponents/addhostel/addhostel.component';
import {AddstaffComponent} from './adminComponents/addstaff/addstaff.component';
import {AddcollegeComponent} from './adminComponents/addcollege/addcollege.component';
import {StudentComponent} from './student/student.component';
import {StudentprofileComponent} from './studentComponents/studentprofile/studentprofile.component';
import {MakecomplaintComponent} from './studentComponents/makecomplaint/makecomplaint.component';

import {ViewmycomplaintsComponent} from './studentComponents/viewmycomplaints/viewmycomplaints.component';
import {StaffComponent} from './staff/staff.component';
import {AddtechnicianComponent} from './staffComponents/addtechnician/addtechnician.component';

import { AdminGuard } from './navGuard/admin.guard';
import {StaffGuard} from './navGuard/staff.guard';
import {FeedbackComponent} from './studentComponents/feedback/feedback.component';
import {StudentGuard} from './navGuard/student.guard';
import {StaffcomplaintsComponent} from './staffComponents/staffcomplaints/staffcomplaints.component';
import {TechniciansComponent} from './staffComponents/technicians/technicians.component';
import {WardenGuard} from './navGuard/warden.guard';
import {WardenComponent} from './warden/warden.component';
import {AdminwardenComponent} from './adminComponents/adminwarden/adminwarden.component';

const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgotpassword', component: ForgotpasswordComponent}
    ]
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    component: AdminComponent,
    canActivateChild: [AdminGuard],
    children: [
      { path: '', redirectTo: '/admin/complaints', pathMatch: 'full'},
      { path: 'complaints', component: AdcomplaintsComponent},
      { path: 'addcategory', component: AddcategoryComponent},
      { path: 'addhostel', component: AddhostelComponent},
      { path: 'addstaff', component: AddstaffComponent},
      { path: 'addcollege', component: AddcollegeComponent},
      { path: 'warden', component: AdminwardenComponent}
    ]
  },
  {
    path: 'student',
    canActivate: [StudentGuard],
    component: StudentComponent,
    canActivateChild: [StudentGuard],
    children: [
      { path: '', redirectTo: '/student/profile', pathMatch: 'full'},
      { path: 'profile', component: StudentprofileComponent},
      { path: 'makecomplaint', component: MakecomplaintComponent},
      { path: 'viewcomplaints', component: ViewmycomplaintsComponent},
      { path: 'feedback/:id', component: FeedbackComponent}
    ]
  },
  {
    path: 'staff',
    canActivate: [StaffGuard],
    component: StaffComponent,
    canActivateChild: [StaffGuard],
    children: [
      { path: '', redirectTo: '/staff/complaints', pathMatch: 'full' },
      { path: 'addtechnician', component: AddtechnicianComponent},
      { path: 'complaints', component: StaffcomplaintsComponent},
      { path: 'technicians', component: TechniciansComponent}
    ]
  },
  {
    path: 'warden',
    component: WardenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
