//deeply nested objects 
let innomatics={
    institutename:'Innomatics Research lab',
    establishyear:2018,
    industry:'IT Training',
    website:'https://www.innomatics.in/',
    contact:{
        phone:9876543211,
        email:"info@innomatics.in",
        address:{
            city:'hyderabad',
            state:'telangana',
            pincode:500085
        }
    },
    courses:{
        fullstackdevelopment:{
            type1:'Python fullstack',
            type2:'javafullstack',
            type3:'mernstack'
        },
        datascience:{
            tools:{
                language:'Python',
                libraries:'numpy , pandas, matplotlib'
            },
            topics:{
                dataPreprocessing: 'Data Cleaning',
              modelBuilding: 'Machine Learning Models'
            }
        },
        dataanalytics:{
            tools:{
            language:'Python',
            queryLanguage: 'SQL'
            },
            topics:{
                dataCleaning: 'Data Cleaning',
                dataVisualization: 'Data Visualization'
                
            }
        }

        },
    careerModules:{
        github:'Github',
        communication:'Communication and Soft Skills',
        aptitude:'Aptitude and Logical Reasoning'

    },
    courseDetails:{
        eligibility:'students,graduates',
        certification:'Course Completion Certificate'
    },
    training:{
        mode:'online or offline',
        sessions:'practical sessions are available',
        projects:'projects on each module'

    },
    careersupport:{
        resume:'ATS-friendly resume guidance',
        mocks:'Technical and HR mock interviews',
        placementAssistance:'Job opportunities and placement guidance',
    }
    }
// console.log(innomatics);
//reading
console.log('institute name:',innomatics.institutename);
console.log('python course:',innomatics.courses.fullstackdevelopment.type1);
console.log('Data science:',innomatics.courses.datascience.tools.libraries);
console.log('data analyst topic:',innomatics.courses.dataanalytics.topics.dataCleaning);
console.log('carrer support(mocks):',innomatics.careersupport.mocks);

//update

innomatics.industry='IT Training and consulting';
innomatics.contact.address.city='Benguluru';
innomatics.courses.fullstackdevelopment.type1='advanced python full stack'
innomatics.courses.datascience.tools.language='python 3'
console.log('========After updation=========');
console.log(innomatics.industry);
console.log(innomatics.contact.address.city);
console.log(innomatics.courses.fullstackdevelopment.type1);
console.log(innomatics.courses.datascience.tools.language);
//Delete

delete innomatics.establishyear;
delete innomatics.contact.address.pincode;
delete innomatics.courses.datascience.topics.dataPreprocessing

console.log(innomatics);


