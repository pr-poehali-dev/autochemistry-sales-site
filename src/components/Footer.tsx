import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/77009110091", "_blank");
  };

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
              Лучшая компания профессиональной автохимии и аксессуаров для ухода
              за автомобилем. Работаем с 2015 года.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>8700-911-00-91</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>700casper@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Алматы Гагарина 118б</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>Пн-Пт: 9:00-18:00</span>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm transition-colors mt-2"
              >
                💬 Написать в WhatsApp
              </button>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h3 className="font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button
                  className="hover:text-blue-400 text-left"
                  onClick={() => alert("Переход в раздел Автошампуни")}
                >
                  Автошампуни
                </button>
              </li>
              <li>
                <button
                  className="hover:text-blue-400 text-left"
                  onClick={() => alert("Переход в раздел Полироли")}
                >
                  Полироли
                </button>
              </li>
              <li>
                <button
                  className="hover:text-blue-400 text-left"
                  onClick={() => alert("Переход в раздел Воски")}
                >
                  Воски
                </button>
              </li>
              <li>
                <button
                  className="hover:text-blue-400 text-left"
                  onClick={() => alert("Переход в раздел Моторные масла")}
                >
                  Моторные масла
                </button>
              </li>
              <li>
                <button
                  className="hover:text-blue-400 text-left"
                  onClick={() => alert("Переход в раздел Очистители")}
                >
                  Очистители
                </button>
              </li>
              <li>
                <button
                  className="hover:text-blue-400 text-left"
                  onClick={() => alert("Переход в раздел Аксессуары")}
                >
                  Аксессуары
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Клиентам</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button
                  className="hover:text-blue-400 text-left"
                  onClick={() => alert("Информация о доставке и оплате")}
                >
                  Доставка и оплата
                </button>
              </li>
              <li>
                <button
                  className="hover:text-blue-400 text-left"
                  onClick={() => alert("Информация о возврате товара")}
                >
                  Возврат товара
                </button>
              </li>
              <li>
                <button
                  className="hover:text-blue-400 text-left"
                  onClick={() => alert("Информация о гарантиях")}
                >
                  Гарантии
                </button>
              </li>
              <li>
                <button
                  className="hover:text-blue-400 text-left"
                  onClick={() => alert("Публичная оферта")}
                >
                  Публичная оферта
                </button>
              </li>
              <li>
                <button
                  className="hover:text-blue-400 text-left"
                  onClick={() => alert("Политика персональных данных")}
                >
                  Персональные данные
                </button>
              </li>
              <li>
                <button
                  className="hover:text-blue-400 text-left"
                  onClick={() => alert("Контактная информация")}
                >
                  Контакты
                </button>
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
                <div className="flex gap-2 flex-wrap">
                  <div className="bg-blue-600 px-3 py-1 rounded text-xs">
                    💳 Visa
                  </div>
                  <div className="bg-red-600 px-3 py-1 rounded text-xs">
                    💳 MasterCard
                  </div>
                  <div className="bg-green-600 px-3 py-1 rounded text-xs">
                    💳 МИР
                  </div>
                  <div className="bg-gray-600 px-3 py-1 rounded text-xs">
                    💰 Наличные
                  </div>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-300 mb-2">Доставка:</div>
                <div className="space-y-1 text-sm text-gray-400">
                  <div>🚚 Яндекс Курьер</div>
                  <div>🚗 Indrive доставка</div>
                  <div>📦 СДЭК</div>
                  <div>📮 Почта России</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2024 AutoChem. Лучшая компания автохимии. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
