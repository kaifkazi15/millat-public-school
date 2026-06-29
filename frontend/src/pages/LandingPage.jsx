import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA LAYER ---
const annualMedia = [
  { type: 'image', src: '/annual1.jpeg' }, { type: 'image', src: '/annual3.jpeg' },
  { type: 'image', src: '/annual4.jpeg' }, { type: 'image', src: '/annual5.jpeg' },
  { type: 'image', src: '/annual6.jpeg' }, { type: 'video', src: '/annual.mp4' },
  { type: 'video', src: '/annualv2.mp4' }
];

const activityMedia = [
  { type: 'image', src: '/activity1.jpeg' }, { type: 'image', src: '/activity2.jpeg' },
  { type: 'image', src: '/activity3.jpeg' }, { type: 'image', src: '/activity4.jpeg' },
  { type: 'image', src: '/activity5.jpeg' }, { type: 'image', src: '/activity6.jpeg' },
  { type: 'image', src: '/activity7.jpeg' }, { type: 'image', src: '/activity8.jpeg' },
  { type: 'image', src: '/activity10.jpeg' }, { type: 'image', src: '/activity11.jpeg' },
  { type: 'image', src: '/activity12.jpeg' }, { type: 'image', src: '/activity13.jpeg' },
  { type: 'image', src: '/activity16.jpeg' }, { type: 'image', src: '/activity17.jpeg' },
  { type: 'image', src: '/activity18.jpeg' }, { type: 'video', src: '/activity9.mp4' },
  { type: 'video', src: '/activity14.mp4' }, { type: 'video', src: '/activity15.mp4' },
  { type: 'video', src: '/activity16.mp4' }
];
const topperData = [
  { name: 'Shaikh Sidra Hasan', percent: '90.40%', img: '/sidra shaikh.png' },
  { name: 'Shaikh Abdullah Mohammad', percent: '90.20%', img: '/abdullah shaikh.png' },
  { name: 'Shaikh Sobiya Zafar', percent: '89.20%', img: '/sobiya shaikh.png' },
  { name: 'Shah Zareen Sadaf', percent: '86.00%', img: '/zareen shah.png' },
  { name: 'Shaikh Fatema Akram', percent: '83.20%', img: '/fatema shaikh.png' }
];



