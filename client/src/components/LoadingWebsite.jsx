import React from 'react';

const LoadingWebsite = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex gap-4">
                <div className="w-8 h-8 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                <div className="w-8 h-8 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                <div className="w-8 h-8 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            </div>
        </div>

    );
};

export default LoadingWebsite;
