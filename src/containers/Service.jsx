import Image from "next/image";
import interior from '@/assets/interior.png';
import inters from '@/assets/interior3.png';
import inter from '@/assets/interior2.png';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';

export default function Service () {

  const [interiors, setInteriors] = useState(true)
  const [automobile, setAutomobile] = useState(false);
  const [ceramics, setCeramics] = useState(false);

  const int = () => {
    setInteriors(!interiors)
    setAutomobile(false)
    setCeramics(false)
  }
  const auto = () => {
    setAutomobile(!automobile);
    setInteriors(false)
    setCeramics(false)
  }
  const cera = () => {
    setCeramics(!ceramics);
    setAutomobile(false);
    setInteriors(false)
  }
  return (
    <div className='w-100 relative bottom-[121px] h-[802px] rounded-[16px] border-x-[2px] border-b-[2px] border-[ #E9E9E9] bg-[#FEFFFF]'>
      <div className={`${styles.service__text} bg-[#FBFBFB] rounded-t-[16px] border border-b-[#393A32] w-100 flex items-center justify-between`}>
        <p className={interiors ? 'rounded-t-[16px] bg-[#FFFACA] border-b-[10px] border-b-[#393A32] border-r-2 border-[#E9E9E9]':'border-r-2 border-[#E9E9E9]'}
           onClick={int}>Interiors</p>
        <p className={automobile ? 'bg-[#FFFACA] border-b-[10px] border-b-[#393A32] border-r-2 border-[#E9E9E9]':'border-r-2 border-[#E9E9E9]'}
          onClick={auto}>Automobile</p>
        <p className={ceramics ? 'bg-[#FFFACA] border-b-[10px] border-b-[#393A32] border-r-2 border-[#E9E9E9]':'border-r-2 border-[#E9E9E9]'}
          onClick={cera}>Ceramics</p>
      </div>
      { interiors && <div className="flex items-center justify-between pt-[84px]  ">
        <div className="flex w-[100%] gap-[52px] flex-col border-[#EFA535] border-y-[2px] py-[45px] pl-[82px]">
          <span>
            <p className="text-[72px] text-[#212222] font-extrabold leading-[110%] pd-[16px]"> Order Some Interiors</p>
            <p className="text-[24px] text-[#212222] font-normal leading-[150%] ">We have some amazing collection of <br/>interiors at exclusive and affordable rates</p>
          </span>
          <span className="flex items-center gap-[24px]">
            <button>CONTACT US</button>
            <button className="bg-white text-[#EFA535] border-[2px] border-[#EFA535]">READ MORE</button>
          </span>
        </div>
        <Image className="border-[#EFA535] border-[2px] px-[4.79px] py-[4.5px]"
          src={interior}
          width={624.41}
          height={521}
        />
      </div>}
      { automobile && <div className="flex flex-row-reverse items-center justify-between pt-[84px]  ">
      <Image className="border-y-[#EFA535] border-y-[2px] py-[4.5px]"
          src={inters}
          
        />
       </div> }
      { ceramics && <div className="flex flex-row-reverse items-center justify-between pt-[84px]  ">
        <div className="flex w-[100%] gap-[52px] flex-col border-[#EFA535] border-y-[2px] py-[45px] pl-[82px]">
          <span>
            <p className="text-[72px] text-[#212222] font-extrabold leading-[110%] pd-[16px]"> Order Some Interiors</p>
            <p className="text-[24px] text-[#212222] font-normal leading-[150%] ">We have some amazing collection of <br/>interiors at exclusive and affordable rates</p>
          </span>
          <span className="flex items-center gap-[24px]">
            <button>CONTACT US</button>
            <button className="bg-white text-[#EFA535] border-[2px] border-[#EFA535]">READ MORE</button>
          </span>
        </div>
        <Image className="border-[#EFA535] border-[2px] px-[4.79px] py-[4.5px]"
          src={inter}
          width={624.41}
          height={521}
        />
      </div>}
    </div>
  )
}