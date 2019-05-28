import { Component, OnInit } from '@angular/core';
import { ItgdataService } from './itgdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'itg-test';

  constructor(private apiService: ItgdataService) {
    apiService.getVehicles().subscribe(res=>console.log(res));
  }
  vehicles = [];
  ngOnInit(){
    this.apiService.getVehicles().subscribe((res:Array<any>)=>{
        res.forEach(element => {
          
           this.apiService.vehicleData(element.id).subscribe(item=>{
                this.vehicles.push({
                  ...element,...item
                });
           });

           
        });
     });
  
  }
}
