


function Click() {
   let id = event.target.id;
   let projectElement = document.getElementById(id);
    projectElement.innerHTML = "Loading...";
    startCelebration();





   newpage = window.open('', '_self'); 
   newpage.document.write('<html><head><title>' + id.charAt(0).toUpperCase() + id.slice(1) + '</title></head><body><h1>' + id.charAt(0).toUpperCase() + id.slice(1) /*+ '</h1><p>This is a placeholder page for ' + id + '.</p></body></html>'*/);
    newpage.document.write('<!DOCTYPE html><html><head>');

    newpage.document.write('<link rel="stylesheet" href="style.css">'); 

    newpage.document.write('</head><body>');
    var imageData;

   if (id=="portfolioLink") {

    
         imageData = [
            { src: "booksRead.png", alt: "Books Read", txt: "Essentially, my absolute favorite type of genre is science fiction. I have read so many books over the past years during my journey in PCTVS highschool. I would sincerly like to thank the book club for making me enjoy reading once again!" },
            { src: "education.png", alt: "Education", txt: "Essentially, one of my favorite subject is mathematics. I have loved math all throughout my life. Anything that deals with STEM related pathways is the way to go!" },
            { src: "familyPhoto2.png", alt: "FamilyPhoto", txt:"These are some of the pictures I have for myself and my family."},
            { src: "favFood.png", alt: "Food", txt: "These are some of my favorite foods: Dosas, Samosas, Idli. I also love pizza and sweets!"},
            { src: "interests.png", alt: "Interests", txt: "I have so many interests. One of my favorite is coding!"},
            { src: "facts.png", alt: "Facts", txt: "I have listed some fun facts about myself. Feel free to read them."},


        ];

        



        

    }    else if (id=="projects") {
        imageData = [
            { src: "art.jpg", alt: "Artworks", txt: "Throughout my life, I have drawn many artworks and they were amazing experiences! Drawing and doodling helped me when school stressed me out."},
            { src: "dreamland.png", alt: "Dreamland Project", txt: "This is the project that I have turned in for FBLA. I had lost but I also had gained valuable learning experience." },
            { src: "flowers.jpg", alt: "Flowers", txt:"I love to take picture of flowers and water them!"},
            { src: "lasangia.png", alt: "Lasangia", txt:"I helped my mom cook Lasangia"},
            { src: "minecraft.jpg", alt: "Minecraft", txt:"Rizwan and I have created many cool buildings in minecraft."},
            { src: "plants.jpg", alt: "Plants", txt: "I love watching the plants grow. I help my mother water them sometimes."},
            { src: "santa.jpg", alt: "Santa", txt: "I helped my father set up Santa Claus for christmas. Ho Ho Ho!"},
        ];



    }
   else if (id=="ideas") {

        imageData = [
            { src: "AI.jpg", alt: "AI", txt: "One day, I want to help revolutize the world by creating robots that teach students effectivly! AI will make life easier for us!"},
            { src: "chem.jpg", alt: "Chemistry", txt: "When I grow up, I want to do cool experiments in the lab."},
            { src: "coding.webp", alt: "Coding", txt: "I like to code and I want to actually make a videogame when I'm older."},
            { src: "cybersecurity.webp", alt: "Cyber", txt: "I was never really good at cybersecurity but I feel like I should know this at some point in my life." },
            { src: "engineering.jpg", alt: "Engineering", txt: "I will do computer and electrical engineering in college." },
            { src: "math.jpeg", alt: "Math", txt: "I want to be able to do more advance mathematics as I grow older."},
            { src: "physics.jpg", alt: "Physics", txt: "I also want to be abel to do more advance physics problems as I prosper in the subject." },
            { src: "smartGlasses.jpg", alt: "Glasses", txt: "I want to become a super-genius kid."},
        ];

   }

    else if (id=="gallery") {


        imageData = [
            { src: "books.jpg", alt: "books", txt:"Did I forget to mention I'm basically a speed-reader?" },
            { src: "bugPhoto.jpg", alt: "bugs", txt:"My mission is to spot a new kind of bug evertime I go to the playground. I usually do that during the summer."},
            { src: "calculator.jpg", alt: "calculator", txt:"I love doing math in my TI84 calculator." },
            { src: "I_Must_Betray_You.jpg", alt: "book", txt: "This book is just like the book of 1984."},
            { src: "icecream.jpg", alt: "Icecream", txt:"Butterscotch is such a good flavor. You should try some!"},
            { src: "icepop.jpg", alt: "Icepop", txt:"I like icepop but they are not my favorite thing to eat." },
            { src: "lemoncelloBooks.jpg", alt: "book", txt:"I used to read the lemoncello series and other books that talk about the power of books when I was yonger. Now, I like to read non-fiction or science-fiction." },
            { src: "michigan_vs_the_boys.jpg", alt: "book", txt:"I may or may not have read the entire book of Michigan Vs The Boys but I should continue sometime."},
            { src: "roboticDog.jpg", alt: "robotic_dog", txt: "In my freetime, I like to look at pictures at robots just like the robotic dog in PCTI."},
            { src: "sky_dim.jpg", alt: "dim_sky", txt:"I like to take pictures of the dim sky!"},
            { src: "sky_morning.jpg", alt: "morning_sky", txt:"I like to take pictures of the morning sky!"},
            { src: "temple.jpg", alt: "temple", txt: "I pray everyday for the wellbeing of me and my family."},
            { src: "train.jpg", alt: "train", txt: "I went to a subway museum and got a picture of the interior of a subway/train."},
            { src: "trainModel.jpg", alt: "train_model", txt:"I got a picture of the train model."},
            { src: "warcross.jpg", alt: "book", txt:"I have read the Warcross. This book is about a girl who tries to stop the neurolink from taking over the world."},
            { src: "You've_Reached_Sam.jpg", alt: "book", txt:"This book was such an emotional one because the main character, a girl believes that her boyfriend still exist within this world but it is all an illusion."},







        ];

    

    }

    else if (id == "family_photos"){

          imageData = [

            { src: "photo.jpg", alt: "Photo", txt: "Well this is me!"},
            { src: "familyPhoto.jpg", alt: "FamilyPhoto" , txt: "This is my family!"}]





        
    }

    else if (id=="email-form"){
        newpage.document.write('<h2>"Email:"</h2>')
        newpage.document.write('<h3>"jaineil32624@gmail.com"</h3>')
        newpage.document.write('<h3>"270629@pcti.mobi"</h3>')
        imageData = [{src:"email_me.jpg", alt:"Discord", txt:"Email me at: jaineil32624@gmail.com, or 270629@pcti.mobi if you guys have any questions."}];
    }


    else if (id=="social-media"){
        newpage.document.write('<h2>"Social Media:"</h2>')
        newpage.document.write('<h3>"Atomicwaves"</h3>')
        newpage.document.write('<h3>"Jaineil Rana"</h3>')
        imageData = [
                {src:"discord.png", alt:"Discord", txt:"Discord Account: Atomicwaves"},
                {src:"instagram.png", alt:"Instagram", txt:"Social Media: Jaineil Rana"},
        ];

    }

    else if (id=="location") {
        newpage.document.write('<h2>"Location:"</h2>')
        newpage.document.write('<h3>"New Jersy"</h3>')
        newpage.document.write('<h3>"Passaic"</h3>')
        imageData = [
                {src:"nj.png", alt:"NJ", txt: "I am from New Jersy, Passaic City."},
        ];


    }

    else if (id=="phone") {
        newpage.document.write('<h2>"Phone Numbers:"</h2>')
        newpage.document.write('<h2>"862-571-8021"</h2>')
        newpage.document.write('<h2>"862-571-3328"</h2>')
        imageData = [
                {src:"call_me.png", alt:"NJ", txt: "If you ever need to call, here are the phone-numbers: 862-571-8021 and 862-571-3328"},
        ];
        
    }
    
    else if (id=="address") {
        newpage.document.write('<h2>"Home Address is not shown due to specific reasons!:"</h2>')
        imageData = [
                {src:"nj.png", alt:"NJ", txt:"Sorry, I cannot reveal my specific locations due to privacy reasons!"},
        ];
    }

    else if (id=="python_code") {
               imageData = [
                {src:"python_code8.png", alt:"python_code", txt: "The code output accumulates the total price based on several factors about the user."},
                {src:"python_code5.png", alt:"python_code", txt: "The code output displays information about the solarclips that had happened throughout the years."},
                {src:"python_code6.png", alt:"python_code", txt: "The user is able to perform mathematical calculation using this simple calcualtor code."},
                {src:"python_code7.png", alt:"python_code", txt: "The program asks the user simple questions like the number of credits taken at the college and at the end, it displays the total price."},
                {src:"python_code1.png", alt:"python_code", txt: "When executed, the output displays the game results in terms of several aspect about the matches."},
                {src:"python_code2.png", alt:"python_code", txt: "The story based game is about a man trying to live is normal life through work and helpings others but he has to make the right choices."},
                {src:"python_code3.png", alt:"python_code", txt: "The story based game is about battling aliens that will destroy the world."},
                {src:"python_code4.png", alt:"python_code", txt: "The restaurant project is essentially about ordering food items on the menu and recieving the dishes and the total price."},
          

        ];
    }

    else if (id=="minecraft_code") {
               imageData = [
                {src:"minecraft_code3.png", alt:"minecraft_code" ,txt:"The code on the left changes the arrow count by 1 and then later shrinks the number of arrows available in the inventory. Essentially, each time, the number of arrow shots gets incremented when the bow shoots an arrow by the player."},
                {src:"minecraft_code4.png", alt:"minecraft_code" ,txt:"When the user types in 'chicken' in the minecraft chat box, a specific egg gets spawned 100 times. "},
                {src:"minecraft_code6.png", alt:"minecraft_code" ,txt: "When a piece of specific block is broken, an animal is spawned in the location specified."},
                {src:"minecraft_code8.png", alt:"minecraft_code" ,txt: "When the user types in 'name' into the chatbox, the function gets called and execute the name a specified number of times. In this case, it is 10 times. "},
                {src:"minecraft_code2.png", alt:"minecraft_code" ,txt: "The code essentially adds blcok to a random relative location close to the player a specified number a times when the command 'PrintBlocks' is executed. "},
                {src:"minecraft_code5.png", alt:"minecraft_code" ,txt: "The player essentially dances by moving around in a loop when the command 'dance' is executed." },
                {src:"minecraft_code7.png", alt:"minecraft_code", txt: "When the command 'mix' is executed, the code prints a sentence full of grammar."},
                {src:"minecraft_code1.png", alt:"minecraft_code", txt: "The code generates random animals when the player types in 'Animal_Spawn'."},

        ];
    }

    else if (id=="scratch_code") {
               imageData = [
                {src:"scratch_code2.png", alt:"scratch_code" ,txt: "If the button 'restart' is clicked, then the code will restart and make a new whirly image on the screen."},
                {src:"scratch_code1.png", alt:"scratch_code", txt:"The code detects the mouse pointer and records its movement and plays it in the reverse manner when needed."},
                {src:"scratch_code3.png", alt:"scratch_code",txt:"The player gets some physics attribute based on gravity and gains movement detection. The function allows the player to move around on the platform essentially."},
                {src:"scratch_code8.png", alt:"scratch_code", txt:"The player moves in a scrolling platform, in which the background moves to accomdate the player's movement. Essentially, it feels like the screen is moving according to where the player is which makes the game more dynamic and free. "},
                {src:"scratch_code4.png", alt:"scratch_code", txt: "Santa Clause is given the ability to fly and drop presents that are actually disguised present bombs."},
                {src:"scratch_code5.png", alt:"scratch_code", txt: "When the chocolate clicker is clicked, the user gains points relative to their upgrade paths."},
                {src:"scratch_code7.png", alt:"scratch_code", txt: "The player is given physical dynamics that allows it to move around and jump."},
                {src:"scratch_code6.png", alt:"scratch_code", txt: "When the gun is upgraded, it shoots more powerful bullets which further decrements the pirates health."},

        ];
    }

    else if (id=="javascript_code") {
               imageData = [
                {src:"javascript_code8.png", alt:"javascript_code", txt:"The shopping cart function essentially adds an item into the cart. The item added is part of the school supplies and the the price is listed as well."},
        
                {src:"javascript_code2.png", alt:"javascript_code", txt:"Everytime a button is clicked, the sound is being played. The sound sounds like the click of a button."},
                {src:"javascript_code3.png", alt:"javascript_code", txt:"The shopping cart function adds an item into the shopping cart. [The codespace was changed because it feels better to be using one that works better.]"},
                {src:"javascript_code5.png", alt:"javascript_code", txt:"The background of the image becomes more colorful as if it feels smoother. "},
                {src:"javascript_code6.png", alt:"javascript_code" , txt: "The button changes affects when it is hovered versus when it is not hovered."},
                {src:"javascript_code7.png", alt:"javascript_code", txt: "The code displays a sign up page as well as a log in page. User will have to make an account before logging in."},
                {src:"javascript_code4.png", alt:"javascript_code", txt: "The code displays several items that could be added into the shopping cart."},
                {src:"javascript_code1.png", alt:"javascript_code", txt: "The confeddi functions allows the confeddi to show up and appear as a surprise effect."},

        ];
    }




    else if (id=="makecode") {
               imageData = [
                {src:"makecode1.jpg", alt:"makecode"},
                {src:"makecode2.jpg", alt:"makecode"},
                {src:"makecode3.jpg", alt:"makecode"},
                {src:"makecode4.jpg", alt:"makecode"},
                {src:"makecode5.jpg", alt:"makecode"},
                {src:"makecode6.jpg", alt:"makecode"},
                {src:"makecode7.jpg", alt:"makecode"},
                {src:"makecode8.jpg", alt:"makecode"},

        ];

    }

    else if (id=="Do_Nows") {
                 imageData = [
                {src:"Do_Nows6.png", alt:"Do_Nows", txt: "The description explains the three types of file types: PDFs, GIFs, and DOCs"},
                {src:"Do_Nows7.png", alt:"Do_Nows", txt: "The description talks about the types of hardware used such as the HDD, motherboard, the video card, the CPU, the ports, and the power supply that makes up the computer's components. "},
                {src:"Do_Nows3.png", alt:"Do_Nows", txt: "The description on the left explains that image compression compresses visual data by pulling out pixels and replicating them, however text compression removes all repeated characters and inserts a single character in its place."},
                {src:"Do_Nows4.png", alt:"Do_Nows", txt: "The description communicates about the DRY principle which stands for 'Do Not Repeat Yourself'. Essentially, this means that a person should not repeat the same exact code again and agaain."},
                {src:"Do_Nows1.png", alt:"Do_Nows" ,txt:"The description talks about the difference of coding envrionment, the binary system and the types of errors. The two types of coding environment are either block or manual code. The binary system are basically a multitude of binary number consisting of 0s and 1s. The types of errors are logic, runtime, synthax and overflow errors."},
                {src:"Do_Nows2.png", alt:"Do_Nows", txt: "The explanation on the left says that lossless data means that data is not loss, and all of it is stored but it is less compressible, but lossy data means some data is lost but it is more compressible."},
                {src:"Do_Nows5.png", alt:"Do_Nows", txt:"The explanation describes several examples of inputs such as tactile, audio and visual inputs as well as text."},
                {src:"Do_Nows8.png", alt:"Do_Nows", txt: "The explanation clarifies the types of operators used in computer science programming langauges such as Arithmetic operator, Assignment operator and Comparison operator."},]

    }






        const galleryContainer = document.createElement('div');
        galleryContainer.classList.add('image-gallery');

        const lightboxOverlay = document.createElement('div');
        lightboxOverlay.id = 'lightbox-overlay';
        lightboxOverlay.classList.add('lightbox-overlay');

        const lightboxContent = document.createElement('div');
        lightboxContent.classList.add('lightbox-content');

        const lightboxImage = document.createElement('img');
        lightboxImage.id = 'lightbox-image';
        lightboxContent.appendChild(lightboxImage);
        lightboxOverlay.appendChild(lightboxContent);


        const lightboxText = document.createElement('p');
        lightboxText.id = 'lightbox-text';
        lightboxContent.appendChild(lightboxText);
        lightboxOverlay.appendChild(lightboxContent);


          
        
        imageData.forEach(image => {
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            img.txt = image.txt;
            img.classList.add('portfolio-image');
            galleryContainer.appendChild(img);

            const imgText = document.createElement('p');
            imgText.textContent = image.txt;
            imgText.classList.add('image-description');
            galleryContainer.appendChild(imgText);
            


            img.addEventListener('click', () => {
                lightboxImage.src = img.src;
                lightboxImage.alt = img.alt;
                
    



                lightboxOverlay.classList.add('visible');
                const MIN_DIMENSION = 300; 
                const screenWidth = window.innerWidth;
                const screenHeight = window.innerHeight;
                const padding = 40; 

                const naturalWidth = img.naturalWidth;
                const naturalHeight = img.naturalHeight;

                let newWidth = Math.min(naturalWidth, screenWidth - padding);
                let newHeight = Math.min(naturalHeight, screenHeight - padding);

                newWidth = Math.max(newWidth, MIN_DIMENSION);
                newHeight = Math.max(newHeight, MIN_DIMENSION);

                lightboxContent.style.maxWidth = `${newWidth}px`;
                lightboxContent.style.maxHeight = `${newHeight}px`;
                

                if (naturalWidth / naturalHeight > 1) {
             
                    lightboxImage.style.width = '100%';
                    lightboxImage.style.height = 'auto';
                } else {
                    lightboxImage.style.height = '100%';
                    lightboxImage.style.width = 'auto';
                }

                lightboxOverlay.classList.add('visible');
                lightboxContent.display(lightboxText.textContent)
            });

            
        }); 

        lightboxOverlay.addEventListener('click', () => {
            lightboxOverlay.classList.remove('visible');
        });

        const mainContainer = document.createElement('div');
        mainContainer.classList.add('main-container');

        const galleryTitle = document.createElement('h1');
   
        mainContainer.appendChild(galleryTitle);
        mainContainer.appendChild(galleryContainer);
        document.body.appendChild(mainContainer);
        document.body.appendChild(lightboxOverlay); 


        

        


        
       

    newpage.document.write('</body></html>');
   newpage.document.close();


   newpage.document.body.style.fontFamily = 'Arial, sans-serif';
   newpage.document.body.style.textAlign = 'center';
   newpage.document.body.style.padding = '20px';
   
   newpage.document.body.style.backgroundColor = setInterval(setSmoothBackground, 10);
;





   

   let button = newpage.document.createElement('button');   
   button.innerHTML = '🏠 Home';
   button.style.padding = '10px 20px';
   button.style.fontSize = '16px';
   button.style.marginTop = '20px';
   button.style.cursor = 'pointer';
   button.style.border = 'none';
   button.style.borderRadius = '5px';
   button.style.backgroundColor = '#007BFF';
   button.style.color = '#fff';
   button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
   button.style.transition = 'background-color 0.3s ease';






   
   button.onmouseover = function() {
       button.style.backgroundColor = '#0056b3';
   };


   button.onmouseout = function() {
       button.style.backgroundColor = '#007BFF';
   };


   newpage.document.body.appendChild(button);
   newpage.button = button;
   newpage.button.style.display = 'block';
   newpage.button.style.margin = '20px auto';



   


    newpage.button.onclick = function() {
        window.location.href = "index.html";
    };






}









