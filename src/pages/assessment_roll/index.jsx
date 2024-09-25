import * as React from "react";
import "./index.scss";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import TaxDecModal from "./tax_dec_modal";
import MiniHeader from '../../components/ui/miniHeader/miniHeader';
import Button from '@mui/material/Button';






const columns = [
  {
    field: 'PropertyOwner',
    headerName: 'PROPERTY OWNER',
    width: 300,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: 'PropertyIndexNo',
    headerName: 'PROPERTY INDEX NO.',
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: 'ARPno',
    headerName: 'ARP NO.',
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: 'OwnedAddress',
    headerName: 'OWNED ADDRESS',
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: 'Kind',
    headerName: 'KIND',
    width: 200,
    editable: false,
    align: 'center',
    headerAlign: 'center',
    headerClassName: "data-grid-header",
  },
  {
    field: 'Class',
    headerName: 'CLASS',
    width: 200,
    editable: false,
    align: 'center',
    headerAlign: 'center',
    headerClassName: "data-grid-header",
  },
  {
    field: 'LocationOfProperty',
    headerName: 'LOCATION OF PROPERTY',
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: 'AssessedValue',
    headerName: 'ASSESSED VALUE',
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: 'Taxability',
    headerName: 'TAXABILITY',
    width: 200,
    editable: false,
    align: 'center',
    headerAlign: 'center',
    headerClassName: "data-grid-header",
  },
  {
    field: 'Effectivity',
    headerName: 'EFFECTIVITY',
    width: 200,
    editable: false,
    align: 'center',
    headerAlign: 'center',
    headerClassName: "data-grid-header",
  },
];

const rows = [
  { id: 1, PropertyOwner: 'MELANIE CAPULONG ALIDIO', PropertyIndexNo: '18-968', ARPno: '03-0044-04479', OwnedAddress: 'Washingtin St.', Kind: 'L', Class: 'R', LocationOfProperty: 'San Cristobal', AssessedValue: '31,320.00', Taxability: 'T', Effectivity: '2024' },
  { id: 2, PropertyOwner: 'MELANIE CAPULONG ALIDIO', PropertyIndexNo: '18-968', ARPno: '03-0044-04479', OwnedAddress: 'Washingtin St.', Kind: 'L', Class: 'R', LocationOfProperty: 'San Cristobal', AssessedValue: '31,320.00', Taxability: 'T', Effectivity: '2024' },
];


function AssessmentRoll() {

  return (
    <>
      <div className="miniHeader">
        <MiniHeader
          leftButton1="Assessment Roll"
          leftButton2="Archive"
        />
      </div>


      <Box sx={{ height: '75vh', maxWidth: '96.6vw', p: 2}}>
      <div className="table-header">
        <div className="table-title">
          <h3>ASSESSOR OFFICE</h3>
          <p>Office of the Property Appraiser</p>
        </div>
        <div className="filter-addTaxdec">
          <TaxDecModal />
        </div>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
        sx={{
          ".data-grid-header": {
            bgcolor: 'primary.main',
            color: '#fff',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold', // Make header title bold
          },
          '& .MuiDataGrid-cell': {
            borderRight: '1px solid rgba(224, 224, 224, 1)', // Right border for each cell
          },
          '& .MuiDataGrid-row': {
            '&:last-child .MuiDataGrid-cell': {
              borderBottom: 'none', // Remove bottom border from last row
            },
          },
        }}
      />
    </Box>
    </>
  );
}

export default AssessmentRoll;
