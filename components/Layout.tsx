import React from "react";

interface LayoutProps {
    children?: React.ReactNode;
    className?: string;
}

const Layout = ({ children, className=""}: LayoutProps) => {
    return (
        <div className={`w-full h-full inline-block z-0 ${className}`}>
            {children}
        </div>
    );
}

export { Layout };
