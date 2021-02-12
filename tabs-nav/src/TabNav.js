import React from 'react';

function TabNav({tabs, children, setSelected}){
    return (
        <div className="wrap">
            <ul className="nav">
                {tabs.map(tab => {
                    return (
                        <li key={tab} onClick={() => setSelected(tab)}>{tab}</li>
                    )
                })}
            </ul>
            {children}
        </div>
    )
}

export default TabNav;