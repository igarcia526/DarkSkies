import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { DataService } from './data.service';
import { CurrentWeather } from './CurrentWeather.model';
import { WeatherdataService } from './weatherdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  //users$: User[];

  public currweather: CurrentWeather;

  constructor(private weatherdataservice: WeatherdataService) {}

  title = 'my-app';

  ngOnInit() {
    return this.weatherdataservice.getWeathers()
    .subscribe(data => this.currweather = data);
    
  }
}
