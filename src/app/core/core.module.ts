import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {
  NgModule
} from "@angular/core";
import { HttpService } from "./services/http.service";
import { FilterCategoryPipe } from './pipes/filter-item.pipe';

@NgModule({
  declarations: [
    FilterCategoryPipe
  ],
  imports: [CommonModule, HttpClientModule],
  providers: [HttpService],
})
export class CoreModule {}
