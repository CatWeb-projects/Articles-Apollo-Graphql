import React from 'react';
import { Header } from '../Header/Header';

import './Layout.scss';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__wrapper">
        {children}
      </div>
    </div>
  )
}