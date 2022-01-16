import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { UserFormComponent } from "./user-form/user-form.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { UsersRoutingModule } from "./users-routing.module";

@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    FormsModule,
    BsDropdownModule,
    UsersRoutingModule,
    // BsDropdownModule.forRoot(),
    // TabsModule,
    // CarouselModule.forRoot(),
    // CollapseModule.forRoot(),
    // PaginationModule.forRoot(),
    // PopoverModule.forRoot(),
    // ProgressbarModule.forRoot(),
    // TooltipModule.forRoot()
  ],
  declarations: [
    UsersListComponent,
    UserFormComponent,
  ]
})
export class UserModule { }
