<!DOCTYPE html>
<html>
<head>
    <title>Главная страница</title>
    <link rel="stylesheet" href="style/css.css">
    <script rel="stylesheet" src="style/form.js"></script>

</head>

<body>

<div class="button"><button onclick="openForm()">Обратная связь</button></div>
    <div class="form" id="form">
        <button type="button" class="cancel" form="form_container" onclick="closeForm()"><img src="img/close.png" width="40" height="40"></button>

        <form  method="get" class="form-container" id="form_container">
            <label for="name">Ваше имя*</label> <span style="color:red" id="namePlace"></span>
            <input type="text" placeholder="Ваше имя" name="name"  id="name"  onkeyup="change('name')" required>

            <label for="phone">Ваш номер телефона*</label> <span style="color:red" id="phonePlace"></span>
            <input type="tel" placeholder="Номер телефона" maxlength="11" name="phone" id="phone"  onkeyup="change('phone')" required>

            <label for="comment">Комментарий к заявке (не обязательно)</label><br>
            <input type="text" placeholder="Комментраий" name="comment" id="comment">

            <button type="reset" class="btn" id="reset" ><img src="img/reset.png" width="12" height="12" style="padding-right:5px; margin-bottom: 5px; ">ОЧИСТИТЬ</button>
            <button type="submit" id="sumbit" onclick="connect(document.getElementById('name').value, document.getElementById('phone').value, document.getElementById('comment').value)" class="btn-sumbit">ОТПРАВИТЬ</button>

            <br><br>
        </form>
    </div>

    <div id="report" class="report">
        <button type="button" class="cancel" onclick="closeForm() "><img src="img/close.png" width="28" height="28"></button>
        <span>Ваше сообщение доставлено!</span>

    </div>

</body>

<footer>

</footer>

</html>