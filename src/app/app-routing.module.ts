import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CataloguePage } from "./pages/catalogue/catalogue.page";
import { LandingPage } from "./pages/landing/landing.page";
import { TrainerPage } from "./pages/trainer/trainer.page";

const routes: Routes = [
    {
        path: "",
        component: LandingPage
    },
    {
        path: "catalogue",
        component: CataloguePage
    },
    {
        path: "trainer",
        component: TrainerPage
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],    // Import a module
    exports: [
        RouterModule
    ]     //Expose a module and it´s features

})
export class AppRoutingModule{

}