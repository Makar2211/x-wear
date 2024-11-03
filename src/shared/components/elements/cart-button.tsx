"use client";
import { Product } from "@prisma/client";
import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";
import toast from "react-hot-toast";
import { useCart } from "@/shared/hooks";

interface Props {
  className?: string;
  product: Product;
  selectedSize: string | undefined;
}

export const CartButton: React.FC<Props> = ({
  className,
  product,
  selectedSize,
}) => {
  const { addCartItem } = useCart();

  const handleToCart = async () => {
    if (!selectedSize) {
      toast.error("Выберите размер");
    } else {
      await addCartItem({
        productItemId: product.id,
        size: selectedSize,
      });
    }
  };
  return (
    <div
      className={cn(
        "flex items-center justify-between max-md:items-start max-md:flex-col ",
        className
      )}
    >
      <div className="flex flex-col">
        <span className="text-[#626262] font-normal text-[20px]">
          {product.price} ₴
        </span>
        <span className="font-bold">
          РАЗМЕР - {!selectedSize ? "НЕ ВЫБРАН" : selectedSize}
        </span>
      </div>

      <Button
        onClick={handleToCart}
        className=" p-8 max-lg:px-4"
        variant="blackandwhite"
      >
        <span className="font-extrabold text-[14px]">ДОБАВИТЬ В КОРЗИНУ</span>
        <ChevronRight />
      </Button>
    </div>
  );
};
