window.onload = () => {
    function clock(){
    const d = new Date()


    let h = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()
    

    document.querySelector('#h').innerText = h
    document.querySelector('#min').innerText = min
    document.querySelector('#sec').innerText = sec
    

    setTimeout(clock, 1)
    }
    clock()
}