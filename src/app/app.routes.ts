import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductosComponent } from './components/pages/productos/productos.component';
import { Error404Component } from './components/pages/error404/error404.component';
import { DetallejComponent } from './components/detallej/detallej.component';
import { ContactosComponent } from './components/contactos/contactos.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductosComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'detallej/:idjuego', component: DetallejComponent},
    {path: 'contactos', component: ContactosComponent},
    {path: '**', component: Error404Component },
    
];
