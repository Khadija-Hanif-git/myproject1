import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService,Product } from '../services/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fertilizer-and-soil',
  imports: [CommonModule,FormsModule],
  templateUrl: './fertilizer-and-soil.html',
  styleUrl: './fertilizer-and-soil.css'
})
export class FertilizerAndSoil implements OnInit {

    products: Product[] = [];
    newProduct: Product = this.emptyProduct();
    editingIndex: number | null = null;
    showAddForm: boolean = false;
  
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
      this.products = this.productService.getFertilizerProducts();
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
      this.productService.addFertilizerProduct(this.newProduct);
      this.products = this.productService.getFertilizerProducts();
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
        this.productService.updateFertilizerProduct(this.editingIndex, this.newProduct);
        this.products = this.productService.getFertilizerProducts();
        this.resetForm();
        this.showAddForm = false;
      }
    }
  
    deleteProduct(index: number) {
      if (confirm('Are you sure you want to delete this product?')) {
        this.productService.deleteFertilizerProduct(index);
        this.products = this.productService.getFertilizerProducts();
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
