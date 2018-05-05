import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private menuConfig: any = {
    animation: "collapse",
    offset: {
      top: 60
    },
    closeOnCLick: true
  };

  private menuItems: any[];

  private menuEng: any[] = [
    {
      "title": "Catholic metrics",
      "link" : "#",
      "subItems" : [
        {
          "title": "Birth",
          "link" : "/catholic/birth",
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
      "title": "Orthodox metrics",
      "link" : "#",
      "subItems" : [

      ]
    }
  ];

  private menuRus: any[] = [
    {
      "title": "Католические метрики",
      "link" : "#",
      "subItems" : [
        {
          "title": "О родившихся",
          "link" : "/catholic/birth",
        },
        {
          "title": "О бракосочетавшихся",
          "link" : "/catholic/marriage"
        },
        {
          "title": "Об умерших",
          "link" : "/catholic/death"
        }
      ]
    },
    {
      "title": "Православные метрики",
      "link" : "#",
      "subItems" : [

      ]
    }
  ];

  private menuBel: any[] = [
    {
      "title": "Каталіцкія метрыкі",
      "link" : "#",
      "subItems" : [
        {
          "title": "Аб нарадзiўшыхся",
          "link" : "/catholic/birth",
        },
        {
          "title": "Аб шлюбах",
          "link" : "/catholic/marriage"
        },
        {
          "title": "Аб памерлых",
          "link" : "/catholic/death"
        }
      ]
    },
    {
      "title": "Праваслаўныя метрыкі",
      "link" : "#",
      "subItems" : [

      ]
    }
  ];

  constructor (private route: ActivatedRoute, private router: Router, private translate: TranslateService) {
    this.translate.onLangChange
      .subscribe((event: LangChangeEvent) => {
          this.highlightCurentLangBtn(this.translate.currentLang);
          this.switchMenuLang(this.translate.currentLang);
      });
  }

  ngOnDestroy() {
    this.translate.onLangChange.unsubscribe();
  }

  ngOnInit() {
    let currLang = this.translate.defaultLang;
    this.highlightCurentLangBtn(currLang);
    this.switchMenuLang(currLang);
  }

  private switchMenuLang(lang: string): void {
    if (lang === 'en') {
      this.menuItems = this.menuEng;
    } else if (lang === 'ru') {
      this.menuItems = this.menuRus;
    } else if (lang === 'be') {
      this.menuItems = this.menuBel;
    } else {
      throw new Error("Unsupported lang");
    }
  }

  private highlightCurentLangBtn(lang: string) : void {
    this.removeHighlightCurrentLangBtn();
    Array.from(document.querySelectorAll('.i18n-button')).forEach(element => {
      if (element.getAttribute('name') === lang) {
        element.classList.add('current');
      }
    });
  }

  private removeHighlightCurrentLangBtn(): void {
    Array.from(document.querySelectorAll('.current')).forEach(element => {
      element.classList.remove('current');
    });
  }

  public onMenuClose(){
    this.switchUntouchedClass('content-container');
  }
  public onMenuOpen(){
    this.switchUntouchedClass('content-container');
  }
  private onItemSelect(item: any){
    this.switchUntouchedClass('content-container');
    this.router.navigate([item.link]);
  }

  private switchUntouchedClass(elemName: string):void {
    let formElem = document.getElementsByClassName(elemName)[0];
    let classList =  formElem.classList;
    classList.contains('untouched') ? classList.remove('untouched') : classList.add('untouched');
  }
}
