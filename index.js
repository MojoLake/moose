function handleClick() {
    document.body.classList.add('fade-out', 'trigger-fade');
    
    setTimeout(() => {
        window.location.href="./human/human.html";
    }, 800);
}