import React from 'react';

const HeaderButtons : React.FC = () =>{
    let isLogin=false;
    return(
        <div>
            {(isLogin)?(
                <div>
                    Login
                </div>
            ):(
                <div>
                    Login
                </div>
            )}
        </div>
    )
};

export default HeaderButtons;