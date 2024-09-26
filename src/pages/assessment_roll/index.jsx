import * as React from "react";
import "./index.scss";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import TaxDecModal from "./tax_dec_modal";

import MiniHeader from '../../components/ui/miniHeader/miniHeader';








import Button from "@mui/material/Button";
import { Typography } from "@mui/material";


const columns = [
  {
    field: "PropertyOwner",
    headerName: "PROPERTY OWNER",
    width: 300,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "PropertyIndexNo",
    headerName: "PROPERTY INDEX NO.",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "ARPno",
    headerName: "ARP NO.",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "OwnedAddress",
    headerName: "OWNED ADDRESS",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "Kind",
    headerName: "KIND",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
  },
  {
    field: "Class",
    headerName: "CLASS",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
  },
  {
    field: "LocationOfProperty",
    headerName: "LOCATION OF PROPERTY",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "AssessedValue",
    headerName: "ASSESSED VALUE",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "Taxability",
    headerName: "TAXABILITY",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
  },
  {
    field: "Effectivity",
    headerName: "EFFECTIVITY",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
  },
];

const rows = [
  {
    id: 1,
    PropertyOwner: "MELANIE CAPULONG ALIDIO",
    PropertyIndexNo: "18-968",
    ARPno: "03-0044-04479",
    OwnedAddress: "Washingtin St.",
    Kind: "L",
    Class: "R",
    LocationOfProperty: "San Cristobal",
    AssessedValue: "31,320.00",
    Taxability: "T",
    Effectivity: "2024",
  },
  {
    id: 2,
    PropertyOwner: "MELANIE CAPULONG ALIDIO",
    PropertyIndexNo: "18-968",
    ARPno: "03-0044-04479",
    OwnedAddress: "Washingtin St.",
    Kind: "L",
    Class: "R",
    LocationOfProperty: "San Cristobal",
    AssessedValue: "31,320.00",
    Taxability: "T",
    Effectivity: "2024",
  },
];

function AssessmentRoll() {
  return (
    <>
      <Box
        sx={{
          mt: 10,
        }}
      >
        <MiniHeader leftButton1="Assessment Roll" leftButton2="Archive" />
      </Box>

      <Box sx={{ p: 2, boxSizing: "border-box", maxWidth: "96vw" }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
            mb: 2,
            mt: 1,
          }}
        >
          <div className="table-title">
            <Typography variant="h6" fontWeight={600}>
              ASSESSOR OFFICE
            </Typography>
            <Typography variant="body2">
              Office of the Property Appraiser
            </Typography>
          </div>
          <div className="filter-addTaxdec">
            <TaxDecModal />
          </div>
        </Box>
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
            width: "100%",
            minHeight: "70vh",
            ".data-grid-header": {
              bgcolor: "primary.main",
              color: "#fff",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold", // Make header title bold
            },
            "& .MuiDataGrid-cell": {
              borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border for each cell
            },
            "& .MuiDataGrid-row": {
              "&:last-child .MuiDataGrid-cell": {
                borderBottom: "none", // Remove bottom border from last row
              },
            },
          }}
        />
      </Box>
    </>
  );
}

export default AssessmentRoll;
