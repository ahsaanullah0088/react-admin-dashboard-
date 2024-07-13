// import React from 'react';
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import './DataTable.scss';
// import { Link } from 'react-router-dom';

// const DataTable = (props) => {
//   const handleDelete = (id) => {
//     // Delete the item
//   };

//   const actionColumn = {
//     field: 'action',
//     headerName: 'Action',
//     width: 200,
//     renderCell: (params) => {
//       return (
//         <div className="action">
//           <Link to={`/${props.slug}/${params.row.id}`}>
//             <img src="/view.svg" alt="" />
//           </Link>
//           <div
//             className="delete"
//             onClick={() => handleDelete(params.row.id)}
//           >
//             <img src="/delete.svg" alt="" />
//           </div>
//         </div>
//       );
//     },
//   };

//   return (
//     <div className="dataTable">
//       <DataGrid
//         className="dataGrid"
//         rows={props.rows}
//         columns={[...props.columns, actionColumn]}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 10,
//             },
//           },
//         }}
//         slots={{ toolbar: GridToolbar }}
//         slotProps={{
//           toolbar: {
//             showQuickFilter: true,
//             quickFilterProps: { debounceMs: 500 },
//           },
//         }}
//         pageSizeOptions={[5]}
//         checkboxSelection
//         disableRowSelectionOnClick
//         disableColumnFilter
//         disableDensitySelector
//         disableColumnSelector
//       />
//     </div>
//   );
// };

// export default DataTable;

import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import './DataTable.scss';
import { Link } from 'react-router-dom';

const DataTable = (props) => {
  const handleDelete = (id) => {
    //delete the item
    // mutation.mutate(id)
  };

  const actionColumn = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            pageSize: 10,
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
