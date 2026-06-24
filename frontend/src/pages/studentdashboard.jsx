import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

export default function StudentDashboard() {
    const { logout, token } = useContext(AuthContext);
    const [report, setReport] = useState(null);

    useEffect(() => {
        const fetchAIReport = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/student/predict', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setReport(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchAIReport();
    }, [token]);

    return (
        <div className="min-h-screen bg-slate-50">
            <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">Student AI Analytics Dashboard 🎓</h1>
                <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">Logout</button>
            </nav>
            <div className="max-w-4xl mx-auto p-6 mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border">
                    <h3 className="text-gray-500 font-bold text-sm uppercase">Attendance Metric</h3>
                    <p className="text-3xl font-black mt-2 text-emerald-600">{report ? `${report.attendance}%` : 'Loading...'}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border">
                    <h3 className="text-gray-500 font-bold text-sm uppercase">Academic Avg Score</h3>
                    <p className="text-3xl font-black mt-2 text-indigo-600">{report ? `${report.academic_average}%` : 'Loading...'}</p>
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-xl shadow">
                    <h3 className="font-bold text-sm uppercase opacity-90">AI Predicted Performance</h3>
                    <p className="text-4xl font-black mt-2">{report ? `${report.ai_predicted_final_score}%` : 'Computing...'}</p>
                </div>
            </div>
        </div>
    );
}