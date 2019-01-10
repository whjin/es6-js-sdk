import formCheck from '../common/formCheck';

export default () => {
    const btn = document.getElementById("submit");
    const input = document.getElementById("input");
    const check = formCheck(document.getElementById("form"));
    btn.onclick = () => {
        check();
        alert("事件绑定成功");
    };

    input.oninput = () => {
        check();
    }
}