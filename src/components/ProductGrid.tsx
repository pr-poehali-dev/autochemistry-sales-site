import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Автошампунь концентрированный для бесконтактной мойки",
    brand: "Chemical Guys",
    price: 1250,
    oldPrice: 1500,
    rating: 5,
    reviews: 142,
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    badge: "ХИТ",
  },
  {
    id: 2,
    name: "Полироль для кузова с защитным эффектом",
    brand: "Meguiars",
    price: 2890,
    rating: 4,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Воск карнаубский премиум класса",
    brand: "Turtle Wax",
    price: 3450,
    oldPrice: 4200,
    rating: 5,
    reviews: 67,
    image:
      "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=400&h=300&fit=crop",
    badge: "СКИДКА",
  },
  {
    id: 4,
    name: "Моторное масло синтетическое 5W-30",
    brand: "Castrol",
    price: 4200,
    rating: 5,
    reviews: 234,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Очиститель салона универсальный",
    brand: "Sonax",
    price: 890,
    rating: 4,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Микрофибра для полировки 40x40см",
    brand: "AutoPro",
    price: 450,
    rating: 4,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Популярные товары
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Самые покупаемые товары автохимии с высоким рейтингом от наших
            клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Показать больше товаров
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
