async function displayUI() {    
    await signIn();

    // Display info from user profile
    const user = await getUser();
    var userName = document.getElementById('userName');
    userName.innerText = user.displayName;  

    // Hide login button and initial UI
    var signInButton = document.getElementById('signin');
    signInButton.style = "display: none";
    var content = document.getElementById('content');
    content.style = "display: block";
    var showPhotoButton = document.getElementById('showProfilePhoto'); 
    showPhotoButton.style = "display: block"; 
    var showDirectReportsButton = document.getElementById('showDirectReports'); 
    showDirectReportsButton.style = "display: block"; 
    var showFilesButton = document.getElementById('showFiles'); 
    showFilesButton.style = "display: block"; 
}

async function displayProfilePhoto() {    
    const userPhoto = await getUserPhoto(); 
    if (!userPhoto) {  
        return;  
    }     

    //convert blob to a local URL
    const urlObject = URL.createObjectURL(userPhoto); 
    // show user photo  
    const userPhotoElement = document.getElementById('userPhoto'); 
    userPhotoElement.src = urlObject;   
    var showPhotoButton = document.getElementById('showProfilePhoto');
    showPhotoButton.style = "display: none"; 
    var imgPhoto = document.getElementById('userPhoto');
    imgPhoto.style = "display: block"; 
}

async function displayDirectReports() {    
    const directReports = await getUserDirectReports(); 
    if (!directReports) {  
        return;  
    }   
    
    var showDirectReportsList = document.getElementById('userDirectReportsList');
    
    for(var i=0; i < directReports.value.length; i++)
    {
        var directReportElement = document.createElement('li');
        directReportElement.appendChild(document.createTextNode(directReports.value[i].displayName));
        showDirectReportsList.appendChild(directReportElement);
    }
    
    var showDirectReportsButton = document.getElementById('showDirectReports');
    showDirectReportsButton.style = "display: none"; 
    var directReportsElement = document.getElementById('userDirectReports');
    directReportsElement.style = "display: block"; 
}

async function displayFiles() {    
    const files = await getUserFiles(); 
    if (!files) {  
        return;  
    }   
    
    var showFilesList = document.getElementById('userFilesList');
    
    for(var i=0; i < files.value.length; i++)
    {
        var fileElement = document.createElement('li');
        var fileUrlElement = document.createElement('a');
        fileUrlElement.href = files.value[i].webUrl;
        fileUrlElement.innerText = files.value[i].name;
        fileUrlElement.target = "_blank";
        fileElement.appendChild(fileUrlElement);
        showFilesList.appendChild(fileElement);
    }
    
    var showFilesButton = document.getElementById('showFiles');
    showFilesButton.style = "display: none"; 
    var filesElement = document.getElementById('userFiles');
    filesElement.style = "display: block"; 
}
