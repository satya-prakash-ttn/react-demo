import React from "react";
import Link from "next/link";
const Header = () => {
    return (
        <div>
            <header>
                <nav className="container">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/contact">Contact Us</Link>
                </nav>
            </header>
        </div>
    );
}

export default Header;

