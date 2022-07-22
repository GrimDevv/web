function togglemode() {
    // Main Background
    document.querySelector(".main").classList.toggle("dark")
    // Navbar
    document.querySelector("nav").classList.toggle("dark")
    // Navbar Text
    const navigationbartext = document.querySelectorAll(".pc-nav-btn")
    for(let i = 0; i < navigationbartext.length; i++){
        navigationbartext[i].classList.toggle('dark')
    }
    // Mobile Menu Bar
    const mobilemenubar = document.querySelectorAll(".bar")
    for(let i = 0; i < mobilemenubar.length; i++){
        mobilemenubar[i].classList.toggle('dark')
    }
    // Code editor
    document.querySelector(".introduction-code-editor").classList.toggle("dark")
    // Introduction Text
    document.querySelector(".intro-text-1").classList.toggle("dark")
    document.querySelector(".intro-text-2").classList.toggle("dark")
    document.querySelector(".intro-text-3").classList.toggle("dark")
    // Social Connection
    const socialconnection = document.querySelectorAll(".social-connection")
    for(let i = 0; i < socialconnection.length; i++){
        socialconnection[i].classList.toggle('dark')
    }
    // About box
    document.querySelector(".about-box").classList.toggle("dark")
    // About Header
    document.querySelector(".about-header").classList.toggle("dark")
    // Skill Header
    document.querySelector(".skill-header").classList.toggle("dark")
    // Love Header
    document.querySelector(".love-header").classList.toggle("dark")
    // Love Box
    const lovebox = document.querySelectorAll(".love")
    for(let i = 0; i < lovebox.length; i++){
        lovebox[i].classList.toggle('dark')
    }
    // Love Sub Text
    const lovesubtext = document.querySelectorAll(".love-sub-text")
    for(let i = 0; i < lovesubtext.length; i++){
        lovesubtext[i].classList.toggle('dark')
    }
     // Love Main Text
     const lovemaintext = document.querySelectorAll(".love-main-text")
     for(let i = 0; i < lovemaintext.length; i++){
         lovemaintext[i].classList.toggle('dark')
     }
    //  Social Header
    document.querySelector(".social-header").classList.toggle("dark")
    // Social Text
    const socialtext = document.querySelectorAll(".social-text")
    for(let i = 0; i < socialtext.length; i++){
        socialtext[i].classList.toggle('dark')
    }
    // Social Box
    const socialbox = document.querySelectorAll(".social")
    for(let i = 0; i < socialbox.length; i++){
        socialbox[i].classList.toggle('dark')
    }
    // Skill Box
    const skillbox = document.querySelectorAll(".skill-box")
    for(let i = 0; i < skillbox.length; i++){
        skillbox[i].classList.toggle('dark')
    }
    
}
// Toggleicon Function
function toggleicon() {
    document.querySelector(".togglemoon").classList.toggle("hidden")
    document.querySelector(".togglesun").classList.toggle("visible")
}