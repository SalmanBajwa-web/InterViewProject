import React, { useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();


export const AppProvider = ({ children }) => {
    // ############### state
    const [activeItem, setActiveItem] = useState(
        {
            name: 'Bag',
            icon: <svg fill="#757575" opacity="1.0" width="50" height="50" viewBox="0 0 512 512"><path d="M448 160h-64v-4.5C384 87 329 32 260.5 32h-8C184 32 128 87 128 155.5v4.5H64L32 480h448l-32-320zm-288-4.5c0-50.7 41.8-91.5 92.5-91.5h8c50.7 0 91.5 40.8 91.5 91.5v4.5H160v-4.5zM67.8 448l24.9-256H128v36.3c-9.6 5.5-16 15.9-16 27.7 0 17.7 14.3 32 32 32s32-14.3 32-32c0-11.8-6.4-22.2-16-27.7V192h192v36.3c-9.6 5.5-16 15.9-16 27.7 0 17.7 14.3 32 32 32s32-14.3 32-32c0-11.8-6.4-22.2-16-27.7V192h35.4l24.9 256H67.8z" /></svg>, link: 'https://jsonplaceholder.typicode.com/posts',
            degree: 0,
        },
    );


    return (
        <AppContext.Provider value={{
            activeItem,
            setActiveItem,
        }}>

            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext);
}