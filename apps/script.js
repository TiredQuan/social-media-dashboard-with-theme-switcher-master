let themeToggler = document.getElementById('theme-toggle')
const toggle = document.getElementById('toggle');
const body = document.body;
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
// Get Theme through user preference
if (prefersDarkScheme.matches) {
    toggle.checked = false;
    document.body.classList.remove('light')
    document.body.classList.add('dark')
} else {
    toggle.checked = true;
    document.body.classList.remove('dark')
    document.body.classList.add('light')
}

//Screen reader only toggler (don't know how useful this is but I wanted to do it)
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
//the toggle
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