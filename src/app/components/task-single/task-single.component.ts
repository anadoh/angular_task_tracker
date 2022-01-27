import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faTimes} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-task-single',
  templateUrl: './task-single.component.html',
  styleUrls: ['./task-single.component.css']
})
export class TaskSingleComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter ();

  faTimes = faTimes;
  
  constructor() { }

  ngOnInit(): void {
  }

  onDelete (task: any) {
    this.onDeleteTask.emit(task)
  }

}
