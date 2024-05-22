import './style.css'

function index() {
  return (
    <>
    <div className="section2">
<div className="section2-img"></div>
<div className="timer">
    <div className="timer-text">Deal Of The Week</div>
    <div className='displayflexed-times'>
   <div className='clock'><span style={{fontSize:"70px",marginTop:"45px"}}>2</span><br /> <span style={{color:"grey",fontSize:"20px"}}>Day</span></div>
    <div className='clock'><span style={{fontSize:"70px",marginTop:"45px"}}>20</span> <br /><span style={{color:"grey",fontSize:"20px"}}>Hours</span></div>
    <div className='clock'><span style={{fontSize:"70px",marginTop:"45px"}}>23</span> <br /><span style={{color:"grey",fontSize:"20px"}}>Mins</span></div>
   <div className='clock'><span style={{fontSize:"70px",marginTop:"45px"}}>29</span> <br /><span style={{color:"grey",fontSize:"20px"}}>Sec</span></div>
    </div>
  <button style={{width:"100px",height:"40px",backgroundColor:"black",color:"wheat"}}>SHOP NOW</button>
</div>
    </div>
    </>
  )
}

export default index