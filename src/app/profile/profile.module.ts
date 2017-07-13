import {NgModule, ModuleWithProviders} from '@angular/core';

import {LandingComponent} from './landing/landing.component';



@NgModule({
    declarations: [
       LandingComponent
    ],
    imports: [

    ],
    providers: [

    ],
    exports: [
      LandingComponent
    ]
})
export class ProfileModule {

    // static forRoot(): ModuleWithProviders {
    //     return {
    //         ngModule: LayoutModule,
    //         providers: []
    //     }
    // }
}


