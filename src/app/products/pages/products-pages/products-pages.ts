import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProductsToolbar } from '../../components/products-toolbar/products-toolbar';
import { ProductsForm } from '../../components/products-form/products-form';
import { ProductsTable, Product } from '../../components/products-table/products-table';
import { NotificationsDropdownComponent } from '../../../dashboard/components/notifications-dropdown/notifications-dropdown.component';
import { UserDropdownComponent } from '../../../dashboard/components/user-dropdown/user-dropdown.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    CommonModule,
    ProductsToolbar,
    ProductsTable,
    ProductsForm,
    NotificationsDropdownComponent,
    UserDropdownComponent,
  ],
  templateUrl: './products-pages.html',
  styleUrls: ['./products-pages.css'],
})
export class ProductsPages {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedProduct: Product = this.getEmptyProduct();
  formMode: 'create' | 'edit' = 'create';
  showForm = false;

  private readonly API_URL = 'http://localhost:5027/api/Producto';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProducts();
  }

  // 🔹 Cargar productos desde el backend
  loadProducts() {
    this.http.get<Product[]>(this.API_URL)
      .subscribe(data => {
        this.products = data;
        this.filteredProducts = [...this.products];
      });
  }

  // 🔹 Buscar productos
  onSearch(searchTerm: string) {
    if (!searchTerm.trim()) {
      this.filteredProducts = [...this.products];
      return;
    }
    const term = searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.nombre.toLowerCase().includes(term),
    );
  }

  // 🔹 Abrir formulario en modo crear
  openAddForm() {
    this.formMode = 'create';
    this.selectedProduct = this.getEmptyProduct();
    this.showForm = true;
  }

  // 🔹 Abrir formulario en modo editar
  openEditForm(product: Product) {
    this.formMode = 'edit';
    this.selectedProduct = { ...product };
    this.showForm = true;
  }

  // 🔹 Guardar producto (POST o PUT) usando FormData
  saveProduct(product: Product) {
    const formData = new FormData();
    formData.append('nombre', product.nombre);
    formData.append('descripcion', product.descripcion);
    formData.append('precio', product.precio.toString());
    formData.append('cantidad', product.cantidad.toString());
    formData.append('margen_ganancia', product.margen_ganancia.toString());
    formData.append('precio_venta', product.precio_venta.toString());
    formData.append('codigo_barras', product.codigo_barras);
    formData.append('tipo_producto', product.tipo_producto);
    formData.append('claveCategoria', product.claveCategoria);
    formData.append('claveUnidadMedida', product.claveUnidadMedida);
    formData.append('claveUnidadVenta', product.claveUnidadVenta);
    formData.append('claveProveedor', product.claveProveedor);
    formData.append('presentacion', product.presentacion);
    formData.append('caducidad', product.caducidad.toString());
    formData.append('estado', product.estado.toString());

    if (product.imagenFile) {
      formData.append('Imagen', product.imagenFile);
    }

    if (this.formMode === 'create') {
      this.http.post<Product>(this.API_URL, formData)
        .subscribe(newProduct => {
          this.products.push(newProduct);
          this.filteredProducts = [...this.products];
          this.closeForm();
        });
    } else {
      this.http.put<Product>(`${this.API_URL}/actualizarProducto/${product.claveProducto}`, formData)
        .subscribe(updated => {
          const index = this.products.findIndex(p => p.claveProducto === product.claveProducto);
          if (index !== -1) {
            this.products[index] = updated;
          }
          this.filteredProducts = [...this.products];
          this.closeForm();
        });
    }
  }

  // 🔹 Eliminar producto
  deleteProduct(product: Product) {
    if (confirm(`¿Eliminar ${product.nombre}?`)) {
      this.http.delete(`${this.API_URL}/eliminarProducto${product.claveProducto}`)
        .subscribe(() => {
          this.products = this.products.filter(p => p.claveProducto !== product.claveProducto);
          this.filteredProducts = [...this.products];
        });
    }
  }

  // 🔹 Cerrar formulario
  closeForm() {
    this.showForm = false;
    this.selectedProduct = this.getEmptyProduct();
  }

  // 🔹 Producto vacío para inicializar
  private getEmptyProduct(): Product {
    return {
      claveProducto: '',
      nombre: '',
      descripcion: '',
      precio: 0,
      cantidad: 0,
      imagenUrl: '',
      imagenFile: undefined,   // archivo de imagen
      margen_ganancia: 0,
      precio_venta: 0,
      codigo_barras: '',
      tipo_producto: '',
      claveCategoria: '',
      claveUnidadMedida: '',
      claveUnidadVenta: '',
      claveProveedor: '',
      presentacion: '',   // 👈 agregado
      caducidad: false,   // 👈 agregado
      estado: true        // 👈 agregado
    };
  }
}
