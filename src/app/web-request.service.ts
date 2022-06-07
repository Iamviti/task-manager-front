import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class webService {

    readonly ROOT_URL;

    constructor(private http: HttpClient) {
        this.ROOT_URL = 'http://localhost:3000';
    }


    /* USUARIOS */
    //Devolvemos los observables. Nos tendremos que suscribir
    // signup(email: string, password:string){
    //     return this.http.post(`${this.ROOT_URL}/user/signup`, {email,password})
    // }

    // login(email: string, password:string){
    //     return this.http.post(`${this.ROOT_URL}/user`, {email,password})
    // }

    /* LISTAS */

    get(uri:string) {
        return this.http.get(`${this.ROOT_URL}/${uri}`);
    }

    post(uri:string, payload:Object) {
        //  peticion para crear una lista
        return this.http.post(`${this.ROOT_URL}/${uri}`,payload);
    }

    patch(uri:string, payload:Object) {
        //  peticion para actualizar una lista
        return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
    }

    delete(uri:string) {
        return this.http.delete(`${this.ROOT_URL}/${uri}`);
    }


}






