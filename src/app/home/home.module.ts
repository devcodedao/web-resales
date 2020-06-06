import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './products-list/products-list.component';
import { IndexComponent } from './home-body/home-body.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { SortsComponent } from './products-list/sorts/sorts.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { SortLocationComponent } from './products-list/sort-location/sort-location.component';
import { SearchProductComponent } from './products-list/search-product/search-product.component';
import { MatCardModule } from '@angular/material/card';
import { MainCategoriesComponent } from './main-categories/main-categories.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatInputModule } from '@angular/material/input';
import { PaginatorComponent } from './paginator/paginator.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'service',
        component: ServicesComponent
      },
      {
        path: 'categories',
        component: MainCategoriesComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    IndexComponent,
    SortsComponent,
    SortLocationComponent,
    SearchProductComponent,
    MainCategoriesComponent,
    PaginatorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatMenuModule,
    NgSelectModule,
    FormsModule,
    MatCardModule,
    MatPaginatorModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    NgxSpinnerModule,
    MatInputModule

  ]
})
export class HomeModule { }
