import React from 'react';
import './ShipTable.css'; // Import your CSS file
import { DatePicker, Space } from 'antd';


const ShipTable = () => {
  const arr = [
    { id: 1, name: 'rahul', status: 'delivered', product: 'book', fee: 44, action: '...' },
    { id: 2, name: 'leena', status: 'delivered', product: 'electronics', fee: 440, action: '...' },
    { id: 3, name: 'sanjay', status: 'on hold', product: 'Furniture', fee: 3540, action: '...' },
    { id: 4, name: 'deena', status: 'waiting', product: 'Fashion', fee: 570, action: '...' },
    { id: 5, name: 'sanjay', status: 'on hold', product: 'Furniture', fee: 3540, action: '...' },
    { id: 1, name: 'rahul', status: 'delivered', product: 'book', fee: 44, action: '...' },
    { id: 2, name: 'leena', status: 'delivered', product: 'electronics', fee: 440, action: '...' },
    { id: 3, name: 'sanjay', status: 'on hold', product: 'Furniture', fee: 3540, action: '...' },
    { id: 4, name: 'deena', status: 'waiting', product: 'Fashion', fee: 570, action: '...' },
    { id: 5, name: 'sanjay', status: 'on hold', product: 'Furniture', fee: 3540, action: '...' },
  ];

  return (
    <div style={{border:'1px solid #00000026',borderRadius:'10px'}} className='mt-5 m-2 p-3'>
    <div className='d-flex justify-content-between m-1'>
        <b style={{fontSize:'22px',fontWeight:'500'}}>Shipping Reports</b>
        <DatePicker renderExtraFooter={() => 'extra footer'} />
    </div>
    <div>
      <table className="ship-table ">
        <thead>
          <tr >
            <th >No.</th>
            <th>Recipent</th>
            <th>Status</th>
            <th>Product</th>
            <th>Fee</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>{item.product}</td>
              <td>{item.fee}</td>
              <td>{item.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ShipTable;
