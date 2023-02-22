export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}


export interface Seat { 
  row: string, 
  col: number,
}

export interface Guest { 
  id: number;
  companions: number;
  name: string;
  packageID: number;
  seated: boolean;
}