export interface IProduct
{
    productId   :   number;
    productName :   string;
    productCode :   string;
    releaseDate :   string;
    description :   string;
    price       :   number;
    starRating  :   number;
    imageUrl    :   string;
}

//class

export class Product implements IProduct{
    constructor(
        public productId: number,
        public productName:string,
        public productCode:string,
        public releaseDate:string,
        public price:number,
        public description:string,
        public starRating:number,
        public imageUrl:string 
    ){}
        calculateDiscout(percent:number):number{
            return this.price - (this.price *percent/100);
        }
}