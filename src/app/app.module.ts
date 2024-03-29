import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CompletateComponent } from './components/completate/completate.component';
import { DaFareComponent } from './components/da-fare/da-fare.component';
import { UtentiComponent } from './components/utenti/utenti.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent },
  { path: 'completed', component: CompletateComponent },
  { path: 'todo', component: DaFareComponent },
  { path: 'users', component: UtentiComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponent,
    CompletateComponent,
    DaFareComponent,
    UtentiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Aggiunta di FormsModule
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
