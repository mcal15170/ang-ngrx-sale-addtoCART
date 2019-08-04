import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from "./pages/product/product/product.component";
import { CartComponent } from "./pages/product/cart/cart.component";
import { ProductDetailComponent } from "./pages/product/product-detail/product-detail.component";
import { ProductListComponent } from "./pages/product/product-list/product-list.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: ProductComponent },
  { path: "cart", component: CartComponent },
  { path: "product-detail/:id", component: ProductDetailComponent },
  { path: "product-list/:type", component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
