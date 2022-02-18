function calculator(newValue) {
    document.getElementById('input-field').value += newValue;
}
function allClear() {
    document.getElementById('input-field').value = '';
}
function deleteEntry() {
    const getValue = document.getElementById('input-field').value;
    const setValue = getValue.substring(0, getValue.length - 1);
    document.getElementById('input-field').value = setValue;
}
function getResult() {
    const inputValue = document.getElementById('input-field').value;
    const result = eval(inputValue);
    document.getElementById('input-field').value = result;

}