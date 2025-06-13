import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Автошампуни",
    icon: "🧴",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    count: 45,
  },
  {
    id: 2,
    name: "Полироли",
    icon: "✨",
    image:
      "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=300&h=200&fit=crop",
    count: 32,
  },
  {
    id: 3,
    name: "Воски",
    icon: "🪣",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&h=200&fit=crop",
    count: 28,
  },
  {
    id: 4,
    name: "Масла",
    icon: "🛢️",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    count: 67,
  },
  {
    id: 5,
    name: "Очистители",
    icon: "🧽",
    image:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=300&h=200&fit=crop",
    count: 41,
  },
  {
    id: 6,
    name: "Аксессуары",
    icon: "🧤",
    image:
      "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=300&h=200&fit=crop",
    count: 89,
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Категории товаров
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите нужную категорию и найдите подходящие товары для ухода за
            вашим автомобилем
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {category.count} товаров
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
