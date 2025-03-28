import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MomentPipe } from '../moment-pipe.pipe';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { SkeletonModule } from 'primeng/skeleton';
import { PrincipalRoutingModule } from './principal-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';




@NgModule({
  declarations: [
    
  ],
  imports: [
    MomentPipe,
    CommonModule,
    NavbarComponent,
    PrincipalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule,
    CardModule, 
    ButtonModule,
    InputTextModule,
    KeyFilterModule,
    InputNumberModule,
    ToastModule,
    RippleModule,
    ConfirmPopupModule,
    SkeletonModule
  ]
})
export class PrincipalModule { }
