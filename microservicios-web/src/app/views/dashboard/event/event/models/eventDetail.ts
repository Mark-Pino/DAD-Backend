export class EventDetail {
  id?: number;
  nombre?: string;
  fecha?: string;

  constructor(nombre: string, fecha: string) {
    this.nombre = nombre;
    this.fecha = fecha;
  }
}
