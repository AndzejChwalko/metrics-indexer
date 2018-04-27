import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private menuConfig: any = {
    "animation": "collapse",
        "offset": {
            "top": 55
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
          "link" : "/catholic/birth"
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

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
  }

  public onMenuClose(){
    console.log("menu closed");
  }
  public onMenuOpen(){
    console.log("menu Opened");
  }
  private onItemSelect(item:any){
    this.router.navigate([item.link]);
    console.log(item);
  }
}
