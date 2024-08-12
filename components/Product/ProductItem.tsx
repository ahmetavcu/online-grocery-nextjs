import { Product } from "@/types";
import React from "react";

import Image from "next/image";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductItemDetail from "./ProductItemDetail";

interface ProductItemProps {
  product: Product;
}
const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <>
      <div className="p-2 md:p-4 lg:p-6 flex flex-col items-center justify-center gap-4 border rounded-xl hover:shadow-lg transition-all cursor-pointer">
        <Image
          src={
            process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
            product.attributes?.images?.data?.attributes?.url
          }
          width={500}
          height={200}
          alt={product.attributes.name}
        />
        <h3>{product.attributes.name}</h3>

        <div className="flex gap-3">
          {product.attributes.mrp && (
            <p className="line-through text-slate-500">
              {product.attributes.mrp} ₺
            </p>
          )}
          {product.attributes.sellingPrice && (
            <h4>{product.attributes.sellingPrice} ₺</h4>
          )}
        </div>
        <Dialog>
          <DialogTrigger>
            <Button className="bg-green-600 text-white">
              <ShoppingCart className="me-2" />
              Sepete Ekle
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[725px]">
            <DialogHeader>
              <DialogDescription>
                <ProductItemDetail product={product} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default ProductItem;
