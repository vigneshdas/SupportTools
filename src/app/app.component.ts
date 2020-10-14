import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SPCSupportTool';
  dataArr: Array<any>;

  dataTransform(data: HTMLInputElement){
    const trasformedData = "'"+data.value.replace(/\n/g, "','");
    data.value = trasformedData;
  }

  dataTransform1(data: HTMLInputElement){
    let formatedData = '';
    this.dataArr = data.value.split('\n');
    this.dataArr.forEach((value)=>{
        if (value !== undefined && value !== ''){
          const index = value.indexOf('/');
          const length = value.length-1;
          formatedData +="'"+value.substring(0, index)+"',";
        }
    });
    if (formatedData !== undefined){
      data.value = formatedData;
    }
  }

  addFirst(){

  }

  addLast(){

  }
}
