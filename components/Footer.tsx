import React from "react";
import { Mail, Phone } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import styled from "styled-components";

const ConpanyContainer = styled(Stack)``;

const ContactContainer = styled(Stack)``;

const CTContent = styled(Stack)``;

const Footer = () => {
  return (
    <React.Fragment>
      <Box sx={{ bgcolor: "#3F3059", p: 4 }}>
        <Container maxWidth="md">
          <Stack
            sx={{ color: "white", width: "100%" }}
            direction="row"
            justifyContent={"space-between"}
          >
            <ConpanyContainer spacing={4}>
              <Stack direction={"row"}>
                <AdbIcon
                  sx={{
                    display: { xs: "none", md: "flex" },
                    mr: 1,
                  }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
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
              </Stack>

              <Typography
                variant="body2"
                component="h6"
                sx={{ color: "inherit" }}
              >
                당신에게 최고의 서비스를 제공해드립니다.
              </Typography>
            </ConpanyContainer>

            <ContactContainer spacing={2}>
              <Typography
                variant="body2"
                component="h6"
                sx={{ color: "inherit" }}
              >
                Contact
              </Typography>
              <Stack spacing={2}>
                <CTContent direction={"row"} spacing={2}>
                  <Phone />
                  <Typography
                    variant="body2"
                    component="h6"
                    sx={{ color: "inherit" }}
                  >
                    031.123.4567
                  </Typography>
                </CTContent>
                <CTContent direction={"row"} spacing={2}>
                  <Mail />
                  <Typography
                    variant="body2"
                    component="h6"
                    sx={{ color: "inherit" }}
                  >
                    godtheenell@naver.com
                  </Typography>
                </CTContent>
              </Stack>
            </ContactContainer>
          </Stack>
        </Container>
        ;
      </Box>
    </React.Fragment>
  );
};

export default Footer;
