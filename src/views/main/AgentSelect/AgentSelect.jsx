'use client';
import React, { useState } from 'react';
import styles from './AgentSelect.module.css';

const AgentSelect = ({ agents }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showFilterPopup, setShowFilterPopup] = useState(false);
    
    const [tempAgent, setTempAgent] = useState('Все агенты');
    const [appliedAgent, setAppliedAgent] = useState('Все агенты');
    const [isStepConfirm, setIsStepConfirm] = useState(false);

    const handleSelectAgent = (agent) => {
        setTempAgent(agent);
        setIsStepConfirm(true); 
    };

    const handleApply = () => {
        setAppliedAgent(tempAgent);
        setIsOpen(false);
        setShowFilterPopup(false);
        setIsStepConfirm(false);
    };

    const handleReset = () => {
        setTempAgent('Все агенты');
        setAppliedAgent('Все агенты');
        setIsOpen(false);
        setShowFilterPopup(false);
        setIsStepConfirm(false);
    };

    const isChanged = tempAgent !== appliedAgent;

    const FilterBody = (
        <div className={styles.FilterContainer}>
            <div className={styles.Header}>
                <span>Фильтры</span>
                <button className={styles.Close} onClick={() => {setIsOpen(false); setShowFilterPopup(false)}}>
                    <img className={styles.CloseIcon} src='/assets/Popup/X.svg' alt='Close'/>
                </button>
            </div>

            {!isStepConfirm ? (
                <div className={styles.List}>
                    {agents.map((agent) => (
                        <div 
                            key={agent} 
                            className={styles.Option} 
                            onClick={() => handleSelectAgent(agent)}
                        >
                            {agent}
                            {tempAgent === agent && <span className={styles.Check}>{`<`}</span>}
                        </div>
                    ))}
                </div>
            ) : (
                <div className={styles.SelectedPreview} onClick={() => setIsStepConfirm(false)}>
                    {tempAgent} <span>⌵</span>
                </div>
            )}

            <div className={styles.Footer}>
                <button 
                    className={isChanged ? styles.btnApply : styles.btnDisabled}
                    onClick={handleApply}
                    disabled={!isChanged}
                >
                    Применить фильтры
                </button>

                {(appliedAgent !== 'Все агенты' || tempAgent !== 'Все агенты') && (
                    <button className={styles.btnReset} onClick={handleReset}>
                        Сбросить
                    </button>
                )}
            </div>
        </div>
    );

    return (
        <div className={styles.Wrapper}>
            <div className={styles.MainButton} onClick={() => setIsOpen(!isOpen)}>
                {appliedAgent} <span className={styles.Arrow}><img className={styles.ArrowIcon} src="/assets/Popup/CaretDown.svg" alt="Open" /></span>
            </div>

            <div className={styles.MobileToggle} onClick={() => setShowFilterPopup(true)}>
                <img src="/assets/Popup/cta.svg" alt="Filter" />
            </div>

            {isOpen && (
                <div className={styles.Dropdown}>
                    {FilterBody}
                </div>
            )}

            {showFilterPopup && (
                <div className={styles.MobileOverlay}>
                    <div className={styles.MobilePopup}>
                        {FilterBody}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AgentSelect;