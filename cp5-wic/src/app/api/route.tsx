import { NextResponse } from "next/server";
import img1 from "@/imgs/img1.jpg";
import img2 from "@/imgs/img2.jpg";
import img3 from "@/imgs/img3.jpg";
import imgVelkowsky from "@/imgs/velikowsky.jpg";
import imgemError from "@/imgs/notfound.png";

const listaImgs = [
    {id: 1, url:},
    {id: 2, url:},
    {id: 3, url:},
    {id: 4, url:},
    {id: 5, url:},
];

export async function GET(request: Request) {
    return NextResponse.json(listaImgs);
}