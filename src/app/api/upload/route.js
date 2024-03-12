import { NextResponse } from "next/server";

export const POST = async (req) => {

    const data = await req.formData();
    const file = data.get('file');
    console.log(file);

    return NextResponse.json({
        success: true
    })

}

