import { Component } from '@angular/core';

@Component({
  selector: 'app-Deber5',
  templateUrl: './Deber5.component.html',
  styleUrls: ['./Deber5.component.scss']
})
export class Deber5Component {
  // Lista de productos
  products = [
    { 
      name: 'Curso de comedia', 
      price: 125.25, 
      inventoryStatus: 'OFERTA', 
      image: 'data:image/jpeg;base64,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'
    },
    { 
      name: 'Como entregarse a dios', 
      price: 110.12, 
      inventoryStatus: 'OFERTA', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGGodMmkB1rYaBwZ8ZEYbTgxSg9PDCn2meQ&s'
    },
    { 
      name: 'Miles Morales el mejor spiderman?', 
      price: 67.35, 
      inventoryStatus: 'VENDIENDO', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQItNNOSG5jBAwCAXUvO6Dlp5ChRTTjKpI9BA&s'
    },
    { 
      name: 'Se debe lavar el pollo antes de consumir? ', 
      price: 94.31, 
      inventoryStatus: 'OFERTA', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwyh6KEB6gHMnDE-p5nX4xMWsbEU1mREaBpg&s'
    },
    { 
      name: 'Comida de la costa mejor que la de la sierra? ', 
      price: 196.10, 
      inventoryStatus: 'VENDIENDO', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqwE0DmszOjxmjKNkGrnqAegPVrIijD458vg&s'
    },
    { 
      name: 'Top 10 mejores mascotas para tener en casa', 
      price: 322.97, 
      inventoryStatus: 'OFERTA', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_B5U8gTawVmNtDlXgnv_RJa5bsRGHx2t4iQ&s'
    },
  ];

  // Configuración del carrusel (responsiveOptions)
  responsiveOptions = [
    {
      breakpoint: '2060px',
      numVisible: 3,   // 4 productos visibles en pantallas grandes
      numScroll: 1
    },
    {
      breakpoint: '980px',
      numVisible: 2,   // 3 productos visibles en pantallas medianas
      numScroll: 1
    },
    {
      breakpoint: '660px',
      numVisible: 1,   // 2 productos visibles en pantallas pequeñas
      numScroll: 1
    },

  ];

  // Método para determinar el severidad de la disponibilidad
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }
}