const LandingPage = () => {
  const [modal, setModal] = useState({ isOpen: false, items: [] });
  const galleryRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });

  

 return (
    <div style={{ minHeight: '100vh', width: '100vw', background: '#c8dff7', color: '#021431', fontFamily: "'Inter', sans-serif" }}>
      {/* Feature 1: Watermark Background */}
      <img src="/millat.png" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '1400px', opacity: 0.03, zIndex: 0, pointerEvents: 'none' }} />

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <aside style={{ width: '280px',flexShrink:0, background: '#111725', color: '#fff', minHeight: '100vh', padding: '30px', position: 'sticky', top: 0, zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
            <img src="/logo.png" style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid #47b9ea', boxShadow: '0 0 15px rgba(56,189,248,0.5)' }} />
            <div>
              <h2 style={{ fontSize: '1.1rem', margin: 0, color: '#38bdf8' }}>MILLAT PUBLIC SCHOOL</h2>
              <p style={{ fontSize: '0.75rem', margin: 0, opacity: 0.7 }}>Knowledge • Discipline • Excellence</p>
            </div>
          </div>


          <div style={{ 
  width: '100%', 
  maxWidth: '1200px', 
  margin: '0 auto 20px auto', 
  background: '#3bced8', 
  color: '#000', 
  padding: '10px', 
  borderRadius: '10px', 
  fontWeight: 'bold', 
  overflow: 'hidden' 
}}>
  <marquee scrollamount="8">
    🌟 Welcome to Millat Public School | 📚 admission are open 2026-2026| 🏫 Join our growing community today!
  </marquee>
</div>

          


          


          



<nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <motion.a whileHover={{ x: 5, backgroundColor: '#eceff5' }} href="#" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', color: '#fff', textDecoration: 'none', transition: '0.3s' }}>
      📊 Dashboard
    </motion.a>
    
    <motion.a whileHover={{ x: 5, backgroundColor: '#e1306c' }} href="https://www.instagram.com/millatpublicschool2012?igsh=dmx2MTA3dXlsaWh6" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', color: '#fff', textDecoration: 'none', transition: '0.0s' }}>
      📸 Instagram
    </motion.a>
    
    <motion.a whileHover={{ x: 5, backgroundColor: '#f2052d' }} href="https://youtube.com/@millatpublicschoolnsk?si=T8CGjKK3tFbMgkT_" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', color: '#fff', textDecoration: 'none', transition: '0.1s' }}>
      ▶️Youtube
    </motion.a>
     <motion.a whileHover={{ x: 5, backgroundColor: '#6ddb66' }} href="https://share.google/FK8yHyS9P0pJtL8q3" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', color: '#fff', textDecoration: 'none', transition: '0.1s' }}>
      📍 Location
    </motion.a>
    
    <motion.a whileHover={{ x: 5, backgroundColor: '#1877f2' }} href="https://www.facebook.com/share/1dZRX92bce/" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', color: '#fff', textDecoration: 'none', transition: '0.1s' }}>
      👥 Facebook
    </motion.a>
  </nav>
</aside>






        <main style={{ flex: 1, overflowY: 'auto',overflowX: 'hidden',display: 'flex', flexDirection: 'column', padding: '50px' }}>
         <section style={{ 
  width: '100%', 
  height: '450px', 
  maxWidth: '1200px', 
  margin: '0 auto', // Center alignment ke liye
  position: 'relative', // IMPORTANT: Labels ko corners mein fix karne ke liye
  background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/banner.jpg) center/cover', 
  borderRadius: '30px', 
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'center', 
  alignItems: 'center', 
  color: '#f1ebeb', 
  marginBottom: '40px' 
}}>

  {/* FIXED LABELS: Ye ab h1 ko disturb nahi karenge */}
  <span style={{ position: 'absolute', top: '20px', left: '20px', background: '#3bced8', padding: '10px 20px', borderRadius: '20px', fontSize: '1rem', fontWeight: 'bold', color: '#000' }}>
    ESTD: 2012
  </span>
  
  <span style={{ position: 'absolute', top: '0px', right: '0px', background: '#3bced8', padding: '0px 20px', borderRadius: '20px', fontSize: '1rem', fontWeight: 'bold', color: '#000' }}>
    
  </span>

  {/* MILLAT PUBLIC SCHOOL (Ab ye perfectly center mein rahega) */}
  <h1 style={{ fontSize: '4rem', margin: '0' }}>
    Millat Public School
  </h1>

  {/* Buttons */}
  <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
    <button 
      onClick={() => scrollToSection(galleryRef)} 
      onMouseEnter={(e) => { e.target.style.background = '#ffffff'; e.target.style.color = '#30a4d6'; }}
      onMouseLeave={(e) => { e.target.style.background = '#3bced8'; e.target.style.color = '#ffffff'; }}
      style={{ padding: '11px 50px', borderRadius: '40px', border: 'none', background: '#3bced8', color: '#fff', cursor: 'pointer', transition: '0.3s' }}
    >
      Explore Now
    </button>

    <button 
      onClick={() => scrollToSection(footerRef)} 
      onMouseEnter={(e) => { e.target.style.background = '#ffffff'; e.target.style.color = '#000000'; e.target.style.borderColor = '#ffffff'; }}
      onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#fff'; e.target.style.borderColor = '#fff'; }}
      style={{ padding: '11px 50px', borderRadius: '50px', border: '2px solid #fff', background: 'transparent', color: '#fff', cursor: 'pointer', transition: '0.3s' }}
    >
      Contact Us
    </button>
  </div>
</section>
          <div ref={galleryRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            <GalleryCard title="Annual Gallery" cover="/annual1.jpeg" onClick={() => setModal({ isOpen: true, items: annualMedia })} />
            <GalleryCard title="School Activities" cover="/activity1.jpeg" onClick={() => setModal({ isOpen: true, items: activityMedia })} />
          </div>

        <section style={{ background: '#fff', padding: '40px', borderRadius: '30px', marginBottom: '40px' }}>
  <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>🏆 Top Performers</h2>
  
  <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', padding: '10px' }}>
    {topperData.map((s, i) => (
      <div 
        key={i} 
        style={{ 
          minWidth: '200px', 
          background: '#f8fafc', 
          borderRadius: '20px', 
          padding: '20px', 
          textAlign: 'center',
          transition: 'transform 0.3s ease-in-out', 
          cursor: 'pointer',
          border: '1px solid #e2e8f0'
        }}
        // Mouse hover par card upar aayega
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-15px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
      >
        <img src={s.img} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
        <h4 style={{ margin: '10px 0' }}>{s.name}</h4>
        <div style={{ background: '#dcfce7', padding: '5px', borderRadius: '10px', color: '#166534', fontWeight: 'bold' }}>
          {s.percent}
        </div>
      </div>
    ))}
  </div>
</section>







          <section style={{ background: '#fff', padding: '40px', borderRadius: '30px', display: 'flex', gap: '40px', marginBottom: '40px' }}>
            <img src="/principle.jpeg" style={{ width: '200px', height: '200px', borderRadius: '20px', objectFit: 'cover' }} />
            <div>
                
              <h2>Wasim Gayasuddin Shaikh (Principal)</h2>
              <h3>Total 17 years teaching experience 
Out of 17 years  4 years experience as a head</h3>
              <p>Welcome to Millat Public School. We focus on academic excellence and character building.</p>
            </div>
          </section>

         <section style={{ marginTop: '40px' }}>
  <h2>Our Focus On</h2>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
    {[
      { name: 'Proper Guidance', img: '/guidanced.jpeg' },
      { name: 'Innovation', img: '/innovation.jpeg' },
      { name: 'Sports', img: '/sports.jpeg' },
      { name: 'Discipline', img: '/motivated.jpeg' }
    ].map((f) => (
      <motion.div 
        whileHover={{ y: -10 }} 
        key={f.name} 
        style={{ background: '#fff', padding: '20px', borderRadius: '20px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}
      >
        <img 
          src={f.img} 
          alt={f.name} 
          style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '15px', marginBottom: '15px' }} 
        />
        <h3 style={{ margin: 0 }}>{f.name}</h3>
      </motion.div>
    ))}
  </div>
</section>






<section style={{ marginTop: '40px', marginBottom: '40px' }}>
  <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>🏫 Our Facilities</h2>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
    
    {/* Facility 1 */}
    <motion.div whileHover={{ y: -10 }} style={{ background: '#fff', padding: '70px', borderRadius: '20px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
      <img src="/cctv.png" alt="Facility" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '15px', marginBottom: '15px' }} />
      <h3 style={{ margin: '10px 0' }}>CCTV Surveillance (Security)</h3>
      <p style={{ fontSize: '0.9rem', color: '#64748b' }}> 24/7 CCTV Security</p>
      <p style={{ fontSize: '0.9rem', color: '#64748b' }}>"Our campus is fully monitored by high-definition CCTV cameras, ensuring a safe, secure, and disciplined environment for every student at all times."</p>
    </motion.div>

    {/* Facility 2 */}
    <motion.div whileHover={{ y: -10 }} style={{ background: '#fff', padding: '20px', borderRadius: '20px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
      <img src="/study.jpeg" alt="Facility" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '15px', marginBottom: '15px' }} />
      <h3 style={{ margin: '10px 0' }}>Language Excellence 
        (Urdu & Arabic)</h3>

<p style={{ fontSize: '0.9rem', color: '#64748b' }}>Language Excellence (Urdu & Arabic)</p>
      <p style={{ fontSize: '0.9rem', color: '#64748b' }}>"We provide specialized training in Urdu and Arabic languages, helping students connect with their cultural roots while mastering essential linguistic skills."</p>
       
    </motion.div>


    
    {/* Facility 2 */}
    <motion.div whileHover={{ y: -10 }} style={{ background: '#fff', padding: '20px', borderRadius: '20px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
      <img src="/wsa.jpg" alt="Facility" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '15px', marginBottom: '15px' }} />
      <h3 style={{ margin: '10px 0' }}>Expert Guest Lectures</h3>
      <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Expert Lectures</p>
      <p style={{ fontSize: '0.9rem', color: '#64748b' }}>"We invite subject matter experts and industry professionals to conduct special guest lectures, providing students with advanced knowledge beyond their regular curriculum."</p>
      
    </motion.div>

    {/* Isi tarah jitne chahiye utne blocks copy-paste kar lo */}
    
  </div>
</section>

          <footer ref={footerRef} style={{ marginTop: '60px', padding: '40px', background: '#0f172a', color: '#fff', borderRadius: '30px' }}>
            <p>Address: Millat Public School,sainath Nagar, cenal Road,Jail Road, Nashik 422101.  | Phone: 99919 23234  | principle No. 70205 69254</p>
              <p>millatpublicschoolnsk@gmail.com</p>
            <p>Millat Public School | © 2026 All Rights Reserved | Developed by Team Millat</p>
          </footer>
        </main>
      </div>

      <AnimatePresence>
        {modal.isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.95)', zIndex: 1000, padding: '40px', overflowY: 'auto' }} onClick={() => setModal({ isOpen: false, items: [] })}>
            <button onClick={() => setModal({ isOpen: false })} style={{ position: 'fixed', top: 20, right: 30, background: '#ef4444', color: '#fff', border: 'none', padding: '12px 25px', borderRadius: '10px', cursor: 'pointer' }}>Close ✕</button>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '60px' }} onClick={e => e.stopPropagation()}>
              {modal.items.map((m, i) => m.type === 'image' ? <img key={i} src={m.src} style={{ width: '100%', borderRadius: '15px' }} /> : <video key={i} src={m.src} controls style={{ width: '100%' }} />)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const GalleryCard = ({ title, cover, onClick }) => (
  <motion.div whileHover={{ y: -5 }} style={{ background: '#fff', padding: '20px', borderRadius: '20px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }} onClick={onClick}>
    <h3>{title}</h3>
    <img src={cover} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '15px' }} />
  </motion.div>
);

export default LandingPage;