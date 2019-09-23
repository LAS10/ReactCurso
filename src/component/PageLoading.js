import React from 'react';
import "./styles/PageLoading.css";
import "./styles/Loader.css";
function PageLoading()
{
    return (
        <div className="PageLoading">
            <div className="lds-grid">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
}

export default PageLoading;