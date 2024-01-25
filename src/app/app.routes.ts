import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HomeComponentComponent } from './home-component/home-component.component';

export const routes: Routes = [
    {
        path: "home", component: HomeComponentComponent
    },
    {
        path: "todo-list", loadChildren: () => {
            return loadRemoteModule({
                remoteEntry: "http://localhost:4201/remoteEntry.js",
                remoteName: "mfeApp",
                exposedModule: "./TodoListModule"
            }).then((m) => m.TodoListModule).catch((err) => {
                console.log(err);
            })
        }
    }
];
