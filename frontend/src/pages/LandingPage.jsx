import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const allGalleryImages = ['/school-stage.jpg', '/logo.png', '/millat.png', '/public.png'];

    const styles = {
        container: { 
            display: 'flex', minHeight: '100vh', 
            backgroundImage: 'url(/school-stage.jpg)', 
            backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',
            fontFamily: 'sans-serif' 
        },
        sidebar: { width: '260px', backgroundColor: 'rgba(30, 41, 59, 0.95)', color: '#fff', padding: '30px', position: 'sticky', top: 0, height: '100vh' },
        main: { flex: 1, padding: '30px', backgroundColor: 'rgba(241, 245, 249, 0.9)' },
        nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: '20px 30px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', marginBottom: '30px' },
        card: { padding: '25px', backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '20px' },
        grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px', marginTop: '20px' },
        squareCard: { borderRadius: '20px', overflow: 'hidden', cursor: 'pointer', height: '180px', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' },
        menuItem: { padding: '20px 0', borderBottom: '1px solid #334155', display: 'block', textDecoration: 'none', color: '#cbd5e1', fontSize: '1.1rem' },
        infoBox: { backgroundColor: '#1e293b', color: '#fff', padding: '25px', borderRadius: '15px', flex: 1, minWidth: '300px' }
    };

    return (
        <div style={styles.container}>
            <aside style={styles.sidebar}>
                <img src="/millat.png" style={{width: '70px', borderRadius: '50%', marginBottom: '20px'}} />
                <h2 style={{fontSize: '1.4rem', marginBottom: '40px'}}>Millat Portal</h2>
                <nav>
                    <Link to="/" style={styles.menuItem}>Dashboard</Link>
                    <Link to="/teacher-dashboard" style={styles.menuItem}>Staff Portal</Link>
                </nav>
            </aside>

            <main style={styles.main}>
                <nav style={styles.nav}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/logo.png" style={{width: '45px', borderRadius: '50%'}} />
                        <h2 style={{ marginLeft: '15px', color: '#1e293b' }}>Millat Public School</h2>
                    </div>
                    <button style={{padding: '10px 20px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer'}} onClick={() => navigate('/login')}>Student Login</button>
                </nav>

                <div style={styles.card}>
                    <h3>Past Events</h3>
                    <div style={styles.grid}>
                        <div style={styles.squareCard} onClick={() => setIsModalOpen(true)}>
                            <img src="/school-stage.jpg" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                        </div>
                        {[1, 2, 3].map((i) => (
                            <div key={i} style={styles.squareCard}><span style={{color: '#94a3b8'}}>Soon</span></div>
                        ))}
                    </div>
                </div>

                {/* School Information Section */}
                <div style={styles.card}>
                    <h3>School Information</h3>
                    <div style={{ display: 'flex', gap: '30px', marginTop: '20px', flexWrap: 'wrap' }}>
                        <div style={styles.infoBox}>
                            <p><strong>Address:</strong> Canal Road, Jail Road, Nashik, 422101</p>
                            <p><strong>Phone:</strong> +91 89994 14215</p>
                            <p><strong>Email:</strong> millatpublicschoolnasik@gmail.com</p>
                            <a href="https://share.google/FK8yHyS9P0pJtL8q3" target="_blank" style={{ display: 'inline-block', marginTop: '15px', padding: '10px 15px', backgroundColor: '#3b82f6', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>📍 View on Map</a>
                        </div>
                        <div style={{ flex: 1, minWidth: '300px', borderRadius: '15px', overflow: 'hidden' }}>
                            <iframe src="https://www.google.com/maps/embed?..." width="100%" height="250" style={{ border: 0 }}></iframe>
                        </div>
                    </div>
                </div>
            </main>

            {isModalOpen && (
                <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000}} onClick={() => setIsModalOpen(false)}>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', maxWidth: '900px', padding: '20px'}} onClick={(e) => e.stopPropagation()}>
                        {allGalleryImages.map((img, i) => <img key={i} src={img} style={{width: '100%', borderRadius: '15px'}} />)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LandingPage;