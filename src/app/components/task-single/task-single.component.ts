import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../Task';
import { faTimes} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-single',
  templateUrl: './task-single.component.html',
  styleUrls: ['./task-single.component.css']
})
export class TaskSingleComponent implements OnInit {
  @Input() task!: Task;
  faTimes = faTimes;
  
  constructor() { }

  ngOnInit(): void {
  }

}
