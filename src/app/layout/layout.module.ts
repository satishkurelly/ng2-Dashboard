import {NgModule, ModuleWithProviders} from '@angular/core';
import {HeaderComponent} from './header/header.component';



@NgModule({
    declarations: [
       HeaderComponent
    ],
    imports: [

    ],
    providers: [

    ],
    exports: [
      HeaderComponent
    ]
})
export class LayoutModule {

    // static forRoot(): ModuleWithProviders {
    //     return {
    //         ngModule: LayoutModule,
    //         providers: []
    //     }
    // }
}


