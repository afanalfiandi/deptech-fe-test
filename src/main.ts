import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";
import { importProvidersFrom } from "@angular/core";
import { DbModule } from "./app/shared/modules/db/db.module";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { tokenInterceptor } from "./app/shared/interceptors/token.interceptor";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { DbService } from "./app/shared/services/db.service";

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers!,
    provideHttpClient(withInterceptors([tokenInterceptor])),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(DbService, {
        delay: 500,
        passThruUnknownUrl: true,
      })
    ),
  ],
});
