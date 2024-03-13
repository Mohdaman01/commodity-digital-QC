import { NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";

export const POST = async (req) => {

    const data = await req.formData();

    const file = await data.get('file');

    const pdfDoc = await PDFDocument.create();

    const imgBuffer = await file.arrayBuffer();

    const pngImage = await pdfDoc.embedJpg(imgBuffer);

    const page = pdfDoc.addPage();

    page.drawImage(pngImage, {
        x: 0,
        y: 0,
        width: page.getWidth(),
        height: page.getHeight()
    });
    const pdfBytes = await pdfDoc.save();

    const res = new NextResponse(pdfBytes, {
        headers: {
            "Content-Type": "application/pdf",
        },
        status: 200,
    })
    return res
}

