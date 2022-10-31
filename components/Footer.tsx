import React from "react";
import { Mail, Phone, RateReview } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import styled from "styled-components";
import Link from "next/link";

const ConpanyContainer = styled(Stack)``;

const ContactContainer = styled(Stack)``;

const CTContent = styled(Stack)``;

const Footer = () => {
  return (
    <React.Fragment>
      <Box sx={{ bgcolor: "#3F3059", p: { xs: 2, sm: 4 } }}>
        <Container maxWidth="lg">
          <Stack
            sx={{
              color: "white",
              width: "100%",
              flexDirection: { xs: "column", sm: "row" },
            }}
            direction="row"
            justifyContent={"space-between"}
          >
            <ConpanyContainer spacing={4} sx={{ mb: { xs: 4, sm: 0 } }}>
              <Stack direction={"row"}>
                {/* <AdbIcon
                  sx={{
                    mr: 1,
                  }}
                /> */}
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  RYU
                </Typography>
              </Stack>

              <Typography
                variant="body2"
                component="h6"
                sx={{ color: "inherit" }}
              >
                최적의 서비스를 제작하기 위해 노력합니다.
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
                <Link href={"https://velog.io/@godtheenell"}>
                  <a target="_blank">
                    <CTContent direction={"row"} spacing={2}>
                      <RateReview />
                      <Typography
                        variant="body2"
                        component="h6"
                        sx={{ color: "inherit" }}
                      >
                        Velog
                      </Typography>
                    </CTContent>
                  </a>
                </Link>
                <CTContent direction={"row"} spacing={2}>
                  <Mail />
                  <Typography
                    variant="body2"
                    component="h6"
                    sx={{ color: "inherit" }}
                  >
                    godtheenell@gmail.com
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
