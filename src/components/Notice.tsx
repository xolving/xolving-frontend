"use client"

interface TitleProps {
  children: React.ReactNode;
}

export const Notice: React.FC<TitleProps> = ({ children }) => {
  return <p className="text-md p-2 bg-red-800 text-white text-center">{children}</p>;
}