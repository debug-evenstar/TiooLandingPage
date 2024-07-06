import React, { FC, ReactNode } from 'react'
interface ParentLayoutProps{
  children: ReactNode;
}
const ParentLayouts: FC<ParentLayoutProps> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}
