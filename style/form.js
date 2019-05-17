
var dark = document.createElement('div');


function openForm()
{
    dark.id = 'shadow';
    document.body.appendChild(dark);
    var form = document.getElementById("form");
    form.style.display = 'block';

    dark.onclick = function () {  // при клике на слой затемнения все исчезнет
        closeForm();
    };
}

function closeForm()
{
    document.getElementById('namePlace').innerHTML='';
    document.getElementById('phonePlace').innerHTML='';


    document.getElementById('name').value='';
    document.getElementById('phone').value='';
    document.getElementById('comment').value='';

    document.getElementById("phone").style.border = '';
    document.getElementById("name").style.border = '';

    dark.parentNode.removeChild(dark); // удаляем затемнение
    document.getElementById("form").style.display = 'none';
    document.getElementById("report").style.display = 'none';

}


function change(text)
{
    if(text === 'name') {

        var namePlace = document.getElementById("namePlace");

        var name = document.getElementById("name").value;
        var lenght = 3;
        if (name.trim().length < 3) {
            namePlace.innerHTML = '| Осталось ' + (lenght - name.length) + ' символа';
            namePlace.style.color = 'red';
            document.getElementById("name").style.border = '1px solid red';

        } else{
            namePlace.style.color = 'green';
            namePlace.innerHTML = ' | Отлично!';
            document.getElementById("name").style.border = '1px solid green';
        }
    }

    if(text === 'phone')
    {
        var phonePlace = document.getElementById("phonePlace");

        var number = document.getElementById("phone").value;
        var lenghtNumber = 11;
        if (number.trim().length < 11) {
            phonePlace.innerHTML = ' | Минимум ' + (lenghtNumber - number.length) + ' символа';
            phonePlace.style.color = 'red';
            document.getElementById("phone").style.border = '1px solid red';
        } else {
            phonePlace.style.color = 'green';
            phonePlace.innerHTML = ' | Отлично!';
            document.getElementById("phone").style.border = '1px solid green';
        }
    }
}

function connect(name, phone, comment)
{
    var conn = getXmlHttp();
    conn.open('GET', 'bdConnect.php?name='+name+'&phone='+phone+'&comment='+comment, true);
    conn.send();
    var report = document.getElementById('report');
    if (conn.status != 200) {
        closeForm();

        report.style.display = 'block';
        dark.id = 'shadow';

        document.body.appendChild(dark);

        dark.onclick = function () {
            dark.parentNode.removeChild(dark);
            report.style.display = 'none';
        };

    } else {
        closeForm();
        report.innerHTML = 'Упс..что-то пошло не так :(';
        dark.id = 'shadow';
        document.body.appendChild(dark);

        dark.onclick = function () {
            dark.parentNode.removeChild(dark);
            report.style.display = 'none';
        };
    }
}

function getXmlHttp()
{
    var xmlHttp;
    try{
       xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
    }catch (e) {
        try {
            xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
        }catch (e) {
            xmlHttp = false;
        }
    }
    if (!xmlHttp && typeof XMLHttpRequest != "undefined"){
        xmlHttp = new XMLHttpRequest();
    }

    return xmlHttp;
}