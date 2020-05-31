import { Routes, RouterModule } from '@angular/router';

import { MortgageCalcComponent } from './mortgage-calc/mortgage-calc.component';
import { AppComponent } from './app.component';
import { BubbleSortComponent } from './sorting/bubble-sort/bubble-sort.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    
    { path: 'bubble-sort', component: BubbleSortComponent },
    { path: 'mortgage', component: MortgageCalcComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);