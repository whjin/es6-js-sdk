export default (container) => {
    const tpl = `<form id="form">
    <input id="input" type="text" name="uname">
    <input type="password" name="password">
    <input id="submit" type="submit" value="登录">
</form>`;
    container.innerHTML = tpl;
}