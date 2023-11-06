import {ProfessionalSchool} from "./professionalSchool";
import {Period} from "../../period/models/period";

export class Person {
  apellidoMaterno?: string;
  apellidoPaterno?: string;
  ciclo?: string;
  codigo?: string;
  correo?: string;
  dni?: string;
  grupo?: string;
  nombre?: string;
  nombres?: string;
  tipo?: string;
  estado?: boolean;
  id?: number;
  escuelaProfesional?: ProfessionalSchool;
  periodo?: Period;

}
