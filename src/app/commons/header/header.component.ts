import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private menuConfig: any = {
    animation: "collapse",
    offset: {
      top: 60
    },
    closeOnCLick: true
  };

  private menuItems: any[] = [
    {
      "title": "Catholic",
      "link" : "#",
      "subItems" : [
        {
          "title": "Birth",
          "link" : "/catholic/birth",
          "subitems": [
            {
              "title" : "One",
              "link" : "/home"
            }
          ]
        },
        {
          "title": "Marriage",
          "link" : "/catholic/marriage"
        },
        {
          "title": "Death",
          "link" : "/catholic/death"
        }
      ]
    },
    {
      "title": "Ortodox",
      "link" : "#",
      "subItems" : [

      ]
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router, private translate: TranslateService) {
    //this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
  }

  public onMenuClose(){
    console.log("menu closed");
    this.switchUntouchedClass('content-container');
  }
  public onMenuOpen(){
    this.switchUntouchedClass('content-container');
    console.log("menu closed");
  }
  private onItemSelect(item:any){
    this.switchUntouchedClass('content-container');
    this.router.navigate([item.link]);
    console.log(item);
  }


  private switchUntouchedClass(elemName: string):void {
    let formElem = document.getElementsByClassName(elemName)[0];
    formElem.classList.contains('untouched') ? formElem.classList.remove('untouched') : formElem.classList.add('untouched');
  }

  public switchLanguage (lang: string) {  
    this.translate.use(lang); 
  }
}
