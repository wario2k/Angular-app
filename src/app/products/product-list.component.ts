import {    Component, OnInit   } from '@angular/core';
import {    IProduct    } from './product';
import { ValueTransformer } from '@angular/compiler/src/util';
import { ProductService } from './product.service';
@Component({
    templateUrl : './product-list.component.html',
    styleUrls:['./product-list.component.css']
})
   
export class ProductListComponent implements OnInit{
    errorMessage:string;
    imageWidth : number = 50;
    imageMargin : number = 2;
    products: IProduct[] = []; 

    filteredProducts : IProduct[];
    pageTitle   :   string = 'Product List';
    showImage   :   boolean = false;
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }


    constructor(private _productService : ProductService){
       

    }
    
    onRatingClicked(message : string) :void{
        this.pageTitle = 'Product List: '+message; 
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage() : void 
    {
        this.showImage = !this.showImage;
    }
    ngOnInit() :void //good place to init data
    {
        this._productService.getProducts()
        .subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
                error =>this.errorMessage = <any>error
        )
        
        
    }
}


