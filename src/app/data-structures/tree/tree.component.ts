import { Component, OnInit } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Node } from './Node';

/**
 * GUI variation for tree
 */
 @Component({
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  faCircle = faCircle;
  
  root:Node;
  printArray = [];
 constructor() {
  this.root = new Node(7,null);
  Node.insert(this.root,5);
  Node.insert(this.root,6);
  Node.insert(this.root,1);
  Node.insert(this.root,2);
  Node.insert(this.root,3);
  Node.insert(this.root,4);
  Node.traverse(this.root,(data) => console.log(data,' level-', Node.level));
 }
  ngOnInit(): void {
    
  }

 printTree(root:Node, level:number = 0) {
  console.log(root.data);
  let leftArray = [];
  let rightArray = [];
  level++; // Entering new node increment level
  if(!!root.leftNode){
    leftArray = this.printTree(root.leftNode, level)
  } 
  if(!!root.rightNode){
    rightArray = this.printTree(root.rightNode, level);
  }
  if (!root.rightNode && !root.leftNode) { // Leaf node with no left and right node
    return [null,root.data];
  }
  level--; 
  this.printArray.push(leftArray.concat(rightArray));
 }
}
