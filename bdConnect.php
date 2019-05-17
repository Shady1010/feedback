<?php
/**
 * Created by PhpStorm.
 * User: shady
 * Date: 17.05.2019
 * Time: 2:47
 */

class bdConnect
{
 private $host = 'mysql:host=localhost';
 private $bd = 'dbname=message';
 private $name = 'root';


    function __construct()
    {
        var_dump($_GET['name']);
        try {
            if(isset($_GET['name'], $_GET['phone'])) {
                $bd = new PDO("$this->host; $this->bd", $this->name);
                $sth = $bd->prepare("INSERT INTO feedback (name, phone, comment) VALUES (?, ?, ?)");
                $sth->execute([0 => $_GET['name'], 1=>$_GET['phone'], 2=>$_GET['comment'] ]);

                $sth = null;
                $bd = null;
            }else{
                die('Некоторые данные отсутствуют!');
            }
        }catch (PDOException $e){
            die('Не удалось подключиться к базе данных');
        }
    }
}

new bdConnect();