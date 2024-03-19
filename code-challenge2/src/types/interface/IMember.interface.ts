export interface IMember {
    picture: IPicture;
    name: IName;
    email: string;
    phone: number;
    location: ILocation;
    gender: string;
    dob: IDob;
  }
  
  interface ILocation {
    city: string;
    country: string;
  }
  
  interface IPicture {
    large: string;
  }
  
  interface IName {
      first: string;
      last: string;
  }
  
  interface IDob {
      age: string;
  }
  