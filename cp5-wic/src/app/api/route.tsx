import { NextResponse } from "next/server";
import img1 from "@/imgs/img1.jpg";
import img2 from "@/imgs/img2.jpg";
import img3 from "@/imgs/img3.jpg";
import imgVelkowsky from "@/imgs/velikowsky.jpg";
import imgemError from "@/imgs/notfound.png";

const listaImgs = [
    {id: 1, url:img1},
    {id: 2, url:img2},
    {id: 3, url:img3},
    {id: 4, url:imgVelkowsky},
    {id: 5, url:imgemError},
];

export async function GET() {
    return NextResponse.json(listaImgs);
}