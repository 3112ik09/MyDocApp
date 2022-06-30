const Symptoms = [
    { label:'abdominal pain' , value: 'abdominal pain'} ,
  { label:'abnormal menstruation' , value: 'abnormal menstruation'} ,
  { label:'acidity' , value: 'acidity'} ,
  { label:'acute liver failure' , value: 'acute liver failure'} ,
  { label:'altered sensorium' , value: 'altered sensorium'} ,
  { label:'anxiety' , value: 'anxiety'} ,
  { label:'back pain' , value: 'back pain'} ,
  { label:'belly pain' , value: 'belly pain'} ,
  { label:'blackheads' , value: 'blackheads'} ,
  { label:'bladder discomfort' , value: 'bladder discomfort'} ,
  { label:'blister' , value: 'blister'} ,
  { label:'blood in sputum' , value: 'blood in sputum'} ,
  { label:'bloody stool' , value: 'bloody stool'} ,
  { label:'blurred and distorted vision' , value: 'blurred and distorted vision'} ,
  { label:'breathlessness' , value: 'breathlessness'} ,
  { label:'brittle nails' , value: 'brittle nails'} ,
  { label:'bruising' , value: 'bruising'} ,
  { label:'burning micturition' , value: 'burning micturition'} ,
  { label:'chest pain' , value: 'chest pain'} ,
  { label:'chills' , value: 'chills'} ,
  { label:'cold hands and feets' , value: 'cold hands and feets'} ,
  { label:'coma' , value: 'coma'} ,
  { label:'congestion' , value: 'congestion'} ,
  { label:'constipation' , value: 'constipation'} ,
  { label:'continuous feel of urine' , value: 'continuous feel of urine'} ,
  { label:'continuous sneezing' , value: 'continuous sneezing'} ,
  { label:'cough' , value: 'cough'} ,
  { label:'cramps' , value: 'cramps'} ,
  { label:'dark urine' , value: 'dark urine'} ,
  { label:'dehydration' , value: 'dehydration'} ,
  { label:'depression' , value: 'depression'} ,
  { label:'diarrhoea' , value: 'diarrhoea'} ,
  { label:'dischromic  patches' , value: 'dischromic  patches'} ,
  { label:'distention of abdomen' , value: 'distention of abdomen'} ,
  { label:'dizziness' , value: 'dizziness'} ,
  { label:'drying and tingling lips' , value: 'drying and tingling lips'} ,
  { label:'enlarged thyroid' , value: 'enlarged thyroid'} ,
  { label:'excessive hunger' , value: 'excessive hunger'} ,
  { label:'extra marital contacts' , value: 'extra marital contacts'} ,
  { label:'family history' , value: 'family history'} ,
  { label:'fast heart rate' , value: 'fast heart rate'} ,
  { label:'fatigue' , value: 'fatigue'} ,
  { label:'fluid overload' , value: 'fluid overload'} ,
  { label:'foul smell of urine' , value: 'foul smell of urine'} ,
  { label:'headache' , value: 'headache'} ,
  { label:'high fever' , value: 'high fever'} ,
  { label:'hip joint pain' , value: 'hip joint pain'} ,
  { label:'history of alcohol consumption' , value: 'history of alcohol consumption'} ,
  { label:'increased appetite' , value: 'increased appetite'} ,
  { label:'indigestion' , value: 'indigestion'} ,
  { label:'inflammatory nails' , value: 'inflammatory nails'} ,
  { label:'internal itching' , value: 'internal itching'} ,
  { label:'irregular sugar level' , value: 'irregular sugar level'} ,
  { label:'irritability' , value: 'irritability'} ,
  { label:'irritation in anus' , value: 'irritation in anus'} ,
  { label:'joint pain' , value: 'joint pain'} ,
  { label:'knee pain' , value:  'knee pain'} ,
  { label:'lack of concentration' , value: 'lack of concentration'} ,
  { label:'lethargy' , value: 'lethargy'} ,
  { label:'loss of appetite' , value: 'loss of appetite'} ,
  { label:'loss of balance' , value: 'loss of balance'} ,
  { label:'loss of smell' , value: 'loss of smell'} ,
  { label:'malaise' , value: 'malaise'} ,
  { label:'mild fever' , value: 'mild fever'} ,
  { label:'mood swings' , value: 'mood swings'} ,
  { label:'movement stiffness' , value: 'movement stiffness'} ,
  { label:'mucoid sputum' , value: 'mucoid sputum'} ,
  { label:'muscle pain' , value: 'muscle pain'} ,
  { label:'muscle wasting' , value: 'muscle wasting'} ,
  { label:'muscle weakness' , value: 'muscle weakness'} ,
  { label:' nausea' , value: 'nausea'} ,
  { label:' neck pain' , value: 'neck pain'} ,
  { label:' nodal skin eruptions' , value: 'nodal skin eruptions'} ,
  { label:' obesity' , value: 'obesity'} ,
  { label:' pain behind the eyes' , value: 'pain behind the eyes'} ,
  { label:' pain during bowel movements' , value: 'pain during bowel movements'} ,
  { label:' pain in anal region' , value: 'pain in anal region'} ,
  { label:' painful walking' , value: 'painful walking'} ,
  { label:' palpitations' , value: 'palpitations'} ,
  { label:' passage of gases' , value: 'passage of gases'} ,
  { label:' patches in throat' , value: 'patches in throat'} ,
  { label:' phlegm' , value: 'phlegm'} ,
  { label:' polyuria' , value: 'polyuria'} ,
  { label:' prominent veins on calf' , value: 'prominent veins on calf'} ,
  { label:' puffy face and eyes' , value: 'puffy face and eyes'} ,
  { label:' pus filled pimples' , value: 'pus filled pimples'} ,
  { label:' receiving blood transfusion' , value: 'receiving blood transfusion'} ,
  { label:' receiving unsterile injections' , value: 'receiving unsterile injections'} ,
  { label:' red sore around nose' , value: 'red sore around nose'} ,
  { label:' red spots over body' , value: 'red spots over body'} ,
  { label:' redness of eyes' , value: 'redness of eyes'} ,
  { label:' restlessness' , value: 'restlessness'} ,
  { label:' runny nose' , value: 'runny nose'} ,
  { label:' rusty sputum' , value: 'rusty sputum'} ,
  { label:' scurring' , value: 'scurring'} ,
  { label:' shivering' , value: 'shivering'} ,
  { label:' silver like dusting' , value: 'silver like dusting'} ,
  { label:' sinus pressure' , value: 'sinus pressure'} ,
  { label:' skin peeling' , value: 'skin peeling'} ,
  { label:' skin rash' , value: 'skin rash'} ,
  { label:' slurred speech' , value: 'slurred speech'} ,
  { label:' small dents in nails' , value: 'small dents in nails'} ,
  { label:' spinning movements' , value: 'spinning movements'} ,
  { label:' spotting  urination' , value: 'spotting  urination'} ,
  { label:' stiff neck' , value: 'stiff neck'} ,
  { label:' stomach bleeding' , value: 'stomach bleeding'} ,
  { label:' stomach pain' , value: 'stomach pain'} ,
  { label:' sunken eyes' , value: 'sunken eyes'} ,
  { label:' sweating' , value: ' sweating'} ,
  { label:' swelled lymph nodes' , value: 'swelled lymph nodes'} ,
  { label:' swelling joints' , value: 'swelling joints'} ,
  { label:' swelling of stomach' , value: 'swelling of stomach'} ,
  { label:' swollen blood vessels' , value: 'swollen blood vessels'} ,
  { label:' swollen extremeties' , value: 'swollen extremeties'} ,
  { label:' swollen legs' , value: 'swollen legs'} ,
  { label:' throat irritation' , value: 'throat irritation'} ,
  { label:' toxic look (typhos)' , value: 'toxic look (typhos)'} ,
  { label:' ulcers on tongue' , value: 'ulcers on tongue'} ,
  { label:' unsteadiness' , value: 'unsteadiness'} ,
  { label:' visual disturbances' , value: 'visual disturbances'} ,
  { label:' vomiting' , value: 'vomiting'} ,
  { label:' watering from eyes' , value: 'watering from eyes'} ,
  { label:' weakness in limbs' , value: 'weakness in limbs'} ,
  { label:'weakness of one body side' , value: 'weakness of one body side'} ,
  { label:'weight gain' , value: 'weight gain'} ,
  { label:'weight loss' , value: 'weight loss'} ,
  { label:'yellow crust ooze' , value: 'yellow crust ooze'} ,
  { label:'yellow urine' , value: 'yellow urine'} ,
  { label:'yellowing of eyes' , value: 'yellowing of eyes'} ,
  { label:'yellowish skin' , value: 'yellowish skin'} ,
  { label:'itching' , value: 'itching'} ,
  { label:'Disease' , value: 'Disease'} ,
     
    ]

export default Symptoms;