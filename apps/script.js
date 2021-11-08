// function getUserPreference(){
//     return localStorage.getItem('theme')||'system';
// }
// function saveUserPreference(userPreference){
//     localStorage.setItem('theme',userPreference);
// }
// function getAppliedMode(userPreference){
//     if(userPreference==='light'){
//         return 'light';
//     }
//     if(userPreference==='dark'){
//         return 'dark';
//     }

//     //system
//     if(matchMedia('(prefers-color-scheme: light)').matches){
//         return 'light';
//     }
//     return 'dark';
// }
// const colorScheme = document.querySelector('meta[name="color-scheme]');
// function setAppliedMode(mode){
//     document.body.className=mode;
//     colorScheme.content=mode;
// }

// const themeToggler = document.getElementById('theme-toggle');
// let userPreference = getUserPreference();
// setAppliedMode(getAppliedMode(userPreference));

// themeToggler.onclick = () =>{
//     const newUserPref = rotatePreferences(userPreference);
//     userPreference=newUserPref;
//     saveUserPreference(newUserPref);
//     setAppliedMode(getAppliedMode(newUserPref));
// }
let themeToggler = document.getElementById('theme-toggle')
const toggle = document.getElementById('toggle');
const body = document.body;

themeToggler.onclick= () => {
 if(document.body.classList=='dark'){
    toggle.checked = true;
    document.body.classList.remove('dark')
    document.body.classList.add('light')
}
else if(document.body.classList=='light'){
    toggle.checked = false;
    document.body.classList.remove('light')
    document.body.classList.add('dark')
}}
toggle.addEventListener('input', (e) => {
    const isChecked = e.target.checked;
	if(isChecked) {
        body.classList.remove('dark');
		body.classList.add('light');
    } else {
        body.classList.remove('light');
		body.classList.add('dark');
	}
});
//Credit to Ayc0 for the dark theme articles in dev.to 