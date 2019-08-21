import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogConfig, MatSort } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';
import { StudentsComponent } from './app/students/students.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private dialog: MatDialog) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  columnsToDisplay = ['dragDrop', 'id', 'firstName', 'lastName', 'phone', 'status', 'action'];
  dataSource: MatTableDataSource<any>;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(students);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  create() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    this.dialog.open(StudentsComponent, dialogConfig).afterClosed().subscribe(result => {
      students.push(result);
      this.dataSource.paginator = this.paginator;
    });
  }

  edit(studentRow: Student) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = studentRow;
    this.dialog.open(StudentsComponent, dialogConfig);
  }

  delete(index: number) {
    if (confirm('Are you sure you want to delete the record?')) {
      students.splice(index, 1);
      this.dataSource.paginator = this.paginator;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.dataSource.data, event.previousIndex, event.currentIndex);
    this.dataSource.data = _.cloneDeep(this.dataSource.data);
  }
}

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  phone: number;
  status: string;
}

let students: Student[] = [
  {
    id: 1,
    firstName: 'Burger',
    lastName: 'King',
    phone: 1111111111,
    status: 'Delinquent'
  },
  {
    id: 2,
    firstName: 'Mc',
    lastName: 'Donalds',
    phone: 2222222222,
    status: 'Active'
  },
  {
    id: 3,
    firstName: 'Cafe',
    lastName: 'Zupas',
    phone: 3333333333,
    status: 'Active'
  },
  {
    id: 4,
    firstName: 'Himalayan',
    lastName: 'Kitchen',
    phone: 4444444444,
    status: 'Dropped'
  },
  {
    id: 5,
    firstName: 'Dominos',
    lastName: 'Pizza',
    phone: 5555555555,
    status: 'Dropped'
  },
  {
    id: 6,
    firstName: 'Good',
    lastName: 'Earth',
    phone: 6666666666,
    status: 'Delinquent'
  },
  {
    id: 7,
    firstName: 'Tim',
    lastName: 'Hortons',
    phone: 7777777777,
    status: 'Delinquent'
  },
  {
    id: 8,
    firstName: 'Starbucks',
    lastName: 'Latte',
    phone: 888888888,
    status: 'Active'
  },
  {
    id: 9,
    firstName: 'Olive',
    lastName: 'Garden',
    phone: 99999999,
    status: 'Dropped'
  },
  {
    id: 10,
    firstName: 'Dennys',
    lastName: 'Skillet',
    phone: 1000000000,
    status: 'Dropped'
  },
  {
    id: 11,
    firstName: 'Sushi',
    lastName: 'Roll',
    phone: 1111110000,
    status: 'Active'
  },
  {
    id: 12,
    firstName: 'Taco',
    lastName: 'Bell',
    phone: 1222222222,
    status: 'Dropped'
  },
  {
    id: 13,
    firstName: 'KFC',
    lastName: 'Chicken',
    phone: 1333333333,
    status: 'Active'
  }
];
