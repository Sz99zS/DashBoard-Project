'use client';
import React, { useState } from 'react';
import styles from './AgentSelect.module.css';

const AgentSelect = ({ agents }) => {
    const [isOpen, setIsOpen] = useState(false);
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
        setIsStepConfirm(false);
    };

    const handleReset = () => {
        setTempAgent('Все агенты');
        setAppliedAgent('Все агенты');
        setIsOpen(false);
        setIsStepConfirm(false);
    };

    const isChanged = tempAgent !== appliedAgent;

    return (
        <div className={styles.wrapper}>
            <div className={styles.mainButton} onClick={() => setIsOpen(!isOpen)}>
                {appliedAgent} <span className={styles.arrow}><img className={styles.ArrowIcon} src="/assets/Popup/CaretDown.svg" alt="Open" /></span>
            </div>

            {isOpen && (
                <div className={styles.dropdown}>
                    <div className={styles.header}>
                        <span>Фильтры</span>
                        <button className={styles.close} onClick={() => setIsOpen(false)}><img className={styles.CloseIcon} src='/assets/Popup/X.svg' alt='Close'/></button>
                    </div>

                    {!isStepConfirm ? (
                        <div className={styles.list}>
                            {agents.map((agent) => (
                                <div 
                                    key={agent} 
                                    className={styles.option} 
                                    onClick={() => handleSelectAgent(agent)}
                                >
                                    {agent}
                                    {tempAgent === agent && <span className={styles.check}>{`<`}</span>}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.selectedPreview} onClick={() => setIsStepConfirm(false)}>
                            {tempAgent} <span>⌵</span>
                        </div>
                    )}

                    <div className={styles.footer}>
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
            )}
        </div>
    );
};

export default AgentSelect;