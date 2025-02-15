import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

const nestedMenuItems = [
  {
    title: "Poster",
  },
  {
    title: "Stickers",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setopenNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = nestedMenuItems.map(({ title }, key) => (
    <Link to="/" key={key}>
      <MenuItem>{title}</MenuItem>
    </Link>
  ));

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <div className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Products
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </div>
        </MenuHandler>
        <MenuList className="hidden rounded-xl lg:block">
        <Link to={"/documents"}> <MenuItem>Document</MenuItem></Link>
        <Link to={"/blackbook"}> <MenuItem>Blackbook</MenuItem></Link>
          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            
            <MenuList className="rounded-xl">{renderItems}</MenuList>
          </Menu>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
        <Link to={"/documents"}> <MenuItem>Document</MenuItem></Link>
        <Link to={"/blackbook"}> <MenuItem>Blackbook</MenuItem></Link>
        
          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
           
            <MenuList className="block rounded-xl lg:hidden">
              {renderItems}
            </MenuList>
          </Menu>
        </Collapse>
      </div>
    </>
  );
}

function NavList() {
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <NavListMenu />
      
      
      <div className="font-medium">
          <Link to="/pricecal">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Calculate
        </ListItem>
          </Link>
      </div>
      <Link to="/contact-us" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Contact</ListItem>
      </Link>
    </List>
  );
}

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const [showHeader, setShowHeader] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowHeader(false); // Scrolling down
      } else {
        setShowHeader(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      className={`mx-auto max-w-screen-xl px-4 py-2 border-none bg-white/60 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-[130%]"
      }`}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-black"
        >
          <Link to={'/'}>
          InkMudra
          </Link>
        </Typography>
        <div className="hidden lg:block px-2">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Link to={"/login"}>
          <Button variant="outlined" size="sm">
          Sign Up / Log In
          </Button>
          </Link>
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          
          <Button variant="outlined" size="sm" fullWidth>
            SignUp / Log In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
