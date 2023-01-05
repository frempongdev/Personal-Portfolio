const body = document.body;
const about = document.querySelector('.about');

const portfolioData = [
    {
      title: "Tonic",
      title2: "Tonic",
      company: "CANOPY",
      company2: "CANOPY",
      role1: "Back End Dev",
      role2: "Back End Dev",
      role3: "Lead Developer",
      year1: "2015",
      year2: "2015",
      description1: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
      description2: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
      technologies: ["html", "css", "javascript"],
      imageMobile: "assets/works-snapshot/Snapshoot Portfolio 1.png",
      imageDesktop: "assets/desktop/Desktop-work-snapshot-1.png",
      dotImage:'assets/mobile/dot.png',
    },
    {
      title: "Multi-Post Stories",
      title2: "Multi-Post Stories",
      company: "CANOPY",
      company2: "FACEBOOK",
      role1: "Back End Dev",
      role2: "Full Stack Dev",
      role3: "Lead Developer",
      year1: "2015",
      year2: "2018",
      description1: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
      description2: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
      technologies: ["html", "Ruby on rails", "css", "javascript"],
      imageMobile: "assets/works-snapshot/Snapshoot Portfolio 2.png",
      imageDesktop: "assets/desktop/Desktop-work-snapshot-2.png",
      dotImage:'assets/mobile/dot.png',
    },
    {
      title: "Tonic",
      title2: "Facebook 360",
      company: "CANOPY",
      company2: "FACEBOOK",
      role1: "Back End Dev",
      role2: "Full Stack Dev",
      role3: "Lead Developer",
      year1: "2015",
      year2: "2018",
      description1: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
      description2: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
      technologies: ["html", "Ruby on rails", "css", "javascript"],
      imageMobile: "assets/works-snapshot/Snapshoot Portfolio 3.png",
      imageDesktop: "assets/desktop/Desktop-work-snapshot-3.png",
      dotImage:'assets/mobile/dot.png',
    },
    {
      title: "Multi-Post Stories",
      title2: "Uber Navigation",
      company: "CANOPY",
      company2: "Uber",
      role1: "Back End Dev",
      role2: "Full Stack Dev",
      role3: "Lead Developer",
      year1: "2015",
      year2: "2018",
      description1: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
      description2: "A smart assistant to make driving more safe, efficient and fun by unlocking your most expensive computer: your car.",
      technologies: ["html", "Ruby on rails", "css", "javascript"],
      imageMobile: "assets/works-snapshot/Snapshoot Portfolio 4.png",
      imageDesktop: "assets/desktop/Desktop-work-snapshot-4.png",
      dotImage:'assets/mobile/dot.png',
    }
  ];
  
  const portfolioContainer = document.getElementById("portfolio-id");
  
  portfolioData.forEach((work, index) => {
    const worksWrapper = document.createElement("div");
    if (index % 2 === 1) {
        worksWrapper.classList.add("works-wrapper","swap");
    }
    else {
        worksWrapper.classList.add("works-wrapper");
    }
  
    const worksSection = document.createElement("div");
    worksSection.classList.add("works-section");
  
    const workSnapshot = document.createElement("div");
    workSnapshot.classList.add("work-snapshot");
  
    const imageMobile = document.createElement("img");
    imageMobile.classList.add("mobile-pic");
    imageMobile.src = work.imageMobile;
    imageMobile.alt = `${work.title} snapshot`;
    workSnapshot.appendChild(imageMobile);
  
    const imageDesktop = document.createElement("img");
    imageDesktop.classList.add("desktop-pic");
    imageDesktop.src = work.imageDesktop;
    imageDesktop.alt = `${work.title} snapshot`;
    workSnapshot.appendChild(imageDesktop);
  
    worksSection.appendChild(workSnapshot);

    // Create the work description elements and append them to the works section
   
    worksWrapper.appendChild(worksSection);
    portfolioContainer.appendChild(worksWrapper);
    
    const workDescription = document.createElement("div");
    workDescription.classList.add("work-description");
    worksSection.appendChild(workDescription);
    
    const descWrapper = document.createElement("div");
    descWrapper.classList.add("desc-wrapper");
    workDescription.appendChild(descWrapper);
    
    //ADDING PROJECT TITLE
    const projectTitle = document.createElement("h2");
    projectTitle.classList.add("mobile-text");
    projectTitle.innerHTML = work.title;
    descWrapper.appendChild(projectTitle);
    
    const projectTitle2 = document.createElement("h2");
    projectTitle2.classList.add("desktop-text");
    projectTitle2.innerHTML = work.title2;
    descWrapper.appendChild(projectTitle2);
    
    //PROJECT DETAILS CONTAINER
    const descDetails = document.createElement("div");
    descDetails.classList.add("dec-details");
    descWrapper.appendChild(descDetails);

    //ADDING PROJECT CLIENT
    const projectCompany = document.createElement("h4");
    projectCompany.classList.add("mobile-text");
    projectCompany.innerHTML = work.company;
    descDetails.appendChild(projectCompany);
    
    const projectCompany2 = document.createElement("h4");
    projectCompany2.classList.add("desktop-text");
    projectCompany2.innerHTML = work.company2;
    descDetails.appendChild(projectCompany2);

    //ADDING DOT ELEMENT
    const dot = document.createElement('img');
    dot.classList.add("mobile-dot");
    dot.src = work.dotImage;
    dot.alt= 'dot';
    descDetails.appendChild(dot);

    //ADDING PROJECT ROLES
    const projectRole1 = document.createElement("h4");
    projectRole1.classList.add("mobile-text", "grey-text");
    projectRole1.innerHTML = work.role1;
    descDetails.appendChild(projectRole1);
  
    const projectRole2 = document.createElement("h4");
    projectRole2.classList.add("desktop-text", "grey-text");
    projectRole2.innerHTML = work.role2;
    descDetails.appendChild(projectRole2);
  
    if (index == 3){
        //LEAD DEVELOPER ROLE TEXT ADDED FOR LAST CARD
        const projectRole3 = document.createElement("h4");
        projectRole3.classList.add("desktop-text", "grey-text");
        projectRole3.innerHTML = work.role3;
        descDetails.appendChild(projectRole3);
        descDetails.removeChild(projectRole2);

    }
    //ADDING ANOTHER DOT ELEMENT
    const dotCopy = dot.cloneNode();
    descDetails.appendChild(dotCopy);

    //ADDING PROJECT YEAR
    const projectYear1 = document.createElement("h4");
    projectYear1.classList.add("mobile-text", "grey-text");
    projectYear1.innerHTML = work.year1;
    descDetails.appendChild(projectYear1);
 
    const projectYear2 = document.createElement("h4");
    projectYear2.classList.add("desktop-text", "grey-text");
    projectYear2.innerHTML = work.year2;
    descDetails.appendChild(projectYear2);

    //ADDING PROJECT DESCRIPTION PARAGRAPHS
    const descText = document.createElement('p');
    descText.classList.add("desc-text", "mobile-text")
    descText.innerHTML = work.description1;
    descWrapper.appendChild(descText);
    
    const descText2 = document.createElement('p');
    descText2.classList.add("desc-text", "desktop-text")
    descText2.innerHTML = work.description2;
    descWrapper.appendChild(descText2);

    //ADDING TECHNOLOGIES
    const workTech = document.createElement("div");
    workTech.classList.add("work-tech" ,"small-ul-spacing");
    descWrapper.appendChild(workTech);
    
    //ADDING TECHNOLOGIES LIST
    techListContainer = document.createElement('ul');
    workTech.append(techListContainer);
    
    //ADDING TECHNOLOGY LOOP
    const techLister = work.technologies;
    techLister.forEach((technology, pointer) => {
        const techItem = document.createElement('li');
        techItem.innerHTML = technology;
        techListContainer.appendChild(techItem);
    }
    
    );

    //ADDING SEE-WORK BUTTONS TO WORKS
    const seeWork = document.createElement("div");
    seeWork.classList.add("see-work");
    workDescription.appendChild(seeWork);

    const seeBtn = document.createElement("button");
    seeBtn.innerHTML = 'See Project';
    seeBtn.setAttribute('project-index', index);
    seeWork.appendChild(seeBtn);
});

//APPENDING WORKS SECTION TO BODY (ON TOP OF ABOUT SECTION)
body.insertBefore(portfolioContainer, about);

//ADDING EVENT HANDLER FOR SEE BUTTONS
const seeBtn = document.querySelectorAll(".see-work button");

seeBtn.forEach((btn) => {
    btn.addEventListener('click', addModal);
  });
  
  function addModal(e) {
    // MODAL DISPLAY = BLOCK
    const modal = document.createElement('div');
    modal.classList.add("modal-container")
    document.body.appendChild(modal); // inserting modal into body

    body.style.overflowY = 'hidden';


    const modalCard = document.createElement('div');
    modalCard.classList.add("modal-card")
    modal.appendChild(modalCard);

    const popupHead = document.createElement('div');

    // GETTING THE VARIOUS BUTTON INDEX ATTRIBUTE TO TARGET EXACT PROJECT
    const projectIndex = e.target.getAttribute('data-project-index');
    const project = portfolioData[projectIndex];

    const titleElement = document.createElement('h2');
    titleElement.textContent = project.title;


 
    



  }


  

