import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
  usuarios: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUser().subscribe((data: any) => {
      this.usuarios = data;
    });

  }

}
