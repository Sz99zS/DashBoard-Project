import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.BellContainer}>
                <img className={styles.Bell} src='/assets/Header/Bell.svg' alt='Bell' />
            </div>
            <div className={styles.Stripe}>
                
            </div>
            <div>
                <div className={styles.Profile}>
                    <img className={styles.PersonalPhoto} src='/assets/Header/CV.jpg'/>
                    <p>Степан Зубко</p>
                    <img src='/assets/Header/CaretDown.svg'/>
                </div>
            </div>
        </div>
    )
}

export default Header