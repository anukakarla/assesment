import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ButtonConfig } from '@collab/comp-library';
import { ModalConfig } from '../shared/component/modal/modal.config';
import { ModalService } from '../shared/component/modal/service/modal.service';
import { ASSESSMENT_DUMMY_DATA } from '../shared/constants/admin-dummy-constants';
import { ASSESMENTS_COLUMN_NAME } from '../shared/constants/admin-tool-constants';
import { DEFAULT_COL_DEF } from '../shared/constants/constants';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit, AfterViewInit {
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
  constructor(private fb: FormBuilder, private service: ModalService) {}

  ngOnInit(): void {}
  public AddAssessmentConfig: ButtonConfig = {
    text: '+ Add Assesment',
    buttonType: 'primary',
    imageUrl: '',
    linkURL: '',
  };
  public openModal() {
    this.service.open('CreateAssessmentModal');
  }
  public CreateAssessmentModal: ModalConfig = {
    modalType: 'CreateAssessmentModal',
    titleSection: {
      title: 'Add Assessment',
      titleClose: true,
    },
    dismissButtonLabel: 'Cancel',
    closeButtonLabel: 'Save',
  };
  ngAfterViewInit() {
    const FIRST_assessment = this.fb.group({
      assessment: [''],
    });
    this.assessmentList.push(FIRST_assessment);
  }
  public addAssessment() {
    const NEW_ASSESSMENT = this.fb.group({
      assessment: ['', Validators.required],
    });
    this.assessmentList.push(NEW_ASSESSMENT);
  }

  public removeAssessment(index: number) {
    if (this.assessmentList.length == 1) {
      return;
    }
    this.assessmentList.removeAt(index);
  }

  public submitForm() {}
}
