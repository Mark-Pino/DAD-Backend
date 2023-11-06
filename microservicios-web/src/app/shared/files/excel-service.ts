import {Injectable} from '@angular/core';

import * as fs from 'file-saver';
import * as ExcelProper from 'exceljs';


@Injectable()
export class ExcelService {
  constructor() {
  }

  public async generateExcel(title: string, header: any, data: any) {
    const workbook: ExcelProper.Workbook = new ExcelProper.Workbook();
    const worksheet = workbook.addWorksheet('Reporte Excel');
    const color = 'be091d';
    const color_text = 'FFFFFF';
    const rowtitle = worksheet.addRow(1);
    const empresa = rowtitle.getCell(1);
    empresa.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: {argb: color}
    };
    worksheet.getCell('A1:B1').value = {
      richText: [
        {font: {italic: true, bold: true, color: {argb: color_text}}, text: 'LIDMAN'},
      ]
    };


    worksheet.mergeCells(`A3:${abcTitle[header.length]}3`);
    const row = worksheet.getRow(3);
    row.getCell(1).value = title;
    row.font = {italic: true, family: 4, size: 16, underline: 'double', bold: true,};
    row.alignment = {horizontal: 'center'};
    worksheet.addRow(header);
    data.forEach((d: any) => {
      const row = worksheet.addRow(d);
    });
    await workbook.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      fs.saveAs(blob, 'ReporteExcel.xlsx');
    });
  }

  private sysDate(): string {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const hour = today.getHours();
    const min = today.getMinutes();
    return `${day}/${month}/${year} ${this.addZero(hour + '')}:${this.addZero(min + '')}`;
  }

  private addZero(value: any): string {
    let dataValue: string;
    if (+value < 10) {
      dataValue = '0' + value.toString();
    } else {
      dataValue = value;
    }
    return dataValue;
  }
}

export const abcTitle: any = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

