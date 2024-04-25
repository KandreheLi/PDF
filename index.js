const hummus = require('hummus-recipe');
const fs = require('fs');

const pdfstobemerged = fs.readdirSync(`C:\\pdffiles\\tobemerged`)
const outputPDF = 'C:\\pdfFiles\\merged.pdf';
const outputPDFWithPageNum = 'C:\\pdfFiles\\mergedPageNum.pdf';

const pdf = new hummus(`C:\\pdffiles\\tobemerged\\${pdfstobemerged[0]}`, outputPDF);
let i = 1;

for (i = 1; i < pdfstobemerged.length; i++) {
    if (pdfstobemerged[i].includes('.pdf')) {
        pdf
            .appendPage(`C:\\pdffiles\\tobemerged\\${pdfstobemerged[i]}`)
    }

}
pdf.endPDF();

const pdfNew = new hummus(outputPDF, outputPDFWithPageNum);
const info = pdfNew.info()
for (i = 1; i < pdfNew.metadata.pages; i++) {
    pdfNew
        .editPage(i)
        .text(`Page No: ${i.toString()}`, 450, 750, {color:"#000000"})
        .endPage()
}
pdfNew.endPDF();

