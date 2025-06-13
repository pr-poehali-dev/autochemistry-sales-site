import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-4">
              🚗 AutoChem
            </div>
            <p className="text-gray-300 mb-4">
              Профессиональная автохимия и аксессуары для ухода за автомобилем.
              Работаем с 2015 года.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>8 (800) 555-0123</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@autochem.ru</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Москва, ул. Автомобильная, 15</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>Пн-Пт: 9:00-18:00</span>
              </div>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h3 className="font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Автошампуни
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Полироли
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Воски
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Моторные масла
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Очистители
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Аксессуары
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Клиентам</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Возврат товара
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Гарантии
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Публичная оферта
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Персональные данные
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Payment & Delivery */}
          <div>
            <h3 className="font-semibold mb-4">Оплата и доставка</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-300 mb-2">
                  Способы оплаты:
                </div>
                <div className="flex gap-2">
                  <div className="bg-gray-700 px-2 py-1 rounded text-xs">
                    Visa
                  </div>
                  <div className="bg-gray-700 px-2 py-1 rounded text-xs">
                    MC
                  </div>
                  <div className="bg-gray-700 px-2 py-1 rounded text-xs">
                    МИР
                  </div>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-300 mb-2">Доставка:</div>
                <div className="text-sm text-gray-400">
                  СДЭК, Почта России, Курьерская доставка
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 AutoChem. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
