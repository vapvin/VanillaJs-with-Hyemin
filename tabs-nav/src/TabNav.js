import React from 'react';

function TabNav({tabs, children, selected, setSelected}){
    return (
        <div className="wrap">
            <ul className="nav">
                {tabs.map(tab => {
                    const acitvate = (tab === selected ? 'active' : '');
                    return (
                        <li className={`list ${acitvate}`} key={tab} onClick={() => setSelected(tab)}>{tab}</li>
                    )
                })}
            </ul>
            {children}
        </div>
    )
}

export default TabNav;