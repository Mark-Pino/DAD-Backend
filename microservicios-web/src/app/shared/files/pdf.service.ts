import {Injectable} from '@angular/core';
import {abcTitle} from "./excel-service";

const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({providedIn: 'root'})
export class PdfService {

  constructor() {
  }

  generatePdfGeneral(title: string, dataSource: any, isHorizontal?: boolean) {
    const pdf = {
      content: [
      /*  {
          stack: [
            { text: title, style: 'title', alignment: 'center', fontSize: 12 },
            { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Icon_pdf_file.svg/898px-Icon_pdf_file.svg.png', width: 50, height: 50, alignment: 'center' }, // Agrega una imagen dentro del título
          ]
        },*/
        { text: title, style: 'title', alignment: 'center', fontSize: 18 },
        { text: '', margin: [0, 10, 0, 0] },
        dataSource,
      ],
      info: {
        title: `${title}`,
        author: 'Noe Wilber Tipo Mamani',
        subject: 'RESUMEN',
        keywords: 'RESUMEN, RESUMEN ONLINE, WEB',
      },
      styles: {
        title: {
          fontSize: 9,
        },
        name: {
          fontSize: 16,
          bold: true
        },
        jobTitle: {
          fontSize: 8,
          bold: true,
          italics: true,
          fillColor: '#eeffee'
        },
        sign: {
          margin: [0, 50, 0, 10],
          alignment: 'right',
          italics: true
        },
        tableHeader: {
          bold: true,
          fontSize: 9,
          fillColor: '' +
            '#1c2568',
          color: '#ffffff'
        },
        tableBody: {
          bold: false,
          fontSize: 7,
        },
        horiAlignCenter: {
          alignment: 'center',
        },
      },
      pageSize: 'A4',
      pageMargins: [25, 25, 25, 25],
      pageOrientation: isHorizontal ? 'landscape' : 'portrait',
    }
    // pdfMake.createPdf(pdf).open();
    // pdfMake.createPdf(pdf)..download();
    pdfMake.createPdf(pdf).print();

  }
}


