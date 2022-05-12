import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConnectionType } from '@vfpricing/vf-enums';

@Injectable({providedIn: 'root'})
export class CommonService {
    
   public connectionType = new BehaviorSubject<ConnectionType | null>(null);
}