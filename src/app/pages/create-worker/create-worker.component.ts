import { Component, OnInit } from '@angular/core';
import { ICategory, IWorker } from 'src/app/common/worker-model';

@Component({
  selector: 'app-create-worker',
  templateUrl: './create-worker.component.html',
  styleUrls: ['./create-worker.component.css']
})
export class CreateWorkerComponent implements OnInit {
  worker:IWorker = {
    name:"",
    age:"",
    address:"",
    mobile:"",
    work_category:"",
    profile:"",
    open_source:false,
    work_slot:""
  }

  category:ICategory[]=[];
  selectedCategory!:ICategory;

  ngOnInit(): void {
      this.initCategory()
  }

  initCategory() {
    this.category = [
      {name:"Carpenter",code:"Carpenter"},
      {name:"Electrican",code:"Electrican"},
      {name:"Plumbing",code:"Plumbing"},
      {name:"Cleaning",code:"Cleaning"},
    ]
  }

  createWorker() {
    this.worker.work_category =  this.getCategory(this.selectedCategory)
    console.log(this.worker);

  }
  getCategory(categ:ICategory) {
    let categoryList =""
    if(Array.isArray(categ)) {
      const cat = categ.map(c=>{
        return c.name
      })
      categoryList=cat.toString();
    }
    return categoryList;
  }
  resetWorker() {
    this.worker.name ="";
    this.worker.age="";
    this.worker.address="";
    this.worker.mobile="";
    this.worker.work_category="";
    this.worker.work_slot=""
    this.worker.open_source = false;
    this.worker.profile="";
    this.selectedCategory = {name:"",code:""}
  }
}
