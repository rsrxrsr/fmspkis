import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", loadChildren: "./pages/login/login.module#LoginPageModule" },
  { path: "casos", loadChildren: "./casos/casos.module#CasosPageModule" },
  { path: "caso", loadChildren: "./caso/caso.module#CasoPageModule" },
  { path: "tabs", loadChildren: "./tabs/tabs.module#TabsPageModule" },
  { path: "camara", loadChildren: "./camara/camara.module#CamaraPageModule" },
  { path: "mapa", loadChildren: "./mapa/mapa.module#MapaPageModule" },
  {
    path: "modalmapa/:item",
    loadChildren: "./modalmapa/modalmapa.module#ModalmapaPageModule"
  },
  { path: 'empresa', loadChildren: './pages/empresa/empresa.module#EmpresaPageModule' },
  { path: 'empresas', loadChildren: './pages/empresas/empresas.module#EmpresasPageModule' },
  { path: 'roll', loadChildren: './pages/roll/roll.module#RollPageModule' },
  { path: 'rolles', loadChildren: './pages/rolles/rolles.module#RollesPageModule' },
  { path: 'funcion', loadChildren: './pages/funcion/funcion.module#FuncionPageModule' },
  { path: 'funciones', loadChildren: './pages/funciones/funciones.module#FuncionesPageModule' },
  { path: 'usuario', loadChildren: './pages/usuario/usuario.module#UsuarioPageModule' },
  { path: 'usuarios', loadChildren: './pages/usuarios/usuarios.module#UsuariosPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
