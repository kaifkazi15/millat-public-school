import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
import joblib

# Synthetic Student Data Generator
np.random.seed(42)
records = 200
attendance = np.random.uniform(60, 100, records)
midterm_marks = np.random.uniform(40, 100, records)
# Final marks clear formula base hain thode shock triggers ke sath
final_marks = (attendance * 0.3) + (midterm_marks * 0.7) + np.random.normal(0, 2, records)

df = pd.DataFrame({'attendance': attendance, 'midterm': midterm_marks, 'final': final_marks})

X = df[['attendance', 'midterm']]
y = df['final']

model = LinearRegression()
model.fit(X, y)

# Model save karo permanent memory mein
joblib.dump(model, 'student_model.pkl')
print("🎉 AI Model Trained and Exported successfully as student_model.pkl")