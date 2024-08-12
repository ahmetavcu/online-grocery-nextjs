"use client";
import { Product } from "@/types";
import Image from "next/image";
import React, { MouseEventHandler, useState } from "react";
import { Button } from "../ui/button";
import { LoaderCircle, ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";

interface ProductItemDetailProps {
  product: Product;
}
const ProductItemDetail = ({ product }: ProductItemDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [productTotalPrice, setProductTotalPrice] = useState(
    product.attributes.sellingPrice
      ? product.attributes.sellingPrice
      : product.attributes.mrp
  );
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const cart = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const onAddCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    setLoading(true);

    const productToAdd = { ...product, quantity };
    cart.addItem(productToAdd, quantity, quantity * productTotalPrice);

    const totalPrice = parseFloat(productToAdd.sellingPrice) * quantity;
    setTotalPrice((prevTotalPrice) => prevTotalPrice + totalPrice);
    setLoading(false);
  };
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black gap-8">
        <Image
          src={
            process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
            product.attributes?.images?.data?.attributes?.url
          }
          width={500}
          height={200}
          alt={product.attributes.name}
        />
        <div className="flex flex-col gap-3">
          <h4 className="text-xl font-bold">{product.attributes.name}</h4>
          <p className="text-gray-800">{product.attributes.description}</p>
          <div className="flex gap-3 items-center">
            {product.attributes.mrp && (
              <p className="line-through text-slate-500">
                {product.attributes.mrp} ₺
              </p>
            )}
            {product.attributes.sellingPrice && (
              <h4 className="text-lg">{product.attributes.sellingPrice} ₺</h4>
            )}
          </div>
          <h4>Adet/Miktar({product.attributes.itemQuantityType})</h4>
          <div className="flex flex-col items-baseline gap-5">
            <div className="gap-3 flex items-center">
              <div className="p-2 border bg-slate-200 flex gap-8 items-center px-5">
                <button disabled={quantity == 1} onClick={decrementQuantity}>
                  -
                </button>
                <h4>{quantity}</h4>
                <button onClick={incrementQuantity}>+</button>
              </div>
              <h4>{(quantity * productTotalPrice).toFixed(2)} ₺</h4>
            </div>
            <Button
              disabled={loading}
              className="bg-green-600 text-white"
              onClick={onAddCart}
            >
              <ShoppingCart className="me-2" />
              {loading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                "Sepete Ekle"
              )}
            </Button>
          </div>
          <h4>
            Kategori: {product.attributes.categories.data[0].attributes.name}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductItemDetail;
