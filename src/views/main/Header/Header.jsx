import React from 'react'
import styles from './Header.module.css'

const Header = ({ onMenuClick }) => {
    return (
        <div className={styles.Header}>
            <div className={styles.BurgerMenu} onClick={onMenuClick}>
                <img src='/assets/Header/List.svg' alt='Menu' />
            </div>

            <div className={styles.BellContainer}>
                <img className={styles.Bell} src='/assets/Header/Bell.svg' alt='Bell' />
            </div>

            <div className={styles.Stripe}></div>

            <div className={styles.ProfileWrapper}>
                <div className={styles.Profile}>
                    <img className={styles.PersonalPhoto} src='/assets/Header/CV.jpg' alt='Profile' />
                    <p>Степан Зубко</p>
                    <img src='/assets/Header/CaretDown.svg' alt='Arrow' />
                </div>
            </div>
        </div>
    )
}

export default Header