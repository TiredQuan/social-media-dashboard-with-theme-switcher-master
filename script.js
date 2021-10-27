function getUserPreference(){
    return localStorage.getItem('theme')||'system';
}
function saveUserPreference(userPreference){
    localStorage.setItem('theme',userPreference);
}
function getAppliedMode(userPreference){
    if(userPreference==='light'){
        return 'light';
    }
    if(userPreference==='dark'){
        return 'dark';
    }

    //system
    if(matchMedia('(prefers-color-scheme: light)').matches){
        return 'light';
    }
    return 'dark';
}
const colorScheme = document.querySelector('meta[name="color-scheme]');
function setAppliedMode(mode){
    document.body.className=mode;
    colorScheme.content=mode;
}

const themeToggler = document.getElementById('theme-toggle');
let userPreference = getUserPreference();
setAppliedMode(getAppliedMode(userPreference));

themeToggler.onclick = () =>{
    const newUserPref = rotatePreferences(userPreference);
    userPreference=newUserPref;
    saveUserPreference(newUserPref);
    setAppliedMode(getAppliedMode(newUserPref));
}

//Credit to Ayc0 for the dark theme articles in dev.to 