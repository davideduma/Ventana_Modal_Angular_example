import { Component, ViewChild, TemplateRef} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  @ViewChild("myModalInfo", {static: false}) myModalInfo: TemplateRef<any>;
  @ViewChild("myModalConf", {static: false}) myModalConf: TemplateRef<any>;
  
  constructor(private modalService: NgbModal){

  }

  mostrarModalInfo(){
    this.modalService.open(this.myModalInfo);
  }

  mostrarModalConf(){
    this.modalService.open(this.myModalConf).result.then( r => {
      console.log("Tu respuesta ha sido: " + r);
    }, error => {
      console.log(error);
    });
  }

}
