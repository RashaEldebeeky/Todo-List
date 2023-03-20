export const columnDefs = [
  {
    headerName: 'Done',
    field: 'done',
    headerClass: 'text-center',
    cellStyle: { textAlign: 'center' },
    width: 100,
    sortable: true,
    valueGetter: (params: any) => {
      return params.data.done !== false;
    },
    cellRenderer: (params: any) => {
      const value = params.data.done !== false;
      return `<input
        type="checkbox"
        ${value ? 'checked' : ''}
      />`;
    },
  },
  { headerName: 'Label', field: 'label', filter: 'agTextColumnFilter' },
  {
    headerName: 'Description',
    field: 'description',
    filter: 'agTextColumnFilter',
  },
  { headerName: 'Category', field: 'category', filter: 'agTextColumnFilter' },
  {
    headerName: 'Completed At',
    field: 'completedDate',
    headerClass: 'text-center',
    cellStyle: { textAlign: 'center' },
    valueGetter: (params: any) => {
      return params.data.done !== false ? params.data.done : '-';
    },
  },
  {
    headerName: '',
    field: 'edit',
    width: 50,
    cellStyle: { textAlign: 'center' },
    cellRenderer: () => {
      return `<i class="bi bi-pencil-square"></i>`;
    },
  },
  {
    headerName: '',
    field: 'delete',
    width: 50,
    cellStyle: { textAlign: 'center' },
    cellRenderer: () => {
      return `<i class="bi bi-trash"></i>`;
    },
  },
];
