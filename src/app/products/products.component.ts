import { Component } from '@angular/core';
import { CategoriesComponent } from '../components/categories/categories.component'
import { TransactionFormComponent } from '../components/transaction-form/transaction-form.component'
import { TransactionTableComponent } from '../components/transaction-table/transaction-table.component'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: true,
  imports: [
    TransactionFormComponent,
    CategoriesComponent,
    TransactionTableComponent
  ],
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

}
