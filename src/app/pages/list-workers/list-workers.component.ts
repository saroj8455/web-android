import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-workers',
  templateUrl: './list-workers.component.html',
  styleUrls: ['./list-workers.component.css']
})
export class ListWorkersComponent  implements OnInit {


  showSkeleton = true;
  skeletonCards=[1,2,3,4,5,6]

  ngOnInit(): void {
    this.hideSkeleton();
  }

  hideSkeleton() {
    setTimeout(()=>{
      this.showSkeleton = false;
    },2000)
  }
}
