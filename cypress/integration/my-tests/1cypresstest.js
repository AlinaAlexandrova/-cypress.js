 describe('автотесты для формы логина и пароля на qastudio', function () {
   it('позитивная проверка на ввод верного логина и пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get("#mail").type('german@dolnikov.ru');
         cy.get("#pass").type('iLoveqastudio1');
         cy.get("#loginButton").click();
         cy.contains('Авторизация прошла успешно');
         cy.get("#exitMessageButton");
     })
 })

 describe('автотесты для формы логина и пароля на qastudio', function () {
    it('негативная проверка на ввод верного логина и неверного пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get("#mail").type('german@dolnikov.ru');
         cy.get("#pass").type('iLoveqastudio11');
         cy.get("#loginButton").click();
         cy.contains('Такого логина или пароля нет');
         cy.get("#exitMessageButton");
      })

 })

 describe('автотесты для формы логина и пароля на qastudio', function () {
    it('негативная проверка на ввод неверного логина и верного пароля', function () {
           cy.visit('https://login.qa.studio/');
         cy.get("#mail").type('korol@artur.ru');
         cy.get("#pass").type('iLoveqastudio1');
         cy.get("#loginButton").click();
         cy.contains('Такого логина или пароля нет');
         cy.get("#exitMessageButton");
     })
 })

 describe('автотесты для формы логина и пароля на qastudio', function () {
    it('проверка логики восстановления пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get("#forgotEmailButton").click();
         cy.get("#mailForgot").type('korol@artur.ru');
         cy.get("#restoreEmailButton").click();
         cy.contains('Успешно отправили пароль на e-mail');
         cy.get("#exitMessageButton");
     })
 })

 describe('автотесты для формы логина и пароля на staya.dog', function () {
    it('позитивная проверка на ввод верного логина и пароля', function () {
        cy.visit('https://staya.dog/');
        cy.get(".header-bottom__right--link").click();
        cy.get(".auth-form > form > [type='email']").type('adelin.aleksandrova@ya.ru');
        cy.get(".auth-form > form > [type='password']").type('Makaka1makaka2');
        cy.get(".auth-form__submit > .s-button__content").click();
        cy.contains('Мои заказы');
      
   })
})
describe('автотесты для формы логина и пароля на staya.dog', function () {
    it('выход из личного кабинета', function () {
        cy.visit('https://staya.dog/');
        cy.get(".header-bottom__right--link").click();
        cy.get("button.profile__nav-link").click();
        cy.get(".box__button_ok > .s-button__content").click();
        cy.contains('Амуниция staya.Сделано с собаками');
        
   })
})


describe('автотесты для формы логина и пароля на staya.dog', function () {
   it('негативная проверка на ввод верного логина и неверного пароля', function () {
        cy.visit('https://staya.dog/');
        cy.get(".header-bottom__right--link").click();
        cy.get(".auth-form > form > [type='email']").type('adelin.aleksandrova@ya.ru');
        cy.get(".auth-form > form > [type='password']").type('Makaka2makaka1');
        cy.get(".auth-form__submit > .s-button__content").click();
        cy.contains('Невозможно войти с предоставленными учетными данными');
        
    })
})