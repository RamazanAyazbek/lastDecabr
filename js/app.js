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