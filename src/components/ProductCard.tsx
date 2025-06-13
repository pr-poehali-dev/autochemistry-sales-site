import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, CreditCard } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  brand,
  price,
  oldPrice,
  rating,
  reviews,
  image,
  badge,
}) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    alert(`${name} добавлен в корзину!`);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleCardPayment = () => {
    alert(`Оплата картой для товара: ${name} на сумму ${price}₸`);
  };

  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-4">
        <div className="relative mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
          {badge && (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              {badge}
            </Badge>
          )}
        </div>

        <div className="space-y-2">
          <div className="text-sm text-gray-500">{brand}</div>
          <h3 className="font-semibold text-gray-900 line-clamp-2 min-h-[3rem]">
            {name}
          </h3>

          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">({reviews})</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">
              {price.toLocaleString()}₸
            </span>
            {oldPrice && (
              <span className="text-sm text-gray-500 line-through">
                {oldPrice.toLocaleString()}₸
              </span>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-y-2">
        <Button
          className={`w-full ${isAdded ? "bg-green-600 hover:bg-green-700" : ""}`}
          size="sm"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {isAdded ? "Добавлено!" : "В корзину"}
        </Button>
        <Button
          variant="outline"
          className="w-full"
          size="sm"
          onClick={handleCardPayment}
        >
          <CreditCard className="w-4 h-4 mr-2" />
          Оплатить картой
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
