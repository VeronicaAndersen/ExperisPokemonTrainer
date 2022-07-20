import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CataloguePage } from "./app/pages/catalogue/catalogue.page";
import { LoginPage } from "./app/pages/login/login.page";
import { TrainerPage } from "./app/pages/trainer/trainer.page";

const routes: Routes = [
    {
        path: "",
        component: LoginPage
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