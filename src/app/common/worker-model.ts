export interface IWorker {
  name:string;
  age?:string; // optional parameter
  work_category:string;
  address:string;
  mobile:string;
  profile?:string;
  work_slot?:string;
  open_source?:boolean;
}

export interface ICategory {
  name:string;
  code:string;
}
