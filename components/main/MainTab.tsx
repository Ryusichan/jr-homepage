import { Stack, SvgIcon, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ImportTabIcon = (icon: string) => {
  return (
    <Image
      src={`/images/icons/ic_${icon}.svg`}
      width={24}
      height={24}
      alt={icon}
    />
  );
};

const CounselIcon = (
  <Image src="/images/icons/ic_counsel.svg" width={80} height={80} alt="name" />
);

const tabArray = [
  { label: "상담", icon: ImportTabIcon("counsel") },
  { label: "기획", icon: ImportTabIcon("planning") },
  { label: "디자인", icon: ImportTabIcon("design") },
  { label: "제작", icon: ImportTabIcon("develop") },
  { label: "배포", icon: ImportTabIcon("deploy") },
];

const TabContainer = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon label tabs example"
    >
      {tabArray.map((tab, index) => (
        <Tab key={index} label={tab.label} icon={tab.icon} />
      ))}

      <Tab icon={CounselIcon} label="상담" />
    </Tabs>
  );
};

const MainTab = () => {
  return (
    <Stack>
      <Typography variant="h3" component="h3">
        서비스 제공절차
      </Typography>

      {TabContainer()}
    </Stack>
  );
};

export default MainTab;
