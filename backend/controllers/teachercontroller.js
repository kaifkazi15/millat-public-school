const db = require('../config/db');

exports.submitAttendance = async (req, res) => {
    try {
        const { records, date } = req.body;
        for (let record of records) {
            await db.execute(`
                INSERT INTO attendance (student_id, date, status) VALUES (?, ?, ?)
                ON DUPLICATE KEY UPDATE status = ?`,
                [record.student_id, date, record.status, record.status]
            );
        }
        res.status(200).json({ message: 'Attendance updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
