import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface StudentRow {
  id: number;
  firstName: string;
  lastName: string;
  phone: number;
  status: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  localStudentRow = {
    id: null,
    firstName: '',
    lastName: '',
    phone: null,
    status: ''
  };

  constructor(private dialogRef: MatDialogRef<StudentsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: StudentRow) { }

  ngOnInit() {
    this.localStudentRow = this.data || this.localStudentRow;
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.localStudentRow);
  }
}
