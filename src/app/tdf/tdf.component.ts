import { Component } from '@angular/core';
import { Student } from '../student';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {
  SelectedHobbies:string[]=[];
  std=new Student()
  constructor(){
    this.std.country="";
    
  }
save(formData:any)
{
  //console.log(formData);
 //console.log(formData.value);
//  const std=new Student(formData.name,formData.age,formData.email);
//  console.log(std);
console.log(this.std);
console.log(this.SelectedHobbies);
// formData.reset();
// this.resetForm(formData);

}
onChange(e:any)
{
   let SelectedValue=e.target.value;
   let checked=e.target.checked;
   if(checked)
   {
      this.SelectedHobbies.push(SelectedValue);
   }
   else{
      let index=this.SelectedHobbies.indexOf(SelectedValue);
      this.SelectedHobbies.splice(index,1);
   }
   console.log(this.SelectedHobbies);
// console.log(SelectedValue);
// console.log(checked);
// console.log(e.target.value,e.target.checked);
}
resetForm(myForm:NgForm)
{
  myForm.resetForm();
}
ngOnInit():void{}
}
