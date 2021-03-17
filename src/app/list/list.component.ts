import { Component, OnInit } from '@angular/core';

class Task {
  id: number;
  name: string;
  finished = false;

  constructor(input: object = {}) {
    Object.assign(this, input);
  }
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // instance for new tasks
  pendingTask = new Task();

  public tasks: Task[] = [new Task({ name: 'Call Adam' }),
                          new Task({ name: 'Buy Flowers' }),
                          new Task({ name: 'Send Email to John'}),
                          new Task({ name: 'Buy Concert Tickets', finished: true}),
                          new Task({ name: 'Call Dad', finished: true}),
                        ];
  constructor() { }

  ngOnInit(): void {
  }



  addTask(task: Task) {
    const newTask = new Task(task);
    this.tasks.push(newTask);
  }

  toggleFinished(task: Task) {
    task.finished = !task.finished;
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
