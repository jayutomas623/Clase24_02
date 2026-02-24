import { Component, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-editor-filtro',
  standalone: true,
  imports: [],
  templateUrl: './editor-filtro.component.html',
  styleUrl: './editor-filtro.component.scss'
})
export class EditorFiltroComponent {
  brillo: WritableSignal<number> = signal(100);
  contraste: WritableSignal<number> = signal(100);
  blur: WritableSignal<number> = signal(0);

  filtroScss: Signal<string> = computed(()=>{
    return `brightness(${this.brillo()}%) contrast(${this.constraste()}%) blur(${this.blur})`
  })

    actualizar(prop: string, evento: Event){
      const valor: string = (evento.target as HTMLInputElement).value;
      if(prop=='brillo') this.brillo.set(+valor);
      if(prop=='contraste') this.contraste.set(+valor);
      if(prop=='blur') this.blur.set(+valor);
    } 
}
