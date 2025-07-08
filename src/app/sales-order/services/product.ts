import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  gross: number;
  net: number;
  stock: number;
  available: number;
  sold: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  // For IndoorPlant
  private indoorProducts = [
    { name: 'Rose Plant', gross: 1200, net: 1100, stock: 20, available: 15, sold: 5 },
    { name: 'Snake Plant', gross: 1500, net: 1300, stock: 50, available: 40, sold: 10 },
    { name: 'Aloe Vera', gross: 1000, net: 900, stock: 30, available: 25, sold: 5 }
  ];

  getIndoorProducts() {
    return [...this.indoorProducts];
  }

   addProduct(product: Product) {
    this.indoorProducts.push({ ...product });
  }

  updateProduct(index: number, product: Product) {
    this.indoorProducts[index] = { ...product };
  }

  deleteProduct(index: number) {
    this.indoorProducts.splice(index, 1);
  }

  // For OutdoorPlant
  private outdoorProducts: Product[] = [
    { name: 'Bougainvillea', gross: 700, net: 650, stock: 40, available: 35, sold: 5 },
    { name: 'Hibiscus', gross: 800, net: 750, stock: 30, available: 25, sold: 5 },
    { name: 'Money Plant', gross: 500, net: 450, stock: 60, available: 50, sold: 10 }
  ];
   getOutdoorProducts(): Product[] {
    return [...this.outdoorProducts];
  }
  addOutdoorProduct(product: Product) {
    this.outdoorProducts.push({ ...product });
  }
  updateOutdoorProduct(index: number, product: Product) {
    this.outdoorProducts[index] = { ...product };
  }
  deleteOutdoorProduct(index: number) {
    this.outdoorProducts.splice(index, 1);
  }

   // For FlowerPlant
    private FlowerProducts: Product[] = [
    { name: 'Ceramic Pot', gross: 300, net: 250, stock: 100, available: 90, sold: 10 },
    { name: 'Clay Pot', gross: 200, net: 180, stock: 150, available: 140, sold: 10 },
    { name: 'Plastic Pot', gross: 100, net: 90, stock: 200, available: 180, sold: 20 }
    ];
    getFlowerProducts(): Product[] {
    return [...this.FlowerProducts];
  }
  addFlowerProducts(product: Product) {
    this.FlowerProducts.push({ ...product });
  }
  updateFlowerProducts(index: number, product: Product) {
    this.FlowerProducts[index] = { ...product };
  }
  deleteFlowerProducts(index: number) {
    this.FlowerProducts.splice(index, 1);
  }

  // For FERTILIZER & SOIL
  private fertilizerProducts: Product[] = [
  { name: 'Organic Compost', gross: 800, net: 750, stock: 40, available: 35, sold: 5 },
  { name: 'Vermicompost', gross: 600, net: 550, stock: 60, available: 50, sold: 10 },
  { name: 'Potting Mix', gross: 500, net: 450, stock: 70, available: 65, sold: 5 }
  ];
  getFertilizerProducts(): Product[] {
    return [...this.fertilizerProducts];
  }
  addFertilizerProduct(product: Product) {
    this.fertilizerProducts.push({ ...product });
  }
  updateFertilizerProduct(index: number, product: Product) {
    this.fertilizerProducts[index] = { ...product };
  }
  deleteFertilizerProduct(index: number) {
    this.fertilizerProducts.splice(index, 1);
  }
}
