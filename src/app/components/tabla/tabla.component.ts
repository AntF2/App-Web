import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  juego = [
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
  filtro: string | undefined;
  juegoFiltrado: any[] = [];

  ocultar(id: any) {
    this.visualizar = id;
  }

  filtrar() {
    const filtroId = Number(this.filtro);
    if (!isNaN(filtroId)) {
      this.juegoFiltrado = this.juego.filter(juego => juego.id === filtroId);
    } else {
      this.juegoFiltrado = [];
    }
  }
}
