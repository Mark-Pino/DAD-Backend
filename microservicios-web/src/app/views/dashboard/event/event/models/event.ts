import {ProfessionalSchool} from "../../../Setup/person/models/professionalSchool";
import {Period} from "../../../Setup/period/models/period";
import {EventDetail} from "./eventDetail";
import {Tuition} from "./tuition";

export class Event {
  nombre?: string;
  tolerancia?: string;
  descripcion?: string;
  estado?: boolean;
  id?: number;
  escuelaProfesionalDto?: ProfessionalSchool;
  periodo?: Period;
  eventoDetalles?: EventDetail[];
  matriculas?: Tuition[]

}

