"use client";

import { UserProvider } from "@/contexts/dataContext";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Providers = (props: Props) => {
  return <UserProvider>{props.children}</UserProvider>;
};

export default Providers;
