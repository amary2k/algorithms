import { Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns = ['index','step'];
  fetchedData:Element[] = [];
  dataSource:Element[] = [{step:[], index:0}];
  @Input() steps = [];
  @Input() stylingArray = [];
  start: number = 0;
  limit: number = 10;
  end: number = this.limit + this.start;
  selectedRowIndex: number = null;

  constructor() {
    this.resetIndex();
  }

  ngOnInit(): void {
    // this.fetchedData = this.fetchData();
    // this.dataSource = this.getTableData(this.start, this.end);
    // this.updateIndex();
    // this.resetIndex();
  }

  onTableScroll(e) {
    const tableViewHeight = e.target.offsetHeight // viewport
    const tableScrollHeight = e.target.scrollHeight // length of all table
    const scrollLocation = e.target.scrollTop; // how far user scrolled
    
    // If the user has scrolled within 200px of the bottom, add more data
    const buffer = 200;
    const limit = tableScrollHeight - tableViewHeight - buffer;    
    if (scrollLocation > limit) {
      let data = this.getTableData(this.start, this.end);
      this.dataSource = this.dataSource.concat(data);
      this.updateIndex();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.resetIndex();
    console.log('Changes:',changes);
    this.fetchedData = this.fetchData();
    this.dataSource = this.getTableData(this.start, this.end);
    this.updateIndex();
  }

  fetchData():Element[] {
    return this.steps.map((stepElement, index) => {
      return {
        step:stepElement,
        index:index+1,
        stylingArray:!!this.stylingArray[index]? this.stylingArray[index]:[]
      }
    });
  }

  getTableData(start, end):Element[] {
    return this.fetchedData.filter((value, index) => index >= start && index < end);
  }

  updateIndex() {
    this.start = this.end;
    this.end = this.limit + this.start;
  }

  resetIndex() {
      this.start = 0;
      this.end = this.limit + this.start;
  }

  selectedRow(row) {
    console.log('selectedRow', row)
  }

  
}
export interface Element {
  step: StyleNumber[];
  index: number;
}

export interface StyleNumber {
  step: number;
  style: boolean;
}

