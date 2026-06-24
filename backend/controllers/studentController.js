const db = require('../config/db');
const { exec } = require('child_process');
const path = require('path');

exports.getStudentPrediction = async (req, res) => {
    try {
        const userId = req.user.id;
        const [student] = await db.execute('SELECT id FROM students WHERE user_id = ?', [userId]);
        if (student.length === 0) return res.status(404).json({ message: "Student profile not found" });
        const studentId = student[0].id;

        const [[attendanceMeta]] = await db.execute(
            `SELECT COALESCE(COUNT(CASE WHEN status = 'Present' THEN 1 END) * 100.0 / COUNT(*), 75.0) as ratio 
             FROM attendance WHERE student_id = ?`, [studentId]
        );

        const [[marksMeta]] = await db.execute(
            `SELECT COALESCE(AVG(marks_obtained * 100.0 / total_marks), 70.0) as avg_marks 
             FROM marks WHERE student_id = ?`, [studentId]
        );

        const scriptPath = path.join(__dirname, '../../ai-engine/predict.py');
        
        exec(`python "${scriptPath}" ${attendanceMeta.ratio} ${marksMeta.avg_marks}`, (error, stdout, stderr) => {
            if (error) {
                return res.status(500).json({ message: "AI Engine Failed", error: error.message });
            }
            const aiResult = JSON.parse(stdout.trim());
            return res.status(200).json({
                attendance: Math.round(attendanceMeta.ratio * 100) / 100,
                academic_average: Math.round(marksMeta.avg_marks * 100) / 100,
                ai_predicted_final_score: aiResult.predicted_score
            });
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
