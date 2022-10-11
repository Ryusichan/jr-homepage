import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
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
import { Link as Link2 } from "react-scroll";
import { useRouter } from "next/router";

const pages = ["why Pluton?", "Pricing"];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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

  const logo = (
    <Box component="img" src="/logo.svg" sx={{ width: 40, height: 40 }} />
  );

  const { asPath } = useRouter();

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
        <AppBar
          sx={{
            backgroundColor: "#fff",
            color: "black",
            width: { xs: "100%", md: "calc(100% - 48px)" },
            top: { xs: "0px", md: "16px" },
            borderRadius: { xs: "0px", md: "12px" },
            left: { xs: "0px", md: "24px" },
            boxShadow:
              "0px 2px 4px -1px rgb(0 0 0 / 4%), 0px 4px 5px 6px rgb(0 0 0 / 1%), 0px 1px 10px 8px rgb(0 0 0 / 2%)",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
              <Box
                component="img"
                src="/logo.svg"
                sx={{
                  width: 40,
                  height: 40,
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                }}
              />
              <Link href="/">
                <a>
                  <Typography
                    variant="h6"
                    noWrap
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    Pluton
                  </Typography>
                </a>
              </Link>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {asPath === "/" ? (
                    <Link2
                      to="progress"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography variant="body2" component="h6">
                          Progress
                        </Typography>
                      </MenuItem>
                    </Link2>
                  ) : (
                    <Link key={"progress"} href={"/"}>
                      <MenuItem key={"progress"} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">progress</Typography>
                      </MenuItem>
                    </Link>
                  )}

                  {asPath === "/" ? (
                    <Link2
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography variant="body2" component="h6">
                          Portfolio
                        </Typography>
                      </MenuItem>
                    </Link2>
                  ) : (
                    <Link key={"portfolio"} href={"/"}>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">portfolio</Typography>
                      </MenuItem>
                    </Link>
                  )}

                  {pages.map((page) => (
                    <Link
                      key={page}
                      href={`/${page
                        .replace(" ", "")
                        .replace("?", "")
                        .toLowerCase()}`}
                    >
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  mr: 1,
                  alignItems: "center",
                }}
              >
                {/* <AdbIcon /> */}
                {logo}
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Pluton
                </Typography>
              </Box>

              <Box sx={{ flex: 1 }} />

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Stack spacing={4} direction={"row"} alignItems={"center"}>
                  {asPath === "/" ? (
                    <Link2
                      to="progress"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      <Button sx={{ my: 2, color: "black", display: "block" }}>
                        Progress
                      </Button>
                    </Link2>
                  ) : (
                    <Link key={"progress"} href={"/"}>
                      <Button sx={{ my: 2, color: "black", display: "block" }}>
                        Progress
                      </Button>
                    </Link>
                  )}

                  {asPath === "/" ? (
                    <Link2
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      <Button sx={{ my: 2, color: "black", display: "block" }}>
                        Works
                      </Button>
                    </Link2>
                  ) : (
                    <Link key={"portfolio"} href={"/"}>
                      <Button sx={{ my: 2, color: "black", display: "block" }}>
                        Works
                      </Button>
                    </Link>
                  )}

                  {pages.map((page) => (
                    <Link
                      key={page}
                      href={`/${page
                        .replace(" ", "")
                        .replace("?", "")
                        .toLowerCase()}`}
                    >
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "black", display: "block" }}
                      >
                        {page}
                      </Button>
                    </Link>
                  ))}
                  <Button variant="contained" sx={{ height: "48px" }}>
                    Contact Us
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
