export const Navbar = () => {
  return (
    <nav className="border-black md:h-[60px] bg-white flex flex-col md:flex-row md:items-center text-xs lg:text-base shadow-primary">
      <a className="navLink">Home</a>
      <a className="navLink">Celulares</a>
      <a className="navLink">Motocicletas</a>
      <a className="navLink">Tus prestamos</a>
      <a className="navLink">Tiendas</a>
      <a className="navLink">Tracking</a>
      <a className="navLink">Club Macropay</a>
    </nav>
  );
};
