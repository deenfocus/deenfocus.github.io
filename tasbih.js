let count = 0

function increaseCount(){
    count++;
    document.getElementById("dhikrcounter").textContent = count;
}
function resetCount(){
    count = 0;
    document.getElementById("dhikrcounter").textContent = count
}