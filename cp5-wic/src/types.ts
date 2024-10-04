

export interface ImageSrc {
    src: string;  
    height: number;  
    width: number;   
    blurDataURL: string; 
    blurWidth: number;  
    blurHeight: number; 
}

export type tipoImage = {
    id: number;  
    url: ImageSrc;  
}