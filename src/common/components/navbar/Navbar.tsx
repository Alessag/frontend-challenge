import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";

import { NavbarProps, NavLinkItemProps, NavLinkOption } from "./types";
import useViewport from "../../utils/hooks/useViewport";

const navLinkOptions: NavLinkOption[] = [
  { name: "Celulares", path: "/phones", id: 1 },
  { name: "Motocicletas", path: "/motorcycle", id: 2 },
  { name: "Tus prestamos", path: "/loans", id: 3 },
  { name: "Tiendas", path: "/stores", id: 4 },
  { name: "Tracking", path: "/tracking", id: 5 },
  { name: "Club Macropay", path: "/club", id: 6 },
];

const NavLinkItem = ({ option, handleClose }: NavLinkItemProps) => (
  <MenuItem key={option.id} onClick={handleClose} disableRipple>
    <NavLink
      key={option.id}
      to={option.path}
      className={({ isActive }) =>
        isActive ? "text-blue-4 font-bold navLink" : "navLink"
      }
    >
      {option.name}
    </NavLink>
  </MenuItem>
);

const NavLinks = ({ navLinkOptions, handleClose }: NavbarProps) => (
  <div className="lg:flex lg:flex-row text-xs lg:text-base">
    {navLinkOptions.map((option) => (
      <NavLinkItem key={option.id} option={option} handleClose={handleClose} />
    ))}
  </div>
);

export const Navbar = () => {
  const viewport = useViewport();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isSmallViewPort =
    viewport === "sm" || viewport === "md" || viewport === "lg";

  return (
    <nav className="border-black md:h-[60px] bg-white flex flex-col md:flex-row md:items-center  shadow-primary">
      {isSmallViewPort ? (
        <div className="w-full bg-white">
          <Button
            id="categories-button"
            aria-controls={open ? "categories-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            sx={{
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
              textTransform: "capitalize",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
          >
            Menu de Categorías
          </Button>
          <Menu
            elevation={0}
            id="categories-menu"
            MenuListProps={{
              "aria-labelledby": "categories-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <NavLinks
              navLinkOptions={navLinkOptions}
              handleClose={handleClose}
            />
          </Menu>
        </div>
      ) : (
        <NavLinks navLinkOptions={navLinkOptions} handleClose={() => {}} />
      )}
    </nav>
  );
};
