import { Routes, RouterModule } from '@angular/router';

import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { MergeSortComponent } from './merge-sort/merge-sort.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';

const routes: Routes = [
    
    { path: 'bubble-sort', component: BubbleSortComponent },
    { path: 'merge-sort', component: MergeSortComponent },
    { path: 'insertion-sort', component: InsertionSortComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);