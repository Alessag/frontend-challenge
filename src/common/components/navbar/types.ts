export interface NavLinkOption {
  name: string;
  path: string;
  id: number;
}

export interface NavLinkItemProps {
  option: NavLinkOption;
  handleClose: () => void;
}

export interface NavbarProps {
  navLinkOptions: NavLinkOption[];
  handleClose: () => void;
}
