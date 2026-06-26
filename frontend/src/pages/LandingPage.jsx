import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
    const [modal, setModal] = useState({ isOpen: false, items: [] });

    // 1. FULL MEDIA LIBRARY
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
        { name: 'Shaikh Sidra Hasan', percent: '90.40%', rank: '1st', img: '/sidra shaikh.png' },
        { name: 'Shaikh Abdullah Mohammad', percent: '90.20%', rank: '2nd', img: '/abdullah shaikh.png' },
        { name: 'Shaikh Sobiya Zafar', percent: '89.20%', rank: '3rd', img: '/sobiya shaikh.png' },
        { name: 'Shah Zareen Sadaf Farhan', percent: '86.00%', rank: '4th', img: '/zareen shah.png' },
        { name: 'Shaikh Fatema Akram', percent: '83.20%', rank: '5th', img: '/fatema shaikh.png' }
    ];

    const styles = {
        page: { display: 'flex', minHeight: '100vh', backgroundColor: '#f1f5f9', fontFamily: "'Segoe UI', sans-serif" },
        sidebar: { width: '250px', backgroundColor: '#1e293b', color: '#fff', padding: '30px' },
        card: { background: '#fff', padding: '20px', borderRadius: '15px', marginBottom: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' },
        circleLogo: { width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #fff' },
        galleryCover: { width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px', cursor: 'pointer' },
        // Updated Styles for Buttons
        socialBtn: { padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '8px', margin: '5px', color: '#fff', transition: 'transform 0.2s' },
        fbBtn: { backgroundColor: '#1877f2' },
        instaBtn: { backgroundColor: '#e1306c' },
        mapBtn: { backgroundColor: '#34a853' }
    };

    return (
        <div style={styles.page}>
            <aside style={styles.sidebar}>
                <img src="/millat.png" style={styles.circleLogo} />
                <h2>Millat Portal</h2>
                <Link to="/" style={{ color: '#cbd5e1' }}>Dashboard</Link>
            </aside>

            <main style={{ flex: 1, padding: '40px' }}>
                <div style={{...styles.card, display: 'flex', alignItems: 'center'}}>
                    <img src="/logo.png" style={styles.circleLogo} />
                    <h1 style={{ marginLeft: '20px' }}>Millat Public School</h1>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
                    <div style={styles.card}>
                        <h4>Annual Gallery</h4>
                        <img src="/annual1.jpeg" style={styles.galleryCover} onClick={() => setModal({ isOpen: true, items: annualMedia })} />
                    </div>
                    <div style={styles.card}>
                        <h4>Activities</h4>
                        <img src="/activity1.jpeg" style={styles.galleryCover} onClick={() => setModal({ isOpen: true, items: activityMedia })} />
                    </div>
                    <div style={styles.card}><h4>Upcoming</h4><p>Soon</p></div>
                    <div style={styles.card}><h4>Achievements</h4><p>Soon</p></div>
                </div>

                <div style={styles.card}>
                    <h2>🏆 10th Board Top Performers</h2>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        {topperData.map((s, i) => (
                            <div key={i} style={{ textAlign: 'center', flex: 1 }}>
                                <img src={s.img} style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
                                <div style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>{s.name}</div>
                                <div style={{ color: '#059669' }}>{s.percent}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={styles.card}>
                    <h3>Contact & Location</h3>
                    <p>Address: Canal Road, Jail Road, Nashik, 422101 | Ph: +91 89994 14215 | Principal: 70205 69254</p>
                    
                    {/* Buttons with colors and labels */}
                    <a href="https://share.google/FK8yHyS9P0pJtL8q3" style={{...styles.socialBtn, ...styles.mapBtn}}>
                        📍 Google Maps
                    </a>
                    <a href="https://www.facebook.com/share/1dZRX92bce/" style={{...styles.socialBtn, ...styles.fbBtn}}>
                        Facebook 🔵
                    </a>
                    <a href="https://www.instagram.com/millatpublicschool2012?igsh=dmx2MTA3dXlsaWh6" style={{...styles.socialBtn, ...styles.instaBtn}}>
                        Instagram 📷
                    </a>
                </div>
            </main>

            {modal.isOpen && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.95)', zIndex: 1000, padding: '40px', overflowY: 'auto' }} onClick={() => setModal({ isOpen: false, items: [] })}>
                    <button 
                        style={{ position: 'fixed', top: '20px', right: '30px', padding: '10px 20px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold' }}
                        onClick={() => setModal({ isOpen: false, items: [] })}
                    >Close ✕</button>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '50px' }} onClick={e => e.stopPropagation()}>
                        {modal.items.map((m, i) => m.type === 'image' ? <img key={i} src={m.src} style={{ width: '100%', borderRadius: '8px' }} /> : <video key={i} src={m.src} controls style={{ width: '100%', borderRadius: '8px' }} />)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LandingPage;