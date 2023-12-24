import styles from '../style'
import {arrowUp} from '../assets'

const GetStarted = () => (
  // parent div _ circular shape
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    {/* changing the background of the circular shape to black */}
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      {/* The first word _ 'Get'  */}
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-23[px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        {/* Arrow image */}
        <img src={arrowUp} alt="arrow" className="w-[23px] h-[23-px] object-contain" />
      </div>
      {/* The second word _ 'Started'  */}
      <p className="font-poppins font-medium text-[18px] leading-23[px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>      
  </div>
)

export default GetStarted