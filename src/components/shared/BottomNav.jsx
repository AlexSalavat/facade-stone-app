import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LayoutList, Newspaper, BookOpen, ShoppingCart } from "lucide-react";
import { useCartCtx } from "../../context/CartContext"; // важно!

const tabs = [
  { label: "Каталог", icon: LayoutList, path: "/catalog" },
  { label: "Новости", icon: Newspaper, path: "/news" },
  { label: "Полезное", icon: BookOpen, path: "/useful" },
  { label: "Корзина", icon: ShoppingCart, path: "/cart" }
];

function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useCartCtx();

  // Суммарно товаров в корзине
  const cartCount = cart.reduce((sum, p) => sum + p.qty, 0);

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-zinc-950 border-t border-zinc-800 flex justify-around z-30 py-2 shadow-xl">
      {tabs.map((tab, idx) => {
        const active = location.pathname.startsWith(tab.path);
        const Icon = tab.icon;
        return (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            className={`
              flex flex-col items-center justify-center flex-1 gap-0.5
              transition-all duration-150
              py-1.5
              ${active
                ? "text-sky-400 font-bold bg-gradient-to-t from-sky-900/50 via-sky-900/10 rounded-xl shadow-[0_2px_17px_#38bdf84f]"
                : "text-zinc-400"}
            `}
            style={{
              fontSize: 13.5,
              position: "relative"
            }}
          >
            <span style={{ position: "relative", display: "inline-block" }}>
              <Icon size={26} strokeWidth={2.2} />
              {/* Бейдж количества для корзины */}
              {tab.path === "/cart" && cartCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: -7,
                    right: -11,
                    background: "#38e89a",
                    color: "#181a20",
                    fontWeight: 800,
                    fontSize: 13,
                    borderRadius: "999px",
                    padding: "0px 7px",
                    minWidth: 22,
                    textAlign: "center",
                    boxShadow: "0 1px 7px 0 #13c38142"
                  }}
                >
                  {cartCount}
                </span>
              )}
            </span>
            <span style={{ marginTop: 2 }}>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

export default BottomNav;
