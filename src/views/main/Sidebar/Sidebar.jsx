import React from 'react'
import styles from './Sidebar.module.css'

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && <div className={styles.Overlay} onClick={onClose}></div>}

            <div className={`${styles.Sidebar} ${isOpen ? styles.Active : ''}`}>
                <div className={styles.FlexLogos1}>
                    <div className={styles.HeaderLogos}>
                        <img className={styles.ImageHeader} src='/assets/Sidebar/Group.svg' alt='Group Logo' />
                        <img className={styles.ImageHeader2} src='/assets/Sidebar/CaretDoubleLeft.svg' alt='Arrows' />
                    </div>
                    <div className={styles.MainLogos}>
                        <img className={styles.ImageMain} src='/assets/Sidebar/SquaresFour.svg' alt='Squares' />
                        <img className={styles.ImageMain} src='/assets/Sidebar/ChatCircleDots.svg' alt='Chats' />
                        <img className={styles.ImageMain} src='/assets/Sidebar/HeadCircuit.svg' alt='Head' />
                        <img className={styles.ImageMain} src='/assets/Sidebar/ShareNetwork.svg' alt='Shares' />
                        <img className={styles.ImageMain} src='/assets/Sidebar/Users.svg' alt='Users' />
                        <img className={styles.ImageMain} src='/assets/Sidebar/Coins.svg' alt='Coins' />
                    </div>
                </div>

                <div className={styles.FlexLogos2}>
                    <div className={styles.FooterLogos}>
                        <img className={styles.ImageFooter} src='/assets/Sidebar/cta.svg' alt='Headphones' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar