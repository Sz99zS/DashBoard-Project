import React from 'react'
import styles from './Maininfo.module.css'
import Cardinfo from '../Cardinfo/Cardinfo'
import StatsSection from '../StatsSection/StatsSection'
import AgentSelect from '../AgentSelect/AgentSelect'

const Maininfo = () => {

    const agentsList = ['Все агенты', 'Агент 1', 'Агент 2'];

    return (
        <div className={styles.Main}>
            <div className={styles.HeaderMain}>
                <p>Главная</p>
            </div>

            <div className={styles.InfoBoxes}>
                <StatsSection
                    title='Результативность чатов'
                    action={<AgentSelect agents={agentsList} />}
                >
                    <Cardinfo
                        title='Остаток сообщений'
                        value='1500'
                        icon={<img src='/assets/Maininfo/ChatCircleText.svg' />} />
                    <Cardinfo
                        title='Средний расход'
                        value='0'
                        subValue='/день'
                        icon={<img src='/assets/Maininfo/Pulse.svg' />} />
                    <Cardinfo
                        title='Прогноз до исчерпания'
                        value='--'
                        icon={<img src='/assets/Maininfo/CalendarX.svg' />} />
                </StatsSection>

                <StatsSection
                    title='Общие показатели аккаунта'
                >
                    <Cardinfo
                        title='Обработано диалогов'
                        value='1245'
                        icon={<img src='/assets/Maininfo/ChatCircle.svg' />} />
                    <Cardinfo
                        title='С виполненой  задачей'
                        value='864'
                        icon={<img src='/assets/Maininfo/CheckCircle.svg' />} />
                    <Cardinfo
                        title='Эффективность чатов'
                        value='63%'
                        icon={<img src='/assets/Maininfo/Target.svg' />} />
                </StatsSection>

            </div>


            {/* <div>
                <Cardinfo
                    title='Остаток сообщений'
                    value='1500'
                    icon={<img src='/assets/Maininfo/ChatCircleText.svg' />}
                />

            </div> */}
        </div>

    )
}

export default Maininfo