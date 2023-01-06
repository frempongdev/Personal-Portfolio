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
      paragraph1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      paragraph2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      liveLink:'#',
      sourceLink:'#',
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
      paragraph1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      paragraph2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      liveLink:'#',
      sourceLink:'#',    },
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
      paragraph1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      paragraph2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      liveLink:'#',
      sourceLink:'#',    },
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
      dotImage:'assets/mobile/dot.png',paragraph1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      paragraph2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      liveLink:'#',
      sourceLink:'#',    }
  ];
  
  let workRef;
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

    // refering work globally
    workRef=work;
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
    popupHead.classList.add('popup-head');
    modalCard.appendChild(popupHead);

    // GETTING THE VARIOUS BUTTON INDEX ATTRIBUTE TO TARGET EXACT PROJECT
    const projectIndex = e.target.getAttribute('project-index');
    const project = portfolioData[projectIndex];
    console.log(projectIndex);

    //POPUP ELEMENTS ADDED HERE
    const titleElement = document.createElement('h2');
    titleElement.textContent = project.title;
    titleElement.classList.add('modal-project-title');
    popupHead.appendChild(titleElement);

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('modal-close-btn');
    popupHead.appendChild(closeBtn);

    const closeBtnImg = document.createElement('img');
    closeBtnImg.setAttribute('src', 'assets/images/close-btn.png');
    closeBtnImg.classList.add('modal-close-img');
    closeBtn.appendChild(closeBtnImg);
// -------------------------------------------------------------------------------
    
    //MODAL PROJECT DETAILS CONTAINER
    const modalProjectDetails = document.createElement("div");
    modalProjectDetails.classList.add("modal-project-container");
    modalCard.appendChild(modalProjectDetails);
    
    const modalProjectCompany = document.createElement("h4");
    modalProjectCompany.classList.add("mobile-text");
    modalProjectCompany.setAttribute('id','mdpj-company');
    modalProjectCompany.innerHTML = project.company;
    modalProjectDetails.appendChild(modalProjectCompany);
    
    const dot = document.createElement('img');
    dot.classList.add("mobile-dot");
    dot.src = workRef.dotImage;
    dot.alt= 'dot';
    modalProjectDetails.appendChild(dot);

    const modalProjectRole = document.createElement("h4");
    modalProjectRole.classList.add("mobile-text");
    modalProjectRole.setAttribute('id','mdpj-role');
    modalProjectRole.innerHTML = project.role1;
    modalProjectDetails.appendChild(modalProjectRole);

    const dotCopy = dot.cloneNode();
    modalProjectDetails.appendChild(dotCopy);
   
    const modalProjectYear = document.createElement("h4");
    modalProjectYear.classList.add("mobile-text");
    modalProjectYear.setAttribute('id','mdpj-year');
    modalProjectYear.innerHTML = project.year1;
    modalProjectDetails.appendChild(modalProjectYear);

    //ADDING MODAL PROJECT IMAGE
    const modalImage = document.createElement("img");
    modalImage.classList.add("mobile-pic");
    modalImage.setAttribute('id','mdpj-img');
    modalImage.src = project.imageMobile;
    modalImage.alt = `${workRef.title} snapshot`;
    modalCard.appendChild(modalImage);
    
    //ADDING MODAL PROJECT PARAGRAPH
    const modalParagraph = document.createElement("p");
    modalParagraph.classList.add("mdpj-paragraph");
    modalParagraph.innerHTML = project.paragraph1;
    modalCard.appendChild(modalParagraph);

    //ADDING MODAL PROJECT TECHNOLOGIES
    const modalTechnologyContainer = document.createElement("div");
    modalTechnologyContainer.classList.add("work-tech","modal-project-technology");
    modalCard.appendChild(modalTechnologyContainer);

    const techListContainer = document.createElement('ul');
    modalTechnologyContainer.appendChild(techListContainer);

    const techLister = workRef.technologies;
    techLister.forEach((technology, pointer) => {
        const techItem = document.createElement('li');
        techItem.innerHTML = technology;
        techListContainer.appendChild(techItem);
    });

    const divider = document.createElement("div");
    divider.classList.add("divider");
    modalCard.appendChild(divider);
    
    const modalButonsContainer = document.createElement("div");
    modalButonsContainer.classList.add("modal-buttons-container");
    modalCard.appendChild(modalButonsContainer);

    const liveButton = document.createElement('button');
    liveButton.classList.add("project-live-button");
    liveButton.innerHTML='See live';
    modalButonsContainer.appendChild(liveButton);

    const modalLiveBtnImage = document.createElement("img");
    modalLiveBtnImage.classList.add('modal-live-button-img');
    modalLiveBtnImage.src = "assets/images/live-btn.png";
    modalImage.alt = `modal-live-button-image`;
    liveButton.appendChild(modalLiveBtnImage);

    const sourceButton = document.createElement('button');
    sourceButton.classList.add("project-source-button");
    sourceButton.innerHTML='See Source';
    modalButonsContainer.appendChild(sourceButton);

    const modalSourceBtnImage = document.createElement("img");
    modalSourceBtnImage.classList.add('modal-source-button-img');
    modalSourceBtnImage.src = "assets/images/source-btn.png";
    modalImage.alt = `modal-source-button-image`;
    sourceButton.appendChild(modalSourceBtnImage);











    // //ADDING PROJECT CLIENT
    
    // const projectCompany2 = document.createElement("h4");
    // projectCompany2.classList.add("desktop-text");
    // projectCompany2.innerHTML = work.company2;
    // descDetails.appendChild(projectCompany2);

    // //ADDING DOT ELEMENT
    // const dot = document.createElement('img');
    // dot.classList.add("mobile-dot");
    // dot.src = work.dotImage;
    // dot.alt= 'dot';
    // descDetails.appendChild(dot);

    // //ADDING PROJECT ROLES
    // const projectRole1 = document.createElement("h4");
    // projectRole1.classList.add("mobile-text", "grey-text");
    // projectRole1.innerHTML = work.role1;
    // descDetails.appendChild(projectRole1);
  
    // const projectRole2 = document.createElement("h4");
    // projectRole2.classList.add("desktop-text", "grey-text");
    // projectRole2.innerHTML = work.role2;
    // descDetails.appendChild(projectRole2);
 
    



  }


  

