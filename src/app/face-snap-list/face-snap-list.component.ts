import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../service/face-snaps.service';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];
  faceSnap$!: Observable<FaceSnap[]>;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {


    // this.faceSnap$ = this.faceSnapsService.getAllFaceSnaps()
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();

    interval(1000).pipe(
       tap(console.log)
     ).subscribe
  }

}
