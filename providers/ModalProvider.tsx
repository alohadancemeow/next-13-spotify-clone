"use client";

import React, { useState, useEffect } from "react";
import AuthModal from "@/components/AuthModal";

type Props = {};

const ModalProvider = (props: Props) => {
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
    </>
  );
};

export default ModalProvider;
