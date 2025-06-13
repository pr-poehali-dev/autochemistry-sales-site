import { Search, ShoppingCart, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [activeTab, setActiveTab] = useState("main");
  const [cartCount, setCartCount] = useState(3);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/77009110091", "_blank");
  };

  const handleCartClick = () => {
    alert("Корзина открыта! Товаров: " + cartCount);
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>8700-911-00-91</span>
            </div>
            <span>Бесплатная доставка от 15000₸</span>
            <span className="text-green-400">• Яндекс Курьер • Indrive</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-full text-xs transition-colors"
            >
              💬 WhatsApp
            </button>
            <span>💳 Оплата картой</span>
            <span>700casper@gmail.com</span>
            <span>Алматы Гагарина 118б</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">🚗 AutoChem</div>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Input placeholder="Поиск товаров..." className="pr-10" />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Cart and Menu */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="relative"
              onClick={handleCartClick}
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            </Button>
            <Button variant="ghost" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex mt-4 space-x-8">
          <button
            onClick={() => setActiveTab("main")}
            className={`font-medium transition-colors ${
              activeTab === "main"
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Главная
          </button>
          <button
            onClick={() => setActiveTab("catalog")}
            className={`font-medium transition-colors ${
              activeTab === "catalog"
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Каталог
          </button>
          <button
            onClick={() => setActiveTab("brands")}
            className={`font-medium transition-colors ${
              activeTab === "brands"
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Бренды
          </button>
          <button
            onClick={() => setActiveTab("sales")}
            className={`font-medium transition-colors ${
              activeTab === "sales"
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Акции
          </button>
          <button
            onClick={() => setActiveTab("about")}
            className={`font-medium transition-colors ${
              activeTab === "about"
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            О компании
          </button>
          <button
            onClick={() => setActiveTab("contacts")}
            className={`font-medium transition-colors ${
              activeTab === "contacts"
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Контакты
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
