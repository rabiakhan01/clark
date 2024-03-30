import images from "../assets/images/images";

// Data for navbar section
const navData = [
    {
        id: 1,
        itemID: 'Home',
        name: 'Home',
    },
    {
        id: 2,
        itemID: 'About',
        name: 'About',
    },
    {
        id: 3,
        itemID: 'Resume',
        name: 'Resume',
    },
    {
        id: 4,
        itemID: 'Services',
        name: 'Services',
    },
    {
        id: 5,
        itemID: 'Skills',
        name: 'Skills',
    },
    {
        id: 6,
        itemID: 'Projects',
        name: 'Projects',
    },
    {
        id: 7,
        itemID: 'Blog',
        name: 'My Blog',
    },
    {
        id: 8,
        itemID: 'Contact',
        name: 'Contact',
    },
];


// Data for about section
const aboutData = [
    {
        heading: 'Name',
        para: 'Clark Thompson',
    },
    {
        heading: 'Date of birth',
        para: 'January 01, 1987',
    },
    {
        heading: 'Address',
        para: 'San Francisco CA 97987 USA',
    },
    {
        heading: 'Zip code',
        para: '1000',
    },
    {
        heading: 'Email',
        para: 'clarkthomp@gmail.com',
    },
    {
        heading: 'Phone',
        para: '+1-2234-5678-0-0',
    },
];


// Data for resume section
const resumeData = [
    {
        id: 1,
        date: '2014-2015',
        degree: 'Master Degree of Design',
        institute: 'CAMBRIDGE UNIVERSITY',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
    },
    {
        id: 2,
        date: '2014-2015',
        degree: 'Art & Creative Director',
        institute: 'CAMBRIDGE UNIVERSITY',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
    },
    {
        id: 3,
        date: '2014-2015',
        degree: "Bachelor's Degree of C.A",
        institute: 'CAMBRIDGE UNIVERSITY',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
    },
    {
        id: 4,
        date: '2014-2015',
        degree: 'Wordpress Developer',
        institute: 'CAMBRIDGE UNIVERSITY',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
    },
    {
        id: 5,
        date: '2014-2015',
        degree: 'Diploma in Computer',
        institute: 'CAMBRIDGE UNIVERSITY',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
    },
    {
        id: 6,
        date: '2014-2015',
        degree: 'UI/UX Designer',
        institute: 'CAMBRIDGE UNIVERSITY',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
    },
];


// Data for services section
const servicesData = [
    {
        icon: images.analysis_orange,
        white_icon: images.analysis,
        content: 'web design'
    },
    {
        icon: images.flasks_orange,
        white_icon: images.flasks,
        content: 'photography'
    },
    {
        icon: images.ideas_orange,
        white_icon: images.ideas,
        content: 'web developer'
    },
    {
        icon: images.analysis_orange,
        white_icon: images.analysis,
        content: 'app developing'
    },
    {
        icon: images.flasks_orange,
        white_icon: images.flasks,
        content: 'branding'
    },
    {
        icon: images.ideas_orange,
        white_icon: images.ideas,
        content: 'project strategy'
    },
]

// Data for project section
const projectData = [
    {
        id: 1,
        project_name: "Branding & Illustration Design",
        project_image: images.project4,
        category: "WEB DESIGN",
        show: true,
    },
    {
        id: 2,
        project_name: "Branding & Illustration Design",
        project_image: images.project5,
        category: "WEB DESIGN",
        show: true,
    },
    {
        id: 3,
        project_name: "Branding & Illustration Design",
        project_image: images.project1,
        category: "WEB DESIGN",
        show: true,
    },
    {
        id: 4,
        project_name: "Branding & Illustration Design",
        project_image: images.project2,
        category: "WEB DESIGN",
        show: true,
    },
    {
        id: 5,
        project_name: "Branding & Illustration Design",
        project_image: images.project6,
        category: "WEB DESIGN",
        show: true,
    },
    {
        id: 6,
        project_name: "Branding & Illustration Design",
        project_image: images.project3,
        category: "WEB DESIGN",
        show: false,
    },
];

//Data for hireMe section
const hiremeData
    = [
        {
            count: '100',
            content: 'Awards',
        },
        {
            count: '12,00',
            content: 'Complete Projects',
        },
        {
            count: '12,00',
            content: 'Happy Customer',
        },
        {
            count: '500',
            content: 'Cups of coffee',
        }
    ];

//Data for blog section
const blogData = [
    {
        date: "june 21, 2019",
        designation: "admin",
        icon: images.chat,
        count: 3,
        blogImage: images.blog1,
        heading: 'Why Lead Generation is Key for Business Growth',
        content: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'

    },
    {
        date: "june 21, 2019",
        designation: "admin",
        icon: images.chat,
        count: 3,
        blogImage: images.blog2,
        heading: 'Why Lead Generation is Key for Business Growth',
        content: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'

    },
    {
        date: "june 21, 2019",
        designation: "admin",
        icon: images.chat,
        count: 3,
        blogImage: images.blog3,
        heading: 'Why Lead Generation is Key for Business Growth',
        content: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'

    },
]

//Data for contact section
const contactData = [
    {
        icon: images.address,
        name: 'address',
        content: '198 West 21th Street, Suite 721 New York NY 10016',
    },
    {
        icon: images.call,
        name: 'contact number',
        content: '+ 1235 2355 98',
    },
    {
        icon: images.send,
        name: 'email address',
        content: 'info@yoursite.com',
    },
    {
        icon: images.globe,
        name: 'website',
        content: 'yoursite.com',
    },
];

// Data for footer section
const footerData = [
    {
        id: 1,
        heading: "Links",
        element1: "Home",
        element2: "About",
        element3: "Services",
        element4: 'Projects',
        element5: "Contact",
        arrow: images.arrow,
    },

    {
        id: 2,
        heading: "Services",
        element1: "Web Design",
        element2: "Web Development",
        element3: "Bussiness Strategy",
        element4: "Data Analysis",
        element5: "Grpahic Design",
        arrow: images.arrow,
    },
    {
        id: 3,
        question: [
            {
                id: 1,
                icon: images.location,
                text: '203 Fake St. Mountain View, San Francisco, California, USA',
            },
            {
                id: 2,
                icon: images.phone,
                text: '+2 392 3929 210',
            },
            {
                id: 3,
                icon: images.email,
                text: 'info@yourdomain.com',
            },
        ]
    },
    {
        id: 4,
        miniData: [
            {
                id: 1,
                icons: images.twitter,
            },
            {
                id: 2,
                icons: images.facebook,
            },
            {
                id: 3,
                icons: images.instra,
            }
        ]
    }
];



export {
    navData,
    aboutData,
    resumeData,
    servicesData,
    projectData,
    blogData,
    hiremeData,
    contactData,
    footerData,
}