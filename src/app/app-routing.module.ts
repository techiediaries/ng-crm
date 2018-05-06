import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountListComponent } from './account-list/account-list.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { LeadCreateComponent } from './lead-create/lead-create.component';
import { OpportunityListComponent } from './opportunity-list/opportunity-list.component';
import { OpportunityCreateComponent } from './opportunity-create/opportunity-create.component';


const routes: Routes = [
  
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
  {
    path: 'accounts',
    component: AccountListComponent
  },
  {
    path: 'create-account',
    component: AccountCreateComponent      
  },    
  {
    path: 'contacts',
    component: ContactListComponent      
  },
  {
    path: 'create-contact',
    component: ContactCreateComponent      
  },  
  {
    path: 'leads',
    component: LeadListComponent      
  },
  {
    path: 'create-lead',
    component: LeadCreateComponent      
  },    
  {
    path: 'opportunities',
    component: OpportunityListComponent      
  },
  {
    path: 'create-opportunity',
    component: OpportunityCreateComponent      
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }