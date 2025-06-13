import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Профессиональная автохимия для вашего авто
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Более 500 товаров от ведущих мировых брендов. Быстрая доставка по
              всей России.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Смотреть каталог
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1619642751776-6a5d4778b0bc?w=600&h=400&fit=crop"
              alt="Автохимия"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-black p-4 rounded-lg font-bold">
              <div className="text-sm">Скидки до</div>
              <div className="text-2xl">30%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
