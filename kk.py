import pandas as pd 
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn import metrics
df=pd.read_csv('pre_processed.csv')
X=df.drop(['Disease'], axis=1)
y=df.iloc[:,-1]
import joblib
X_train, X_test, y_train, y_test = train_test_split(X,y,test_size=0.3,random_state=42)
from joblib import load
import numpy as np
forest=RandomForestClassifier(n_estimators=30)
forest.fit(X_train,y_train)
pred=forest.predict(X_test)
joblib.dump(forest,"random_forest.joblib")

print("Accuracy:",metrics.accuracy_score(y_test, pred))

symptoms = {'abdominal pain': 0,'abnormal menstruation': 0,'acidity': 0,'acute liver failure': 0,'altered sensorium': 0,'anxiety': 0,'back pain': 0,'belly pain': 0,'blackheads': 0,'bladder discomfort': 0,
'blister': 0,'blood in sputum': 0,'bloody stool': 0,'blurred and distorted vision': 0,'breathlessness': 0,'brittle nails': 0,'bruising': 0,'burning micturition': 0,'chest pain': 0,'chills': 0,
'cold hands and feets': 0,'coma': 0,'congestion': 0,'constipation': 0,'continuous feel of urine': 0,'continuous sneezing': 0,'cough': 0,'cramps': 0,'dark urine': 0,'dehydration': 0,
'depression': 0,'diarrhoea': 0,'dischromic  patches': 0,'distention of abdomen': 0,'dizziness': 0,'drying and tingling lips': 0,'enlarged thyroid': 0,'excessive hunger': 0,'extra marital contacts': 0,'family history': 0,
'fast heart rate': 0,'fatigue': 0,'fluid overload': 0,'foul smell of urine': 0,'headache': 0,'high fever': 0,'hip joint pain': 0,'history of alcohol consumption': 0,'increased appetite': 0,'indigestion': 0,
'inflammatory nails': 0,'internal itching': 0,'irregular sugar level': 0,'irritability': 0,'irritation in anus': 0,'joint pain': 0,'knee pain': 0,'lack of concentration': 0,'lethargy': 0,'loss of appetite': 0,
'loss of balance': 0,'loss of smell': 0,'malaise': 0,'mild fever': 0,'mood swings': 0,'movement stiffness': 0,'mucoid sputum': 0,'muscle pain': 0,'muscle wasting': 0,'muscle weakness': 0,
'nausea': 0,'neck pain': 0,'nodal skin eruptions': 0,'obesity': 0,'pain behind the eyes': 0,'pain during bowel movements': 0,'pain in anal region': 0,'painful walking': 0,'palpitations': 0,'passage of gases': 0,
'patches in throat': 0,'phlegm': 0,'polyuria': 0,'prominent veins on calf': 0,'puffy face and eyes': 0,'pus filled pimples': 0,'receiving blood transfusion': 0,'receiving unsterile injections': 0,'red sore around nose': 0,'red spots over body': 0,
'redness of eyes': 0,'restlessness': 0,'runny nose': 0,'rusty sputum': 0,'scurring': 0,'shivering': 0,'silver like dusting': 0,'sinus pressure': 0,'skin peeling': 0,'skin rash': 0,
'slurred speech': 0,'small dents in nails': 0,'spinning movements': 0,'spotting  urination': 0,'stiff neck': 0,'stomach bleeding': 0,'stomach pain': 0,'sunken eyes': 0,'sweating': 0,'swelled lymph nodes': 0,
'swelling joints': 0,'swelling of stomach': 0,'swollen blood vessels': 0,'swollen extremeties': 0,'swollen legs': 0,'throat irritation': 0,'toxic look (typhos)': 0,'ulcers on tongue': 0,'unsteadiness': 0,'visual disturbances': 0,
'vomiting': 0,'watering from eyes': 0,'weakness in limbs': 0,'weakness of one body side': 0,'weight gain': 0,'weight loss': 0,'yellow crust ooze': 0,'yellow urine': 0,'yellowing of eyes': 0,'yellowish skin': 0,
'itching': 0}
print(df.head())
df_test = pd.DataFrame(columns=list(symptoms.keys()))
df_test.loc[0] = np.array(list(symptoms.values()))
df_test['continuous sneezing']=1
clf = load(str("random_forest.joblib"))
result = clf.predict(df_test)
print(result)