export class Mobile{

    private name: string;
    private  model: string;
    private  trademark: string;
    private  sdSize: number;
    private  color: string;
    private  is5G: boolean;
    private  cameraNumber: number;
    private  price: number;

    constructor(name:string, model:string, trademark:string, sdSize:number, color:string, is5G:boolean, cameraNumber:number, price:number){
        this.name=name;
        this.model=model;
        this.trademark=trademark;
        this.sdSize=sdSize;
        this.color=color;
        this.is5G=is5G;
        this.cameraNumber=cameraNumber;
        this.price=price;
    }

    public getName():string{
        return this.name;
    }

    public setName(name:string){
        this.name=name;
    }

    public getModel():string{
        return this.model;
    }

    public setModel(model:string){
        this.model=model;
    }

    public getTrademark():string{
        return this.trademark;
    }

    public setTrademark(trademark:string){
        this.trademark=trademark;
    }

    public getSdSize():number{
        return this.sdSize;
    }

    public setSdSize(sdSize:number){
        this.sdSize=sdSize;
    }

    public getColor():string{
        return this.color;
    }

    public setColor(color:string){
        this.color=color;
    }

    public getIs5G():boolean{
        return this.is5G;
    }

    public setIs5G(is5G:boolean){
        this.is5G=is5G;
    }

    public getCameraNumber():number{
        return this.cameraNumber;
    }

    public setCameraNumber(cameraNumber:number){
        this.cameraNumber=cameraNumber;
    }

    public getPrice():number{
        return this.price;
    }

    public setPrice(price:number){
        this.price=price;
    }

    public toString(){
        console.log("\nThe characteristics of the mobile name are:\n"+"Name: "+this.name+"\nModel: "+this.model+"\nTrademark: "+this.trademark+"\nSD Size (GB): "+this.sdSize+"\nColor: "+this.color
        +"\nIs 5g?: "+this.is5G+"\nNumber of Cameras: " +this.cameraNumber);
    }
}
