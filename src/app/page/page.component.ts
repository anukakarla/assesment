import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ButtonConfig } from '@collab/comp-library';
import { ASSESSMENT_DUMMY_DATA } from '../shared/constants/admin-dummy-constants';
import { ASSESMENTS_COLUMN_NAME } from '../shared/constants/admin-tool-constants';
import { DEFAULT_COL_DEF } from '../shared/constants/constants';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  rowData: any = ASSESSMENT_DUMMY_DATA;
  public defaultColDef = DEFAULT_COL_DEF;
  public columnNames: any = ASSESMENTS_COLUMN_NAME;
  public isResultLoaded = true;
  public components = {};

  public assessmentFG = this.fb.group({
    question: ['', [Validators.required]],
    assessmentList: this.fb.array([]),
  });

  get assessmentList() {
    return this.assessmentFG.controls['assessmentList'] as FormArray;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  public Add: ButtonConfig = {
    text: 'Add',
    buttonType: 'primary',
    imageUrl: '',
    linkURL: '',
  };
}
