import { getCategories } from "@/actions/getCategories";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Category } from "@/types";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = async ({ children }: MainLayoutProps) => {
  const categories = await getCategories();
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer categories={categories} />
    </>
  );
};

export default MainLayout;
