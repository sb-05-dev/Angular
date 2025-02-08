import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from './snap-type.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {

  

   private  facesnaps: FaceSnap[] = [
         new FaceSnap(
         'Archibald',
         'Mon meilleur ami depuis toujours !',
         'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
         new Date(),
         10
         ).withLocation('mon jouet preferer'),
         new FaceSnap(
         'Three Rock Mountain',
         'Un endroit magnifique pour les randonnées.',
         'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
         new Date(),
         6
         ).withLocation('à la montagne'), 
         new FaceSnap(
         'Un bon repas',
         'Mmmh que c\'est bon !',
         'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
         // 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
         new Date(),
         16
         ).withLocation('un bon repas a grignoter'),
     ];
     getFaceSnaps(): FaceSnap[] {
         return [...this.facesnaps];
     };
    
     snapFaceSnapById(faceSnapId: string, snapType:SnapType): void {
       const foundFaceSnap = this.facesnaps.find(faceSnap => faceSnap.id === faceSnapId);
       if (!foundFaceSnap) {
         throw new Error('FaceSnap not found!');
       }
       foundFaceSnap.snap(snapType);
     }

    //  getAllFaceSnaps(): Observable<FaceSnap[]>{
      //  return this.http.get<FaceSnap[]>('https://localhost:4200/facesnap')
    //  }

    // addFaceSnap(formValue: { title: string, description: string, imageUrl:string, location?: string}): void{
    //   const faceSnap: FaceSnap = {
    //     ...formValue,
    //     snaps: 0,
    //     createdAt: new Date(),
    //     id: this.facesnaps[this.facesnaps.length - 1].id + 1,
     
    //   };
    //   this.facesnaps.push(faceSnap)
    // }

  //   addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
  //     const faceSnap: FaceSnap = {
  //         ...formValue,
  //         snaps: 0,
  //         createdDate: new Date(),
  //         id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
  //     };
  //     this.faceSnaps.push(faceSnap);
  // }
            
}