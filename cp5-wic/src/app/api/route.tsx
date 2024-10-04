import { NextResponse } from "next/server";
import img1 from "@/imgs/img1.jpg";
import img2 from "@/imgs/img2.jpg";
import img3 from "@/imgs/img3.jpg";
import imgVelkowsky from "@/imgs/velikowsky.jpg";
import imgemError from "@/imgs/notfound.png";

const listaImgs = [
    {id: 1, src:"@/imgs/img1.jpg"},
    {id: 2, src:"@/imgs/img2.jpg"},
    {id: 3, src:"@/imgs/img3.jpg"},
    {id: 4, src:"@/imgs/velikowsky.jpg"},
    {id: 5, src:"@/imgs/notfound.png"},
];

export async function GET() {
    return NextResponse.json(listaImgs);
}