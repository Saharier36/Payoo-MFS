console.log('machine added')
//machine id -> input value
function getValueFromInout(id){
    const input= document.getElementById(id)
    const value = input.value
    console.log(id, value)
    return value
}