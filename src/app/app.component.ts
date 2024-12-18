import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tarea Entregables de diseño';

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/CASA']); 
    }
  }
}
