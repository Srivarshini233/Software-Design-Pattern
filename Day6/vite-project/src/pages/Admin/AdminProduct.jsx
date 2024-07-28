import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { BellRing, Check, Edit, Plus, TrashIcon } from "lucide-react";
import { cn } from "@/lib/utils";
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
  SheetTrigger,
} from "@/components/ui/sheet";

const AdminProducts = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([
    { id: "01", name: "Toy Car", shape: "Rectangle", color: "Red", price: "500", image: "image1.jpg" },
    { id: "02", name: "Action Figure", shape: "Humanoid", color: "Blue", price: "1200", image: "image2.jpg" },
    // Add more products as needed
  ]);

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    shape: "",
    color: "",
    price: "",
    image: ""
  });

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.id]: e.target.value
    });
  };

  const handleSave = () => {
    handleAddProduct({ ...newProduct, id: String(products.length + 1).padStart(2, '0') });
    setOpen(false);
    setNewProduct({ id: "", name: "", shape: "", color: "", price: "", image: "" });
  };

  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Products</CardTitle>
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
                <TableHead>Shape</TableHead>
                <TableHead>Color</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Image Link</TableHead>
                <TableHead className="flex justify-center ">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.shape}</TableCell>
                  <TableCell>{product.color}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.image}</TableCell>
                  <TableCell>
                    <span className='w-full h-full flex justify-center items-center gap-3'>
                      <Edit className='h-8 w-8 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-background rounded-md' />
                      <TrashIcon onClick={() => handleDelete(product.id)} className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md' />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={open}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add Product</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value={newProduct.name} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="shape" className="text-right">
                Shape
              </Label>
              <Input id="shape" value={newProduct.shape} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="color" className="text-right">
                Color
              </Label>
              <Input id="color" value={newProduct.color} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input id="price" value={newProduct.price} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="image" className="text-right">
                Image Link
              </Label>
              <Input id="image" value={newProduct.image} onChange={handleChange} className="col-span-3" />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 outline bg-red-400/90 hover:bg-red-400' onClick={() => setOpen(!open)}>Cancel</Button>
            <Button type="submit" className='w-1/2' onClick={handleSave}>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default AdminProducts;
