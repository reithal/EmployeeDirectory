import React from "react";
import { employees } from "../../store/employees";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBInput,
  MDBBtn,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";

const TablePage = (props) => {
  const data_panel = {
    columns: [
      {
        label: <MDBInput label=" " type="checkbox" id="checkbox5" />,
        field: "check",
        sort: "asc",
      },

      {
        label: "First Name",
        field: "first",
        sort: "asc",
      },
      {
        label: "Last Name",
        field: "last",
        sort: "asc",
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
      },
      {
        label: "Department",
        field: "department",
        sort: "asc",
      },
      {
        label: "DOB",
        field: "dob",
        sort: "asc",
      },
    ],
  };

  const values = employees.map((employee) => ({
    check: <MDBInput label=" " type="checkbox" index />,
    first: employee.firstName,
    last: employee.lastName,
    email: employee.email,
    department: employee.department,
    DOB: employee.dob,
  }));

  return (
    <MDBCard narrow>
      <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
        <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-th-large mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-columns mt-0"></i>
          </MDBBtn>
        </div>
        <a href="#" className="white-text mx-3">
          Employee Directory
        </a>
        <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-pencil-alt mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-times mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-info-circle mt-0"></i>
          </MDBBtn>
        </div>
      </MDBCardHeader>
      <MDBCardBody cascade>
        <MDBTable btn fixed>
          <MDBTableHead columns={data_panel.columns} />

          <MDBTableBody rows={values} />
        </MDBTable>
      </MDBCardBody>
    </MDBCard>
  );
};

export default TablePage;
