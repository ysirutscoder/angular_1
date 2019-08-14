export class Planet {
    "name": string;
    "rotation_period": number;
    "orbital_period": number;
    "diameter": number;
    "climate": string;
    "gravity": string;
    "terrain": string;
    "surface_water": number;
    "population": number;
    "residents": string[];
    "films": string[];
    "created": string;
    "edited": string;
    "url": string;
    constructor(name: string,rot:number,orb:number,diam:number,clm:string,grav:string,ter:string,surf:number,popul:number,res:string[],films:string[],crt:string,edited:string,url:string) {
        this.name = name;
        this.rotation_period=rot;
        this.climate=clm;
        this.created=crt;
        this.diameter=diam;
        this.edited=edited;
        this.films=films;
        this.url=url;
        this.gravity=grav;
        this.terrain=ter;
        this.orbital_period=orb;
        this.surface_water=surf;
        this.population=popul;
        this.residents=res;
    }
}
