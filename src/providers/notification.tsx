'use client';

import React, { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function NotificationProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}
