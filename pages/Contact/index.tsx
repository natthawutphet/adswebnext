import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'


export default function index() {
  return (
    <>
      <Head>
           <title>ติดต่อทีมงานบริการ การตลาดGoogle YouTube Facebook</title>
           <meta name="description" content="ติดต่อทีมงานบริการ การตลาดGoogle YouTube Facebook"/>

    </Head>

<section >
      <div className="container contact-page text-center">
   
   
   <h2>Contact </h2>
   <h3>ติดต่อทีมงานบริการ การตลาดGoogleYouTubeFacebook</h3>
   <div className="contact-wrapper">
       <div className="form-container">
          
          
          
          
          
          
          
           <form>
               <input type="text" className="form-control" placeholder="Your Name" /> <br />
               <input type="email" className="form-control" placeholder="Your Email" /><br />
               <textarea placeholder="Your Message" className="form-control"></textarea><br />
               <button type="submit" className="btn btn-info">Send Message</button>
           </form>
       </div>


       <div className="contact-info">
           <p><strong>Address:</strong> Ads Manager 32 Soi 20 Charoenrat Road, <br /> Khlong San District, Bangkok 10160</p>
           <p><strong>Phone:</strong> 0956650050</p> 
           <p><strong>Email:</strong> admin@AdsManager.com</p>
           <p> 
            
           <Link className="navbar-brand" href="/">
    
    <Image src="/line.gif" alt="Favicon" width={60} height={60}  />


    
    </Link>
             </p>


           <p> line : @adsmanager </p>
           <p>0956650050</p>
       
       </div>
   </div>
</div>
      </section>
      
    </>
  )
}
