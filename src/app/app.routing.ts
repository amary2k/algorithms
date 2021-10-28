import { Routes, RouterModule } from '@angular/router';

import { MortgageCalcComponent } from './mortgage-calc/mortgage-calc.component';
import { BubbleSortComponent } from './sorting/bubble-sort/bubble-sort.component';
import { MergeSortComponent } from './sorting/merge-sort/merge-sort.component';
import { InsertionSortComponent } from './sorting/insertion-sort/insertion-sort.component';
import { SortingComponent } from './sorting/sorting.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TreeComponent } from './data-structures/tree/tree.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'mortgage', component: MortgageCalcComponent },
    {
      path: 'sorting',
      component: SortingComponent,
    //   children: [
    //     { path: 'bubble-sort', component: BubbleSortComponent },
    //     { path: 'merge-sort', component: MergeSortComponent },
    //     { path: 'insertion-sort', component: InsertionSortComponent },
    //   ]
    },
    { path: 'tree', component: TreeComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' },
];

export const appRoutingModule = RouterModule.forRoot(routes);