"use client"; 
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);

        const redirectTimer = setTimeout(() => {
            router.push("/");
        }, 5000);

        return () => {
            clearInterval(timer);
            clearTimeout(redirectTimer);
        };
    }, [router]);

    return (
        <div className="container text-center">
            <h1 className="text-4xl mb-4 mt-8">404 - Page Not Found</h1>
            <p className="text-lg">Redirecting to the homepage in {countdown} seconds...</p>
        </div>
    );
};

export default NotFound;
