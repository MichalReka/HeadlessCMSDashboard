import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { MediasListComponent } from "./medias-list/medias-list.component";
import { MediaFormComponent } from "./media-form/media-form.component";
import { MediasRoutingModule } from "./medias-routing.module";

@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    FormsModule,
    BsDropdownModule,
    MediasRoutingModule,
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
    MediasListComponent,
    MediaFormComponent,
  ]
})
export class MediaModule { }