const imageSets = {
    minecraft: [
        ['minecraft1.jpg', 'minecraft2.jpg', 'minecraft3.jpg', 'minecraft4.jpg', 'minecraft5.jpg', 'minecraft6.jpg', 'minecraft7.jpg', 'minecraft8.jpg'],
        ['minecraft9.jpg', 'minecraft10.jpg', 'minecraft11.jpg', 'minecraft12.jpg', 'minecraft13.jpg', 'minecraft14.jpg', 'minecraft15.jpg', 'minecraft16.jpg']
    ],
    makecode: [
        ['makecode1.jpg', 'makecode2.jpg', 'makecode3.jpg', 'makecode4.jpg', 'makecode5.jpg', 'makecode6.jpg', 'makecode7.jpg', 'makecode8.jpg'],
        ['unity8.jpg', 'unity2.jpg', 'unity3.jpg', 'unity4.jpg', 'unity5.jpg', 'unity6.jpg', 'unity7.jpg', 'unity1.jpg',],
        ['scratch1.jpg', 'scratch2.jpg','scratch3.jpg','scratch4.jpg','scratch5.jpg','scratch6.jpg','scratch7.jpg', 'scratch8.jpg',]
    ],
    roblox: [
        ['roblox1.jpg', 'roblox2.jpg', 'roblox3.jpg', 'roblox4.jpg', 'roblox5.jpg', 'roblox6.jpg', 'roblox7.jpg', 'roblox8.jpg'],
        ['roblox9.jpg', 'roblox10.jpg', 'roblox16.jpg', 'roblox12.jpg', 'roblox13.jpg', 'roblox14.jpg', 'roblox15.jpg', 'roblox11.jpg']
    ]
};

