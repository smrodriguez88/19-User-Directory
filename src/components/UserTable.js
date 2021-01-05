import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import getRandUsers from '../utils/API'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './UserTable.css'

function Grid(){
    const [rowData, setRowData] = useState();
    const [isLoading, setIsLoading] = useState();
    
    function updateRowData(data){
        var newData = [];
        data.map((person) => {
            newData.push({
                image: person.picture.medium, 
                name: `${person.name.first} ${person.name.last}`, 
                phone: person.phone, 
                email: person.email, 
                dob: person.dob.date.split('T')[0],
            });
        });
        setRowData(newData);
      };

    useEffect(() => {
        getRandUsers().then(results => {
          console.log(results.data.results)
          updateRowData(results.data.results)
          console.log('User Data Retrieved')
        });
    },[isLoading]);
    
    const columnDefs = [
        {
            headerName: 'Image', 
            field: 'image', 
            width: 200,
            sortable: false,
            cellStyle: {textAlign: 'center'},
            cellRenderer: ({ value }) => `<img src=${value} />`
        },
        {
            headerName: 'Name', 
            field: 'name',
             width: 200, 
             filter: true, 
        },
        {
            headerName: 'Phone', 
            field: 'phone', 
            width: 200, 
            filter: true, 
        },
        {
            headerName: 'Email', 
            field: 'email', 
            width: 200, 
            filter: true, 
        },
        {
            headerName: 'Date of Birth', 
            field: 'dob', 
            width: 200, 
            filter: true, 
        },
    ]

    return (    
        <div className="ag-theme-alpine grid-align" style={ { width: 1200 } }>
        <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={{
                flex: 1,
                resizable: true,
                sortable: true,
                cellStyle: {whiteSpace: "normal"},
            }}
            rowHeight={76}
            domLayout={'autoHeight'}
            >
        </AgGridReact>
    </div>
    );
};

export default Grid;