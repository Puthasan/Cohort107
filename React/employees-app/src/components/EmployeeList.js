import EmployeeListItems from './EmployeeListItems';

const EmployeeList = () => {
  return (
    <ul style={{border: "purple 1px solid", padding: "10px"}}>
      <EmployeeListItems />
      <EmployeeListItems />
      <EmployeeListItems />
      <EmployeeListItems />
      <EmployeeListItems />
      {/* Add more EmployeeListItem components as needed */}
    </ul>
  );
}

export default EmployeeList;