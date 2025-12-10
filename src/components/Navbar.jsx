import React ,{useState}from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Drawer,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Events", path: "/events" },
    { label: "Equipments", path: "/equipments" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "#307cecff",
          boxShadow: "0px 3px 10px rgba(0,0,0,0.15)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo + Title */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src="https://res.cloudinary.com/djlxdttvr/image/upload/v1765348338/WhatsApp_Image_2025-12-08_at_15.19.34_f2d85b75_u6lcxz.jpg"
              alt="logo"
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
            <Typography
              onClick={() => navigate("/")}
              sx={{
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "20px",
                whiteSpace: "nowrap",
              }}
            >
              K Selvam Sounds & Hollow Blocks
            </Typography>
          </Box>

          {/* Desktop Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
            }}
          >
            {links.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontSize: "16px",
                  "&:hover": { color: "#000", background: "white" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ color: "white", display: { xs: "block", md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Typography
            variant="h6"
            sx={{
              marginBottom: 2,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Menu
          </Typography>
          <List>
            {links.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setOpen(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
