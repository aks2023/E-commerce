import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menuType: string = 'default';
  sellarName: string = '';

  constructor(private route: Router) {

  }
  ngOnInit() {
    this.route.events.subscribe((val: any) => {
      if (val instanceof NavigationEnd) { // Ensure the event is of type NavigationEnd
        if (localStorage.getItem('sellar') && val.url.includes('sellar')) {
          console.log('sellar area');
          this.menuType = "sellar";
          let sellarStore = localStorage.getItem('sellar');
          if (sellarStore) {
            let sellarData = JSON.parse(sellarStore)[0];
            this.sellarName = sellarData.name; // Assign sellarName to the class property
            console.log(this.sellarName);
          }
        } else {
          console.log('outside sellar area');
          this.menuType = "default";
          this.sellarName = ''; // Reset sellarName when outside sellar area
        }
      }
    });
  }

  // ngOnInit() {
  //   this.route.events.subscribe((val: any) => {
  //     if (val instanceof NavigationEnd) { // Ensure the event is of type NavigationEnd
  //       if (localStorage.getItem('sellar') && val.url.includes('sellar')) {
  //         console.log('sellar area');
  //         this.menuType = "sellar";
  //         let sellarStore = localStorage.getItem('sellar');
  //         if (sellarStore) {
  //           let sellarData = JSON.parse(sellarStore)[0];
  //           this.sellarName = sellarData.name; // Assign sellarName here
  //         }
  //       } else {
  //         console.log('outside sellar area');
  //         this.menuType = "default";
  //         this.sellarName = undefined; // Reset sellarName when outside sellar area
  //       }
  //     }
  //   });
  // }

  logout() {
    localStorage.removeItem('sellar');
    this.route.navigate(['home'])
  }

}
