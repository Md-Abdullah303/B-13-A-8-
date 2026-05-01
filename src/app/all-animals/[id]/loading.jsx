import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div className="flex flex-col items-center gap-2 h-[66vh] justify-center">
              <Spinner size="xl" />
        </div>
    );
};

export default loading;