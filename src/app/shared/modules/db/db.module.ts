import { NgModule } from "@angular/core";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { DbService } from "../../services/db.service";

@NgModule({
  imports: [
    HttpClientInMemoryWebApiModule.forRoot(DbService, {
      delay: 500,
      passThruUnknownUrl: true,
    }),
  ],
})
export class DbModule {}