const currentSetIndex = { minecraft: 0, makecode: 0, roblox: 0 };

const sectionImageIds = {
    minecraft: ['minecraft1', 'minecraft2', 'minecraft3', 'minecraft4', 'minecraft5', 'minecraft6', 'minecraft7', 'minecraft8'],
    makecode: ['makecode1', 'makecode2', 'makecode3', 'makecode4', 'makecode5', 'makecode6', 'makecode7', 'makecode8'],
    roblox: ['roblox1', 'roblox2', 'roblox3', 'roblox4', 'roblox5', 'roblox6', 'roblox7', 'roblox8']
};

function changeImages(sectionName) {

    let currentIndex = currentSetIndex[sectionName];
    
    currentIndex = (currentIndex + 1) % imageSets[sectionName].length;
    currentSetIndex[sectionName] = currentIndex;

    const newImagePaths = imageSets[sectionName][currentIndex];
    const imageIds = sectionImageIds[sectionName];

    imageIds.forEach((id, index) => {
        const imgElement = document.getElementById(id); 
        if (imgElement && newImagePaths[index]) {
            imgElement.src = newImagePaths[index]; 
        }
    });
}










let hue = 0; 

function setSmoothBackground() {
    hue = (hue + 1) % 360; 
    const saturation = 70;
    const lightness = 80;
    
    const smoothColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    
    document.body.style.backgroundColor = smoothColor;
}


