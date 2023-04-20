import { NavLink } from "react-router-dom";

const navLinkOptions = [
  { name: "Celulares", path: "/phones", id: 1 },
  { name: "Motocicletas", path: "/motorcycle", id: 2 },
  { name: "Tus prestamos", path: "/loans", id: 3 },
  { name: "Tiendas", path: "/stores", id: 4 },
  { name: "Tracking", path: "/tracking", id: 5 },
  { name: "Club Macropay", path: "/club", id: 6 },
];

export const Navbar = () => {
  return (
    <nav className="border-black md:h-[60px] bg-white flex flex-col md:flex-row md:items-center text-xs lg:text-base shadow-primary">
      {navLinkOptions.map((option) => {
        return (
          <NavLink
            key={option.id}
            to={option.path}
            className={({ isActive }) =>
              isActive ? "text-blue-4 font-bold navLink" : "navLink"
            }
          >
            {option.name}
          </NavLink>
        );
      })}
    </nav>
  );
};
