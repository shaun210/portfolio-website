
const projectPage = {
    javaProjects: [
        {
            title: "AWS project",
            description: "Hosted a website on AWS using EC2, RDS, and S3. The website allows users to find gym partners and chat with them.",
            techStack: "Java, Spring Boot, React, PostgreSQL",
            link: "/portfolio-website/project/1"
        },
        {
            title: "Parking reservation website",
            description: "A website that allows users to buy and sell products. The website also allows users to chat with each other.",
            techStack: "Java, Spring Boot, React, PostgreSQL",
            link: "/portfolio-website/project/2"
        },
        {
            title: "Bike tour website",
            description:   "A website that allows users to find bike tours and book them. The website also allows users to chat with each other.",
            techStack: "Java, Spring Boot, Vue js, PostgreSQL",
            
        },
        
        {
            title: "Parking reservation website",
            description: "A website that allows users to buy and sell products. The website also allows users to chat with each other.",
            techStack: "Java, Spring Boot, React, PostgreSQL"
        }
    ],
    pythonProjects: [
        {
            title: "mini kubernetes clone",
            description: "A website that allows users to buy and sell products. The website also allows users to chat with each other.",
            techStack: "Flask, Python, Docker, Linux",
            link: "/portfolio-website/project/3"
        }
    ]
}

const SingleProjectData = [
    {
        id: '1',
        details: [
          { type: 'title', content: 'AWS project' },
             { type: 'technologies', content: ['java springboot', 'react js', 'AWS (elastic beanstalk, S3, RDS', 'Postgresql'] },

          { type: 'subtitle', content: 'Subtitle for Project 1' },
          { type: 'paragraph', content: 'The right aim to design a website is making sure that whenever a user opens up or lands on the site, the information that they see should be in a format which is easy to read and relevant. This aspect gets further complicated considering the fact that individuals today use a large plethora of devices with varying screen sizes and resolutions and this forces the designer to take into consideration these aspects when designing the site.' },
          { type: 'image', url: './javaProjectsPictures/AWSproject/intro-pic.png', alt: 'Project 1 Image 1' },
          { type: 'paragraph', content: 'The right aim to design a website is making sure that whenever a user opens up or lands on the site, the information that they see should be in a format which is easy to read and relevant. This aspect gets further complicated considering the fact that individuals today use a large plethora of devices with varying screen sizes and resolutions and this forces the designer to take into consideration these aspects when designing the site.' },

        ]
    },

    {
        id: '2',
        details: [
          { type: 'title', content: 'Parking spot reservation and management website' },
          { type: 'subtitle', content: 'Architecture' },
          { type: 'paragraph', content: 'Below lies the class diagram. With this, you have an overview of the main component of the website. Payments are separated into two subclasses: one for service payments, and one for reservation payments. This will allow the system to differentiate service payments and reservation payments. Reservations are separated into 3 subclasses; one for subscriptions with account, one for subscriptions without account, and one for single reservations. Each type of reservation will be handled in a different way. The 3 types of users are the manager, employees and monthly customers. Since they share common attributes, they inherit from the Person class. Non-monthly customers cannot create an account because they do not have to pay a monthly fee. The system will still keep track of customers without account by using their license number. The "id" attribute of the ParkingSpot class will determine in which floor a parking spot is located. In fact, a specific range of id values will be assigned to each floor: Ground from 1000-1999, Floor 2 from 2000-2999, Floor 3 from 3000-3999, Floor 4 from 4000-4999 and floor 5 from 5000-5999. We assumed that the monthly customer verbally asks the employee or manager to create a reservation for them. The nbrOfMonth is initially set to zero.' },
          { type: 'image', url: './javaProjectsPictures/ParkingWebsite/classDiagram.png', alt: 'Project 1 Image 1' },
          { type: 'paragraph', content: 'The right aim to design a website is making sure that whenever a user opens up or lands on the site, the information that they see should be in a format which is easy to read and relevant. This aspect gets further complicated considering the fact that individuals today use a large plethora of devices with varying screen sizes and resolutions and this forces the designer to take into consideration these aspects when designing the site.' },

        ]
    },

    {
        id: '3',
        details: [
          { type: 'title', content: 'Mini Kubernetes Clone' },
          { type: 'subtitle', content: 'Overview' },
          { type: 'paragraph', content: 'The goal of this project is to recreate an elastic cloud infrastructure like Kubernetes. You can think of the whole infrasture divided into 3 parts as shown in the picture below. The 3 orange dotted-line boxes can be seen as 3 different servers (virtual machines).'},
          { type: 'image', url: './pythonProjectsPictures/miniKube/overview.png', alt: 'Project 1 Image 1' },
          { type: 'subtitle', content: 'Server 1 (user-side)'},
          { type: 'paragraph', content: 'We have two type of users. One is the client and the other is the cloud manager. Using a command line interface, the user can interact with the cloud system. The cloud manager can monitor the state of the system while a client can send requests to the cloud to perform operations like running a python script on an online server.'},
          { type: 'subtitle', content: 'Server 2 (elastic cloud manager)'},
          { type: 'paragraph', content: 'On this server, we have a python script running that listens to the client requests. The REST API is implemented using Flask. The script acts as a cloud manager. It monitors server 3 which contain the node clusters. Based on traffic, it can delete or create new nodes. A load balancer (HA proxy) is used to distribute the traffic between the nodes. The cloud manager can also monitor the state of the nodes and the traffic.'},
          
          { type: 'subtitle', content: 'Server 3 (node clusters)'},
          { type: 'paragraph', content: 'This server is used to host our pods and nodes. A pod is collection of node having similar feature like RAM, number of CPU, memory, etc. A node is where a job is performed. Docker containers are used as nodes. Initially each pod is initialized with a fix number of nodes. When a client sends a job request, the job will be executed in 1 node (a docker container). If another client sends a request, the request will be executed in the current node unless the resource limit has been reached in that node. In that case, the job will need to be run in a different docker container. Below you can see 3 pods: light, medium and heavy. The pods contain some nodes and you can see the port they are listening on and their status.' },
          { type: 'image', url: './pythonProjectsPictures/miniKube/monitorScreen.jpeg', alt: 'Project 1 Image 1' },
        ]
    }
]

const Paths = {
    home: '/portfolio-website/',
    projectPage : '/portfolio-website/project',
    singleProjectPage : '/portfolio-website/project/:projectId',
    workExperience : '/portfolio-website/work-experience',
    skills: '/portfolio-website/skills'
}

export {
    projectPage,
    SingleProjectData,
    Paths
}