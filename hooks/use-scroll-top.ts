"use client";

import { useState, useEffect, useCallback } from "react";

export const useScrollTop = (threshold: number = 100) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    if (scrollY > threshold) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { isScrolled };
};
