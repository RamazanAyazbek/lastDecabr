var arrLang={
    'kaz':{
        'home':"Негізгі",
        "profile": "Жеке Профиль",
        "message":"Глобусь", 
        "topics": "Тақырыптық тесттер",
        "admin":"Админ",
        "logout":"Шығу",
        "signIn":"Кіру",
        "signUp":"Тіркелу",
        "dateago":"Бірнеше күн бұрын",
        "zaiavka": "Сайтқа тіркелу",
        "profileupdate":"Профильді өзгерту",
        "username":"Аты",
        "entername":"Енгізу",
        "description":"Ақпарат",
        "password":"Жаңа құпия сөз",
        "btn_update":"Жаңарту",
    },
    "ru":{
      'home':"Главная",
      "profile": "Личный Профиль",
      "message":"Глобусь", 
      "topics": "Тест",
      "admin":"Админ",
      "logout":"Выйти",
      "signIn":"Войти",
      "signUp":"Регистрация",
      "dateago":"Несколько дней назад",
      "zaiavka": "Зарегистрировать",
      "profileupdate":"Обновить профиль",
      "username":"Имя",
      "entername":"Введите",
      "description":"Описание",
      "password":"Новый пароль",
      "btn_update":"Обновить",
    }
  }
  
  
  
  $(function(){
    $('.translate').click(function(){
        var lang=$(this).attr('id');
        $('.lang').each(function(index, item){
            $(this).text(arrLang[lang][$(this).attr('key')]); 
        })
    })
  })