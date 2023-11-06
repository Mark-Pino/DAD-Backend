import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { CatchInterceptorService } from './catch-interceptor.service';
import { AuthStoreService} from "../services";

@NgModule({
    imports: [
        HttpClientModule,
    ],
    exports: [],
    declarations: [],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CatchInterceptorService,
            multi: true,
        },
        //AuthStoreService
    ],
})
export class InterceptorsModule { }
