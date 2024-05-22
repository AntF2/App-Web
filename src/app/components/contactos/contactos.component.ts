import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent {
  juegos = [
    {
      id: 1,
      nombre: "Super Mario Bros",
      precio: 12.00,
      galeria: "https://static.cdnvia.com/pics/games/420/2562-super-mario-bros-clasico.jpg.webp"
    },
    {
      id: 2,
      nombre: "Zelda",
      precio: 10.00,
      galeria: "https://www.nintendo.com/eu/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_TheLegendOfZeldaSkywardSwordHD_image380w.jpg"
    },
    {
      id: 3,
      nombre: "Metroid",
      precio: 15.00,
      galeria: "https://media.vandal.net/m/102441/metroid-dread-20216151935543_22.jpg"
    },
    {
      id: 4,
      nombre: "Donkey Kong",
      precio: 20.00,
      galeria: "https://www.nintendo.com/eu/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_DonkeyKongCountryTropicalFreeze_image380w.jpg"
    },
    {
      id: 5,
      nombre: "Mario Kart",
      precio: 10.00,
      galeria: "https://m.media-amazon.com/images/I/91vd7WQ1acL.jpg"
    }
  ];
  visualizar: any;
  max: number | undefined;
  min: number | undefined;
  Evluar: any[] = [];

  ocultar(id: any) {
    this.visualizar = id;
  }

  buscar() {
    this.Evluar = this.juegos.filter(juego => {
      return juego.precio >= (this.min || 0) && juego.precio <= (this.max || Infinity);
    });
  }

  ngOnInit() {
    // Inicializa Evluar con todos los juegos
    this.Evluar = [...this.juegos];
  }
}
