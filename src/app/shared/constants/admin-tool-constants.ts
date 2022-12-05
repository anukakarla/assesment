import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { AgRenderComponent } from 'src/app/ag-render/ag-render.component';

export const ASSESMENTS_COLUMN_NAME = {
  activeColumnNames: [
    {
      field: 'reqid',
      displayName: 'Req ID',
      flex: 1,
    },
    { field: 'assessmentname', displayName: 'Assesment Name', flex: 1 },
    { field: 'createdby', displayName: 'Created By', flex: 1 },
    { field: 'createdon', displayName: 'Created On', flex: 1 },
    {
      field: 'actions',
      displayName: 'Actions',
      flex: 1,
      cellRendererSelector: (params: ICellRendererParams) => {
        //we cannot add component in cellrenderer
        return {
          component: AgRenderComponent,
          params: params.value,
        };
      },
    },

    // {
    //   field: 'actions',
    //   displayName: 'Actions',
    //   flex: 1,
    //   render: function (params: any) {
    //     return AgRenderComponent;
    //   },
    // },
  ],
  enableSorting: [],
  enableFiltering: [],
};

export const ASSESMENTS_COLUMN_HEADER: ColDef[] = [
  {
    headerName: 'Req ID',
    field: 'reqidq',
    width: 200,
    sortable: false,
    filter: false,
  },
  {
    headerName: 'Assessment Name',
    field: 'assessmentname',
    flex: 1,
    maxWidth: 120,
    sortable: false,
    filter: false,
  },
  {
    headerName: 'Created By',
    field: 'createdby',
    flex: 1,
    maxWidth: 120,
    sortable: false,
    filter: false,
  },
  {
    headerName: 'Created On',
    field: 'createdon',
    flex: 1,
    minWidth: 120,
    sortable: false,
    filter: false,
    // cellRenderer: () => {
    //   return `name`;
    // },
  },
  {
    headerName: 'Actions',
    field: 'actions',
    flex: 1,
    minWidth: 120,
    sortable: true,
    filter: true,
  },
];
