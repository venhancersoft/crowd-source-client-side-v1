import React from 'react';
import {useStore} from '@/store/store';

function LogoutPage() {
    const setStoreState = useStore(state => state.setStoreState);

    function onLogout() {
        setStoreState({auth: null})
    }

    return (
        <>
            <button title="READ MORE" className="site-button" onClick={onLogout}>
                <i className="fa fa-lock"></i> Çıkış Yap
            </button>
        </>
    )
}

export default LogoutPage