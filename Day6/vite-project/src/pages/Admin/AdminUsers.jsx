import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const AdminUsers = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([
    { uid: 1, name: 'John Doe', username: 'johndoe', email: 'john@example.com', password: 'password123' },
    { uid: 2, name: 'Jane Smith', username: 'janesmith', email: 'jane@example.com', password: 'password456' }
  ]);
  const [newUser, setNewUser] = useState({ name: '', username: '', email: '', password: '' });

  const handleDelete = (id) => {
    setUsers(prevUsers => prevUsers.filter(user => user.uid !== id));
  };

  const handleAddUser = () => {
    const newUserWithId = { ...newUser, uid: users.length + 1 };
    setUsers(prevUsers => [...prevUsers, newUserWithId]);
    setNewUser({ name: '', username: '', email: '', password: '' });
    setOpen(false);
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.id]: e.target.value });
  };

  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Users</CardTitle>
          <Button onClick={() => setOpen(!open)}>
            <Plus className='h-10 w-10 mr-2' /> Add
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Password</TableHead>
                <TableHead className="flex justify-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.uid}>
                  <TableCell className="font-medium">{user.uid}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.password}</TableCell>
                  <TableCell>
                    <span className='w-full h-full flex justify-center items-center gap-3'>
                        <TrashIcon 
                        className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md'
                        onClick={() => handleDelete(user.uid)}
                      />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add User</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value={newUser.name} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value={newUser.username} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" value={newUser.email} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input id="password" value={newUser.password} onChange={handleChange} className="col-span-3" />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 outline bg-red-400/90 hover:bg-red-400' onClick={() => setOpen(!open)}>Cancel</Button>
            <Button type="submit" className='w-1/2' onClick={handleAddUser}>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminUsers;