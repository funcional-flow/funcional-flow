"use client"

import DesktopPage from "@/widgets/DesktopPage";
import MobilePage from "@/widgets/MobilePage";
import { useMediaQuery } from "usehooks-ts";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  return isDesktop ? <DesktopPage /> : <MobilePage />;
}
