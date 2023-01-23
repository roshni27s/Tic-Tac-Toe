function openPlayerConfig()
{
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig()
{
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none'
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
}

function savePlayerConfig(event) 
{
    event.preventDefault(); // prevents page reload
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim(); // name in get
    if (!enteredPlayername)
    {
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return;
    }
}