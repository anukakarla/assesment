export interface ColumnConfigI {
  activeColumnNames: Array<{
    field: string;
    displayName: string;
    cellRenderer?: any;
    cellRendererSelector?: any;
    flex?: any;
    width?: any;
    minWidth?: any;
    maxWidth?: any;
  }>;
  enableSorting: Array<string>;
  enableFiltering: Array<string>;
}

export interface DefaultColDefI {
  sortable: boolean;
  resizable: boolean;
  flex: number;
  minWidth: number;
  filter: boolean;
  enableRangeSelection: boolean;
  pagination: boolean;
}
