import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  servicios = inject(ProductosService)

  productos: any 
  ngOnInit () {
    this.servicios.getProductos().subscribe( p =>{
      this.productos = p
      console.log(this.productos)
    })
  }
}
