// Declare a work object that holds job info
var work = {
    "jobs": [{
        "employer": "Schwan's Shared Services, LLC",
        "title": "Front End Web Developer",
        "location": "Marshall, MN USA",
        "dates": "2/17 - present",
        "description": "I work in Corporate Marketing and Communications, a department dedicated to corporate messaging through video, print and digital design, writing and web presentation. Furthermore, we support the company’s business units. I work on the corporate site of Schwan’s Company, the brand sites of Freschetta, Red Baron, Edwards, among others and internal sites powered by SharePoint. Responsibilities include front end site maintenance, design implementation, meeting with clients, cross-departmental communication and some design and layout creation. I commonly work in Dreamweaver, Photoshop and Illustrator.  From time to time, I’m tasked with social writing. One of the greatest parts of my job is working with a diverse team that sharpens my skills with their valuable feedback."
    },{
        "employer": "Schwan's Shared Services, LLC",
        "title": "Multimedia Producer",
        "location": "Marshall, MN USA",
        "dates": "9/16 - present",
        "description": "My role was mainly to help internal clients translate their message into video presentation. My responsibilities included writing and reviewing scripts as well as scheduling talent and keeping an eye on all aspects of production to make sure it was completed seamlessly."
    }, {
        "employer": "IHOPU Online",
        "title": "Media Coordinator and Producer",
        "location": "Grandview, MO USA",
        "dates": "7/2009 - 5/2013",
        "description": "IHOPU Online serves distance learners around the world by bringing the university classroom to the home through an online school. I managed audio and video course content. This entailed communicating with university faculty, media personnel and my eSchool team to ensure the content created on production day safely made it to our online platform. I also became the producer of our on-site filming, which required managing a media crew by making sure they arrived on time and fulfilled their duties in order to make the overall production successful."
    }, {
        "employer": "Soho Joe",
        "title": "Web Developer",
        "location": "Minneapolis MN",
        "dates": "2/08 - 4/09",
        "description": "Soho Joe was a design firm that mainly worked with the health and herbal industries. Soho Joe specialized in print, packaging, and design. I started as a freelance worker from home, then eventually transitioned to in-house staff in May of 2008. This job pushed me to be a faster worker. I mainly updated code and content on existing sites."
    }, {
        "employer": "ITS Video Production Services MSU, Mankato",
        "title": "Student Video Worker",
        "location": "Mankato, MN",
        "dates": "10/06-4/07",
        "description": "I recorded events for the university using Canon XL cameras, then edited them with Final Cut or Adobe Premiere. I created DVD menus. I also collaborated with university faculty and fellow workers to create promotional/informational videos for departments and programs."
    }, {
        "employer": "ITS Web Services MSU, Mankato",
        "title": "Student Web Worker",
        "location": "Mankato, MN",
        "dates": "2005-2006",
        "description": "The university switched to a new template. I worked to gut out pages and place them into this template. From time to time, I was given the responsibility to create a logo or minor page design. My manager and boss were strict. They taught me about best practices and valid code, which left a deep impression."
    }]
};

// Encapsulate a function inside the work object that
// iterates through education info and displays it on index.html
// Got the for loop idea here:
// https://www.youtube.com/watch?v=rJesac0_Ftw
work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#work-experience").append(HTMLworkStart);
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        $(".work-entry:last").append(formattedWorkEmployer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".about:last").append(formattedWorkTitle);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".about:last").append(formattedWorkDates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".about:last").append(formattedWorkLocation);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".about:last").append(formattedWorkDescription);
    }
};
work.display();

// Declare education object that holds education info
var education = {
    "schools": [{
        "name": "Minnesota State University, Mankato",
        "location": "Mankato, MN",
        "degree": "Bachelor of Arts",
        "majors": ["French"],
        "minor": "Creative Writing",
        "dates": "1999 - 2007",
        "url": "https://www.mnsu.edu/"
    }]
};

// Encapsulate function in education object that iterates through
// education info and displays it on index.html
education.display = function() {
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedSchoolName);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".about:last").append(formattedSchoolDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".about:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".about:last").append(formattedSchoolLocation);
        if (education.schools[school].majors.length > 0) {
            for (var major = 0; major < education.schools[school].majors.length; major++) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                $(".about:last").append(formattedSchoolMajor);
            }
        }
        var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[school].minor);
        $(".about:last").append(formattedSchoolMinor);
        var formattedSchoolURL = HTMLschoolURL.replace("%data%", education.schools[school].url);
        $(".about:last").append(formattedSchoolURL);
    }
};
education.display();

var onlineLearning = {
    "onlinePrograms": [{
        "school": "Udacity",
        "title": "Intro to Programming",
        "description": "This Nanodegree took me through the basics of HTML and CSS then taught me the core concepts of programming with Python. Next, I chose the Front-end Developer pathway and learned the basics of JavaScript.",
        "dates": "9/16 - 12/16",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }]
};

onlineLearning.display = function() {
    for (var onlineProgram = 0; onlineProgram < onlineLearning.onlinePrograms.length; onlineProgram++) {
        $("#online-learning").append(HTMLonlineLearningStart);
        var formattedOnlineLearningSchool = HTMLonlineLearningSchool.replace("%data%", onlineLearning.onlinePrograms[onlineProgram].school);
        $(".online-learning-entry:last").append(formattedOnlineLearningSchool);
        var formattedOnlineLearningTitle = HTMLonlineLearningTitle.replace("%data%", onlineLearning.onlinePrograms[onlineProgram].title);
        $(".about:last").append(formattedOnlineLearningTitle);
        var formattedOnlineLearningDescription = HTMLonlineLearningDescription.replace("%data%", onlineLearning.onlinePrograms[onlineProgram].description);
        $(".about:last").append(formattedOnlineLearningDescription);
        var formattedOnlineLearningDates = HTMLonlineLearningDates.replace("%data%", onlineLearning.onlinePrograms[onlineProgram].dates);
        $(".about:last").append(formattedOnlineLearningDates);
        var formattedOnlineLearningURL = HTMLonlineLearningURL.replace("%data%", onlineLearning.onlinePrograms[onlineProgram].url);
        $(".about:last").append(formattedOnlineLearningURL);
    }
};
onlineLearning.display();
