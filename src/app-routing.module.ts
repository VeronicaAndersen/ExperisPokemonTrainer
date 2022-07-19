import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CataloguePage } from "./app/pages/catalogue/catalogue.page";
import { LandingPage } from "./app/pages/landing/landing.page";
import { TrainerPage } from "./app/pages/trainer/trainer.page";

const routes: Routes = [
    {
        path: "",
        component: LandingPage
    },
    {
        path: "trainer",
        component: TrainerPage
    },
    {
        path: "catalogue",
        component: CataloguePage
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ], 
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}