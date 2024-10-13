import React, { useState } from 'react';
import { FaUsers, FaPlus, FaTachometerAlt } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [runningCabs, setRunningCabs] = useState([]);
  const [vacantCabs, setVacantCabs] = useState([]);
  const [assignedDrivers, setAssignedDrivers] = useState([]);

  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    idCardNo: '',
    pickupLocation: '',
    pincode: '',
    pickupDate: '',
    pickupTime: '',
    dropDate: '',
    dropTime: '',
    dropLocation: '',
  });

  const [newCab, setNewCab] = useState({ driver: '', location: '', status: 'Running' });
  const [newVacantCab, setNewVacantCab] = useState({ driver: '', status: 'Available' });

  const [newAssignedDriver, setNewAssignedDriver] = useState({
    name: '',
    cabNumber: '',
    contactNo: '',
    address: '',
  });

  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDashboardClicked, setIsDashboardClicked] = useState(false);

  const handleAddEmployee = (e) => {
    e.preventDefault();
    setEmployees([...employees, { id: employees.length + 1, ...newEmployee }]);
    setNewEmployee({
      name: '',
      email: '',
      idCardNo: '',
      pickupLocation: '',
      pincode: '',
      pickupDate: '',
      pickupTime: '',
      dropDate: '',
      dropTime: '',
      dropLocation: '',
    });
  };

  

  

  const handleAddAssignedDriver = (e) => {
    e.preventDefault();
    const newDriver = { id: assignedDrivers.length + 1, ...newAssignedDriver };
    setAssignedDrivers([...assignedDrivers, newDriver]);
    setNewAssignedDriver({ name: '', cabNumber: '', contactNo: '', address: '' });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleDashboardClick = () => {
    setIsDashboardClicked(true);
    setActiveTab('dashboard');
  };

  const renderCabCards = () => {
    return (
      <div className="cab-cards">
        <div className="cab-card">
          <h3>Running Cabs</h3>
          <p>{runningCabs.length} Cabs</p>
          <p>
            <span className="status-bullet"></span> Status: Running
          </p>
        </div>
        <div className="cab-card">
          <h3>Vacant Cabs</h3>
          <p>{vacantCabs.length} Cabs</p>
          <p>Status: Available</p>
        </div>
        <div className="cab-card">
          <h3>Ideal Cabs</h3>
          <p>0 Cabs</p>
          <p>Status: Ideal</p>
        </div>
      </div>
    );
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h4>ETS ADMIN</h4>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="nav-item" onClick={handleDashboardClick}>
              <FaTachometerAlt className="nav-icon" /> Dashboard
            </li>
            {isDashboardClicked && (
              <>
                <li className="nav-item" onClick={() => handleTabChange('employees')}>
                  <FaUsers className="nav-icon" /> Employees
                </li>
                <li className="nav-item" onClick={() => handleTabChange('addEmployee')}>
                  <FaPlus className="nav-icon" /> Add Employee
                </li>
                <li className="nav-item" onClick={() => handleTabChange('assignedDrivers')}>
                  <FaUsers className="nav-icon" /> Add Drivers
                </li>
                <li className="nav-item" onClick={() => handleTabChange('driverDetails')}>
                  <FaUsers className="nav-icon" /> Drivers Details
                </li>
              </>
            )}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {activeTab === 'dashboard' && (
          <>
            <h2>Cabs</h2>
            {renderCabCards()}
          </>
        )}

        {activeTab === 'addEmployee' && (
          <>
            <h2>Add Employee</h2>
            <form onSubmit={handleAddEmployee} className="employee-form">
              <div className="form-half">
                <div className="form-row">
                  <label>Name:</label>
                  <input
                    type="text"
                    placeholder="Name"
                    value={newEmployee.name}
                    onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                    required
                  />
                  <label>Email:</label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={newEmployee.email}
                    onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-row">
                  <label>ID Card No:</label>
                  <input
                    type="text"
                    placeholder="ID Card No"
                    value={newEmployee.idCardNo}
                    onChange={(e) => setNewEmployee({ ...newEmployee, idCardNo: e.target.value })}
                    required
                  />
                  <label>Pickup Location:</label>
                  <input
                    type="text"
                    placeholder="Pickup Location"
                    value={newEmployee.pickupLocation}
                    onChange={(e) => setNewEmployee({ ...newEmployee, pickupLocation: e.target.value })}
                    required
                  />
                </div>
                <div className="form-row">
                  <label>Pincode:</label>
                  <input
                    type="text"
                    placeholder="Pincode"
                    value={newEmployee.pincode}
                    onChange={(e) => setNewEmployee({ ...newEmployee, pincode: e.target.value })}
                    required
                  />
                  <label>Drop Location:</label>
                  <input
                    type="text"
                    placeholder="Drop Location"
                    value={newEmployee.dropLocation}
                    onChange={(e) => setNewEmployee({ ...newEmployee, dropLocation: e.target.value })}
                    required
                  />
                </div>
                <div className="form-row">
                  <label>Pickup Date:</label>
                  <input
                    type="date"
                    value={newEmployee.pickupDate}
                    onChange={(e) => setNewEmployee({ ...newEmployee, pickupDate: e.target.value })}
                    required
                  />
                  <label>Pickup Time:</label>
                  <input
                    type="time"
                    value={newEmployee.pickupTime}
                    onChange={(e) => setNewEmployee({ ...newEmployee, pickupTime: e.target.value })}
                    required
                  />
                </div>
                <div className="form-row">
                  <label>Drop Date:</label>
                  <input
                    type="date"
                    value={newEmployee.dropDate}
                    onChange={(e) => setNewEmployee({ ...newEmployee, dropDate: e.target.value })}
                    required
                  />
                  <label>Drop Time:</label>
                  <input
                    type="time"
                    value={newEmployee.dropTime}
                    onChange={(e) => setNewEmployee({ ...newEmployee, dropTime: e.target.value })}
                    required
                  />
                </div>
              </div>
              <button type="submit">Add Employee</button>
            </form>
          </>
        )}

        {activeTab === 'employees' && (
          <>
            <h2>Employee List</h2>
            <table className="employee-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>ID Card No</th>
                  <th>Pickup Location</th>
                  <th>Pincode</th>
                  <th>Drop Location</th>
                  <th>Pickup Date</th>
                  <th>Pickup Time</th>
                  <th>Drop Date</th>
                  <th>Drop Time</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.idCardNo}</td>
                    <td>{employee.pickupLocation}</td>
                    <td>{employee.pincode}</td>
                    <td>{employee.dropLocation}</td>
                    <td>{employee.pickupDate}</td>
                    <td>{employee.pickupTime}</td>
                    <td>{employee.dropDate}</td>
                    <td>{employee.dropTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {activeTab === 'assignedDrivers' && (
          <>
            <h2>Add Driver</h2>
            <form onSubmit={handleAddAssignedDriver} className="driver-form">
              <div >
                <div className="">
                  <label>Name:</label>
                  <input
                    type="text"
                    placeholder="Driver's Name"
                    value={newAssignedDriver.name}
                    onChange={(e) => setNewAssignedDriver({ ...newAssignedDriver, name: e.target.value })}
                    required
                  />
                  <label>Cab Number:</label>
                  <input
                    type="text"
                    placeholder="Cab Number"
                    value={newAssignedDriver.cabNumber}
                    onChange={(e) => setNewAssignedDriver({ ...newAssignedDriver, cabNumber: e.target.value })}
                    required
                  />
                </div>
                <div >
                  <label>Contact Number:</label>
                  <input
                    type="text"
                    placeholder="Contact Number"
                    value={newAssignedDriver.contactNo}
                    onChange={(e) => setNewAssignedDriver({ ...newAssignedDriver, contactNo: e.target.value })}
                    required
                  />
                  <br></br>
                  <label>Address:</label>
                  <input
                    type="text"
                    placeholder="Address"
                    value={newAssignedDriver.address}
                    onChange={(e) => setNewAssignedDriver({ ...newAssignedDriver, address: e.target.value })}
                    required
                  />
                </div>
              </div>
              <button type="submit">Add Driver</button>
            </form>
          </>
        )}

        {activeTab === 'driverDetails' && (
          <>
             <h2>Driver Details</h2>

<table className="assigned-driver-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Cab Number</th>
      <th>Contact No</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
    {assignedDrivers.map((driver) => (
      <tr key={driver.id}>
        <td>{driver.name}</td>
        <td>{driver.cabNumber}</td>
        <td>{driver.contactNo}</td>
        <td>{driver.address}</td>
      </tr>
    ))}
  </tbody>
</table>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
