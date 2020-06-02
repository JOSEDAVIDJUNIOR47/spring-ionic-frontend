import { HttpClient, HttpHeaders } from "@angular/common/http";
import { StorageService } from "../storage.service";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { ClienteDTO } from "../../models/cliente.dto";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class ClienteService {
    constructor(public http: HttpClient, public storage: StorageService){

    }


findByEmail(email: string) {

    let token = this.storage.getLocalUser().token;
    let authHeader = new HttpHeaders({'Authorization': 'Bearer ' + token});

    return this.http.get(
        API_CONFIG.baseUrl+'/clientes/email?value='+email,
        {'headers':authHeader}
    );
    
}
getImageFromBucket(id : string) : Observable<any>{
    let url = API_CONFIG.buckeBaseUrl+"/cp"+id+".jpg"
    return this.http.get(url, {responseType : 'blob'});
}

insert(obj : ClienteDTO){
    return this.http.post(
        API_CONFIG.baseUrl+'/clientes',
        obj,
        {
            observe: 'response',
            responseType: 'text'
        }
    )
}



}
