const hummus = require('hummus-recipe')

const pdfArray = ['C:\\pdfFiles\\nov2019.pdf','C:\\pdfFiles\\dec2019.pdf','C:\\pdfFiles\\jan2020.pdf']
const outputPDF = 'C:\\pdfFiles\\merged.pdf';

const pdf = new hummus(pdfArray[0], outputPDF);

let i=1;

for(i=1;i<pdfArray.length;i++)
{
    pdf.appendPage(pdfArray[i])
}
pdf.endPDF();