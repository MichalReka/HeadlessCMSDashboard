import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ArticleFormComponent } from "./article-form/article-form.component";
import { ArticlesRoutingModule } from "./articles-routing.module";
import { ArticlesViewComponent } from "./articles-view/articles-view.component";

@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    FormsModule,
    BsDropdownModule,
    ArticlesRoutingModule,
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
    ArticlesViewComponent,
    ArticleFormComponent,
  ]
})
export class ArticleModule { }
