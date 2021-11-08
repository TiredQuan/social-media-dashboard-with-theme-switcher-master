let themeToggler = document.getElementById('theme-toggle')
const toggle = document.getElementById('toggle');
const body = document.body;

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkScheme.matches) {
    toggle.checked = false;
    document.body.classList.remove('light')
    document.body.classList.add('dark')
} else {
    toggle.checked = true;
    document.body.classList.remove('dark')
    document.body.classList.add('light')
}



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