function confetti(confetti_number = Math.floor(Math.random() * (50 - 25 + 1)) + 25) {
   for (let i = 0; i < confetti_number; i++) {
       setTimeout(() => {
           const confetti = document.createElement('div');
           confetti.classList.add('confetti-piece');
           confetti.style.left = Math.random() * 100 + 'vw';
           confetti.style.top = '0px';
           confetti.style.backgroundColor = `hsl(${Math.random() * 450}, 70%, 60%)`;
           confetti.style.position = 'fixed';
           confetti.style.width = `${Math.random()*10}px`;
           confetti.style.height = '16px';
           confetti.style.borderRadius = '100px';
           confetti.style.zIndex = 9999;
           confetti.style.opacity = 0.8;
           confetti.style.transition = 'top 2s ease, opacity 2s ease';
           document.body.appendChild(confetti);
           setTimeout(() => {
               confetti.style.top = '100vh';
               confetti.style.opacity = 0.2;
               confetti.style.borderRadius = '50%';
           }, 50);
           setTimeout(() => {
               confetti.remove();
           }, 2000);
       }, Math.random() * 20000); 


       
   }
}











function startCelebration() {
        setTimeout(() => {
        confetti();
        }, 0);
    }









const sections = {
   button1: 'homeSection',
   button2: 'aboutSection',
   button3: 'projectsSection',
   button4: 'skillsSection',
   button5: 'contactSection',
};








