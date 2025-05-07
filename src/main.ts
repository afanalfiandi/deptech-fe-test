import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";
import { importProvidersFrom } from "@angular/core";
import { DbModule } from "./app/shared/modules/db/db.module";

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers!, 
    importProvidersFrom(DbModule),
  ],
});
