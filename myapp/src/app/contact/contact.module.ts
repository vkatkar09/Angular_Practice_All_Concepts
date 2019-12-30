import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import {RouterModule} from '@angular/router';
import { contact } from './contact.routes';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(contact),
    ReactiveFormsModule
  ]
})
export class ContactModule { }