Object.keys(sections).forEach(btnId => {
   document.getElementById(btnId).addEventListener('click', () => {
       Object.values(sections).forEach(secId => {
           document.getElementById(secId).style.display = 'none';
       });
       document.getElementById(sections[btnId]).style.display = 'block';
   });
});
























document.getElementById('homeSection').style.display = 'block';
document.getElementById('aboutSection').style.display = 'none';
document.getElementById('projectsSection').style.display = 'none';
document.getElementById('skillsSection').style.display = 'none';
document.getElementById('contactSection').style.display = 'none';







    function showMessage(message) {
        const msgBox = document.getElementById('message-box');
        msgBox.textContent = message;
        msgBox.classList.add('show');
        setTimeout(() => {
            msgBox.classList.remove('show');
        }, 3000);
    
    }




    function renderForm(formType) {
        const container = document.getElementById('form-container');

        if (!container) {
            console.error("Error: Element with ID 'form-container' not found.");
            return;
        }
        
        if (formType === 'login') {
            container.innerHTML = `
                <h1>Log In</h1>
                <form id="login-form">
                    <div class="input-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="john.doe@example.com" required>
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="••••••••" required>
                    </div>
                    <button type="submit">Log In</button>
                </form>
                <button onclick="renderForm('signup')" style="margin-top: 1rem; background-color: #95a5a6; color: #fff;">Need an account?</button>
            `;



            document.getElementById('login-form').addEventListener('submit', function(event) {
                event.preventDefault();
                showMessage("You have logged in!");
            });

        } else if (formType === 'signup') {
            container.innerHTML = `
                <h1>Create an Account</h1>
                <form id="signup-form">
                    <div class="input-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" name="name" placeholder="John Doe" required>
                    </div>
                    <div class="input-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="john.doe@example.com" required>
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="••••••••" required>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <button onclick="renderForm('login')" style="margin-top: 1rem; background-color: #95a5a6; color: #fff;">Already have an account?</button>
            `;








            
            document.getElementById('signup-form').addEventListener('submit', function(event) {
                event.preventDefault();
                const name = document.getElementById('name').value;
                const message = `Thanks, ${name}! Your account has been created.`;
                showMessage(message);
            });
        }
    }


    

const buttons = document.querySelectorAll('.button, .sub-button, .img');
const sound = document.getElementById('click-sound');

if (sound) {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            sound.currentTime = 0;
            sound.play();
        });
    });
}











document.addEventListener('DOMContentLoaded', (event) => {
    const arrows = document.querySelectorAll('.arrow');
    const sections = document.querySelectorAll('.grid-section');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    window.addEventListener('scroll', () => {
        sections.forEach((section, index) => {
            if (isInViewport(section)) {
                if (arrows[index]) {
                    arrows[index].classList.add('animate');
                }
            } else {
                if (arrows[index]) {
                    arrows[index].classList.remove('animate');
                }
            }
        });
    });
});

