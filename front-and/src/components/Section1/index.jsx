import './style.css'


function index() {
  return (
    <>
    <div className="section1">
<div className="arrivals">New Arrivals</div>
<div className="button">
    <button className='btn'>ALL</button>
    <button style={{backgroundColor:"red",color:"white"}} className='btn'>WOMEN`S</button>
    <button className='btn'>ACCESSORIES</button>
    <button className='btn'>MEN`S</button>
</div>
 <div className="cards">
<div className="product">
    <img src="https://preview.colorlib.com/theme/coloshop/images/product_2.png" alt="" /> <br />  <br />
    
    <span style={{marginLeft:"15px"}}>Samsung CF591 Series Curved 27-Inch FHD Monitor</span> <br /> <br />
    <span  style={{color:"#FE5053", marginLeft:"55px"}}>$610.00</span> <br /> <br />
    <button className='cart'>Add to cart</button>
    
</div>
<div className="product">
    <img style={{marginLeft:"20px"}} src="https://preview.colorlib.com/theme/coloshop/images/product_3.png" alt="" /> <br />  <br />

    <span style={{marginLeft:"15px"}}>Blue Yeti USB Microphone Blackout Edition</span> <br /> <br />
    <span  style={{color:"#FE5053", marginLeft:"55px"}}>$120.00</span> <br /> <br />
    <button className='cart'>Add to cart</button>
    
</div>
<div className="product">
    <img src="https://preview.colorlib.com/theme/coloshop/images/product_5.png" alt="" /> <br />  <br />
    <span style={{marginLeft:"15px"}}>Pryma Headphones, Rose Gold & Grey</span> <br /> <br />
    <span  style={{color:"#FE5053", marginLeft:"55px"}}>$180.00</span> <br /> <br />
    <button className='cart'>Add to cart</button>
    
</div>
<div className="product">
    <img src="https://preview.colorlib.com/theme/coloshop/images/product_7.png" alt="" /> <br />  <br />
    <span style={{marginLeft:"15px"}}>Samsung CF591 Series Curved 27-Inch FHD Monitor</span> <br /> <br />
    <span style={{color:"#FE5053", marginLeft:"55px"}}>$610.00</span> <br /> <br />
    <button className='cart'>Add to cart</button>
    
</div>
 </div>


    </div>
    
    </>
  )
}

export default index