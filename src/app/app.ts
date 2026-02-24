import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditorFiltroComponent } from './editor-filtro/editor-filtro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EditorFiltroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {}