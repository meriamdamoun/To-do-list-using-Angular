import Swal from 'sweetalert2';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: { title: string, done: boolean }[] = [
    { title: 'Do the tasks', done: false },
    { title: 'Read a book', done: false },
    { title: 'Work out', done: false },
    { title: 'Watch movie', done: false }
  ];

  newTask = {
    title: "",
    done: false 
  };

  checkedIndex = -1;

  checkedList: { title: string, done: boolean }[] = [];

  completedTasks: { title: string, done: boolean }[] = [];
  
  addTask() {
    if (this.newTask.title.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Task title cannot be empty.",
      });
      return;
    }
    
    this.tasks.push(this.newTask);
    this.newTask = { title: "", done: false };
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Task Added!",
      text: "Your task has been added successfully.",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  
  

  updatecheckedList(newTask: { title: string, done: boolean }) {
    const index = this.tasks.findIndex(t => t.title === newTask.title);
    this.tasks[index].done = newTask.done;

    if (this.tasks[index].done) {
      this.checkedList.push(newTask);
    } else {
      const checkedIndex = this.checkedList.findIndex(t => t.title === newTask.title);
      this.checkedList.splice(checkedIndex, 1);
    }

    
  }

  
}
