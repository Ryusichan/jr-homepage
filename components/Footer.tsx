import React from "react";
import { Mail, RateReview } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import Link from "next/link";

const FooterWrap = styled.footer`
  background-color: #050505;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  transition: color 0.2s;
  &:hover {
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6 } }}>
        <Stack
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 4, sm: 0 },
          }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          <Stack spacing={1}>
            <Typography
              sx={{
                fontWeight: 200,
                letterSpacing: ".35em",
                textTransform: "uppercase",
                color: "#fff",
                fontSize: "1.1rem",
              }}
            >
              PLUTON
            </Typography>
            <Typography sx={{ color: "#555", fontSize: "0.85rem" }}>
              Digital Experience Studio
            </Typography>
          </Stack>

          <Stack spacing={1.5}>
            <Link href="https://velog.io/@godtheenell">
              <FooterLink target="_blank">
                <RateReview sx={{ fontSize: 18 }} />
                <Typography sx={{ fontSize: "0.85rem" }}>Velog</Typography>
              </FooterLink>
            </Link>
            <FooterLink href="mailto:godtheenell@gmail.com">
              <Mail sx={{ fontSize: 18 }} />
              <Typography sx={{ fontSize: "0.85rem" }}>
                godtheenell@gmail.com
              </Typography>
            </FooterLink>
          </Stack>
        </Stack>

        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <Typography sx={{ color: "#333", fontSize: "0.75rem" }}>
            &copy; {new Date().getFullYear()} Pluton. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterWrap>
  );
};

export default Footer;
