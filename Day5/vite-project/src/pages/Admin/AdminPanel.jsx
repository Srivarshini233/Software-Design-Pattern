// // AdminPanel.jsx import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@shadcn/ui';
// import { useState } from 'react';

// // Dummy user data
// const dummyUsers = [
//   { id: 1, name: 'Alice Smith', email: 'alice@example.com', password: 'password123' },
//   { id: 2, name: 'Bob Johnson', email: 'bob@example.com', password: 'password456' },
//   { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', password: 'password789' },
//   // Add more users as needed
// ];

 const AdminPanel = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
return(<>AdminPanel</>)}
// return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <aside
//         className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transition-transform transform ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <div className="flex items-center justify-between p-4 border-b border-gray-700">
//           <h2 className="text-xl font-semibold">Admin Panel</h2>
//           <button onClick={() => setIsSidebarOpen(false)}>
//             <HiX className="text-2xl" />
//           </button>
//         </div>
//         <nav className="mt-4">
//           <ul>
//             <li className="p-4 hover:bg-gray-700 cursor-pointer">Dashboard</li>
//             <li className="p-4 hover:bg-gray-700 cursor-pointer">Users</li>
//             <li className="p-4 hover:bg-gray-700 cursor-pointer">Settings</li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main content */}
//       <div className="flex-1 ml-64">
//         <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
//           <button onClick={() => setIsSidebarOpen(true)} className="text-2xl lg:hidden">
//             jdbhv
//           </button>
//           <div className="text-lg">Admin Panel</div>
//         </nav>
//         <main className="p-6">
//           <h1 className="text-2xl font-bold mb-4">User Data</h1>
//           <TableContainer>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell className="font-semibold">ID</TableCell>
//                   <TableCell className="font-semibold">Name</TableCell>
//                   <TableCell className="font-semibold">Email</TableCell>
//                   <TableCell className="font-semibold">Password</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {dummyUsers.map(user => (
//                   <TableRow key={user.id}>
//                     <TableCell>{user.id}</TableCell>
//                     <TableCell>{user.name}</TableCell>
//                     <TableCell>{user.email}</TableCell>
//                     <TableCell>{user.password}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </main>
//       </div>
//     </div>
//   );
// };

export default AdminPanel;
