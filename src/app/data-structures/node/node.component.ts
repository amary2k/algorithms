import { Component, OnInit } from '@angular/core';

import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.sass']
})
export class NodeComponent implements OnInit {
  faCircle = faCircle;
  constructor() { 
    
  }

  ngOnInit() {
  }

}
