"use client";

import React, { useState, useEffect } from "react";
import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
import { ProductWithPrice } from "@/types/myTypes";
import SubscribeModal from "@/components/SubscribeModal";

type Props = {
  products: ProductWithPrice[];
};

const ModalProvider = ({ products }: Props) => {
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <AuthModal />
      <UploadModal />
      <SubscribeModal products={products} />
    </>
  );
};

export default ModalProvider;
