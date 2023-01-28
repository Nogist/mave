import styles from '@/styles/Home.module.css';
import Service from '../containers/Service';


export default function Header () {
  return (
    <div >
      <div className={`${styles.header__body} bg-black w-100 h-[426px] text-center pt-[65px]`}>
        <p className={`${styles.header__text} text-[120px]`}> A Taste To Addiction </p> 
        <p className={`pt-[30px] text-[32px] text-[#CACACA]`}> What can we do for you today? </p>
      </div>
      <div className='px-[72px] '>
        <Service />
      </div>
    </div>
    
  )
}