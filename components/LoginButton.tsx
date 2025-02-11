'use client'

import { signIn } from "next-auth/react";
import { useState } from "react";

function LoginButton() {
    const [isLoading, setIsLoading] = useState(false);
    
    const handleLogin = async () => { 
        setIsLoading(true);
        await signIn("microsoft-entra-id");
        setIsLoading(false);  // Enable the button after the login process completes.
    }
    
    return (
        <button
            onClick={() => handleLogin()}
            disabled={isLoading}
            className="w-full bg-blue-800 text-white my-5 p-3 rounded-md hover:opacity-80 disabled:opaacity-75"
        >
            {isLoading ? "Signing in..." : "Login with Microsoft"}
        </button>
    );
}

export default LoginButton
