import { Routes } from '@angular/router';
import { AdminLayout } from './shared/components/layouts/admin-layout/admin-layout';
import { App } from './app';
import { Home } from './features/home/home';

export const routes: Routes = [
    {
        path: '',
        component: AdminLayout,
        children: [
            {
                path: '',
                component: Home,
                data: {
                    title: 'Home | Basic Angular App',
                }
            }
        ]
    }
];
