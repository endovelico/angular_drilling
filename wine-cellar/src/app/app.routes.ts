import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WineList } from './wine-list/wine-list';
import { WineDetails } from './wine-details/wine-details';

export const routes: Routes = [ {path: '', component:WineList }, 
                                {path: 'wine/:id', component:WineDetails } ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}