import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detallej',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detallej.component.html',
  styleUrls: ['./detallej.component.css']
})
export class DetallejComponent {
  ruta = inject(ActivatedRoute);
  juegos = [
    {
      id: 1,
      nombre: "Super Mario Bros",
      galeria: "https://static.cdnvia.com/pics/games/420/2562-super-mario-bros-clasico.jpg.webp",
      detalle: "Un clásico de plataformas lanzado por Nintendo."
    },
    {
      id: 2,
      nombre: "Zelda",
      galeria: "https://www.nintendo.com/eu/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_TheLegendOfZeldaSkywardSwordHD_image380w.jpg",
      detalle: "Una aventura épica en el reino de Hyrule."
    },
    {
      id: 3,
      nombre: "Metroid",
      galeria: "https://media.vandal.net/m/102441/metroid-dread-20216151935543_22.jpg",
      detalle: "Explora planetas y derrota a alienígenas en esta saga de ciencia ficción."
    },
    {
      id: 4,
      nombre: "Donkey Kong",
      galeria: "https://www.nintendo.com/eu/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_DonkeyKongCountryTropicalFreeze_image380w.jpg",
      detalle: "Acompaña a Donkey Kong en sus aventuras por la jungla."
    },
    {
      id: 5,
      nombre: "Mario Kart",
      galeria: "https://m.media-amazon.com/images/I/91vd7WQ1acL.jpg",
      detalle: "Compite en frenéticas carreras con tus personajes favoritos de Mario."
    }
  ];
  juego: any;
  id: number | undefined;

  ngOnInit() {
    this.ruta.params.subscribe(params => {
      const idjuego = Number(params['idjuego']);
      console.log(idjuego);
      this.id = idjuego;
      this.juego = this.juegos.find(juego => juego.id === this.id);
    });
  }
}
