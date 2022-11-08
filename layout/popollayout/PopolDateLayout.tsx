import React from "react";
import { Stack, Typography } from "@mui/material";
import styled from "styled-components";

interface Props {
  title: string;
  client: string;
  date: string;
  progress: string;
  description: {
    item1: string;
    item2: string;
    item3: string;
  };
}

const ContainerStack = styled(Stack)`
  max-width: 800px;
  margin: 0 auto;
`;

const TitleUI = styled(Typography)``;

const PopolDateLayout = ({
  title,
  client,
  date,
  progress,
  description,
}: Props) => {
  const clientInfoArray = [
    {
      title: "CLIENT",
      value: client,
    },
    {
      title: "RELEASE DATE",
      value: date,
    },
    {
      title: "TYPE",
      value: progress,
    },
  ];

  return (
    <>
      <ContainerStack spacing={4}>
        <TitleUI variant="h3">{title}</TitleUI>
        <Stack direction={"row"} spacing={4}>
          {clientInfoArray.map((item, index) => (
            <Stack
              key={`${item.title}_index`}
              alignItems={"flex-start"}
              spacing={2}
              style={{
                flex: 1,
                maxWidth: "200px",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  borderBottom: "3px solid #222",
                  lineHeight: "1.25",
                  paddingBottom: "0.5rem",
                  width: "100%",
                  maxWidth: "200px",
                }}
              >
                {item.title}
              </Typography>
              <Typography variant="subtitle1">{item.value}</Typography>
            </Stack>
          ))}
        </Stack>
        <Stack spacing={0.5}>
          <Typography variant="subtitle1">{description.item1}</Typography>
          <Typography variant="subtitle1">{description.item2}</Typography>
          <Typography variant="subtitle1">{description.item3}</Typography>
        </Stack>
      </ContainerStack>
    </>
  );
};

export default PopolDateLayout;
