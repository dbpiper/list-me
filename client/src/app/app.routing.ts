import { Routes, RouterModule } from "@angular/router";

import { AddItemComponent } from "./components/add-item/add-item.component";
import { ListItemsComponent } from "./components/list-items/list-items.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    component: ListItemsComponent
  },
  {
    path: 'add-item',
    component: AddItemComponent
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
