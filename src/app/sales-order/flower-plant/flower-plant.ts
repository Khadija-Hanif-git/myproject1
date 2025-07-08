import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../services/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flower-plant',
  imports:[FormsModule,CommonModule],
  templateUrl: './flower-plant.html',
  styleUrls: ['./flower-plant.css'],
  standalone: true
})
export class FlowerPlant implements OnInit {
  products: Product[] = [];
  newProduct: Product = this.emptyProduct();
  editingIndex: number | null = null;
  showAddForm = false;

  filters = {
    name: '',
    gross: '',
    net: '',
    stock: '',
    available: '',
    sold: ''
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getFlowerProducts();
  }
    toggleAddForm() {
    this.showAddForm = !this.showAddForm;
    this.resetForm();
  }

  filteredProducts(): Product[] {
    return this.products.filter(p =>
      (!this.filters.name || p.name.toLowerCase().includes(this.filters.name.toLowerCase())) &&
      (!this.filters.gross || p.gross.toString().includes(this.filters.gross)) &&
      (!this.filters.net || p.net.toString().includes(this.filters.net)) &&
      (!this.filters.stock || p.stock.toString().includes(this.filters.stock)) &&
      (!this.filters.available || p.available.toString().includes(this.filters.available)) &&
      (!this.filters.sold || p.sold.toString().includes(this.filters.sold))
    );
  }

  addProduct() {
    this.productService.addFlowerProducts(this.newProduct);
    this.products = this.productService.getFlowerProducts();
    this.resetForm();
    this.showAddForm = false;
  }

  editProduct(index: number) {
    this.editingIndex = index;
    this.newProduct = { ...this.products[index] };
    this.showAddForm = true;
  }

  updateProduct() {
    if (this.editingIndex !== null) {
      this.productService.updateFlowerProducts(this.editingIndex, this.newProduct);
      this.products = this.productService.getFlowerProducts();
      this.resetForm();
      this.showAddForm = false;
    }
  }

  deleteProduct(index: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteFlowerProducts(index);
      this.products = this.productService.getFlowerProducts();
    }
  }

  resetForm() {
    this.newProduct = this.emptyProduct();
    this.editingIndex = null;
  }

  emptyProduct(): Product {
    return {
      name: '',
      gross: 0,
      net: 0,
      stock: 0,
      available: 0,
      sold: 0
    };
  }
}
