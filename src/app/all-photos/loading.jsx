import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loading = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <FadeLoader
          color="#36d399"
          size={150}
        />
      </div>
    );
};

export default Loading;