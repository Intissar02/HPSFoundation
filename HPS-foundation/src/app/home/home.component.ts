import { Component, AfterViewInit } from '@angular/core';

declare var $: any;   

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    $('#carouselExampleIndicators').carousel();
    let amountRaised = 1000;
    let goal = 5000;
    let progress = (amountRaised / goal) * 100;

$('#progress').css('width', progress + '%').attr('aria-valuenow', progress);

  }

}
