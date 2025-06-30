import React, { Suspense } from "react";
type Props = {
  children: React.ReactNode;
  fallbackText?: string;
};
const SuspenseWrapper = ({ children, fallbackText = "loading..." }: Props) => {
  return <Suspense fallback={<div>{fallbackText}</div>}>{children}</Suspense>;
};

export default SuspenseWrapper
