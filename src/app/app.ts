import {Component, signal} from '@angular/core';
import {Routergutar} from '@angular/router';
import {EditorFiltroComponent} from '.editor/filtro/editor-filtro';

@component({
    selector: 'app-root',
    standalone: true,
    imports: [EditorFiltroComponent],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App{}