
import React from "react";
import MenuItems from "../Components/MenuItems";
import SideMenu from "../Components/SideMenu";
import { useState } from "react";

export default function HomePage() {

  return (
    <div>
      <SideMenu/>
      <MenuItems/>
    </div>
  );
}
