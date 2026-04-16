import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Slide,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Appbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { asPath } = useRouter();

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar
          sx={{
            backgroundColor: "rgba(10, 10, 10, 0.9)",
            backdropFilter: "blur(10px)",
            color: "#fff",
            boxShadow: "none",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
              <Link href="/">
                <a>
                  <Typography
                    variant="h6"
                    noWrap
                    sx={{
                      fontFamily: "monospace",
                      fontWeight: 800,
                      letterSpacing: ".2rem",
                      fontSize: "1.5rem!important",
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    Pluton
                  </Typography>
                </a>
              </Link>

              <Box sx={{ flex: 1 }} />

              {/* Mobile menu */}
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  onClick={handleOpenNavMenu}
                  sx={{ color: "#fff" }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorElNav}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiPaper-root": {
                      backgroundColor: "#1a1a1a",
                      color: "#fff",
                    },
                  }}
                >
                  <Link href="/">
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography>Projects</Typography>
                    </MenuItem>
                  </Link>
                  <MenuItem
                    onClick={() => {
                      handleCloseNavMenu();
                      window.location.href = "mailto:godtheenell@gmail.com";
                    }}
                  >
                    <Typography>Contact</Typography>
                  </MenuItem>
                </Menu>
              </Box>

              {/* Desktop menu */}
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Stack spacing={3} direction="row" alignItems="center">
                  <Link href="/">
                    <Button
                      sx={{
                        color: "#ccc",
                        fontSize: "0.875rem",
                        letterSpacing: "0.05em",
                        "&:hover": { color: "#fff" },
                      }}
                    >
                      Projects
                    </Button>
                  </Link>
                  <Button
                    href="mailto:godtheenell@gmail.com"
                    sx={{
                      color: "#0a0a0a",
                      backgroundColor: "#fff",
                      fontSize: "0.875rem",
                      padding: "8px 24px",
                      "&:hover": {
                        backgroundColor: "#7162d7",
                        color: "#fff",
                      },
                    }}
                  >
                    Contact
                  </Button>
                </Stack>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
};

export default Appbar;
