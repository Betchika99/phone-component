[![Build Status](https://travis-ci.org/Betchika99/phone-component.svg?branch=master)](https://travis-ci.org/Betchika99/phone-component)

# Phone Component

Компонент для работы с телефонным номером, который задается входной маской.
![Image alt](https://github.com/{betchika99}/{phone-component}/raw/{master}/{src/img}/maket.png)

## Входные данные

```interface Props {
	/**
	 * Маска инпута. Значения:
	 * "I" - одиночный инпут для ввода одной цифры
	 * "X" - серый блок с символом "X"
	 * "*" - серый блок с символом "●"
	 * <цифра> - серый блок с введенной цифрой
	 * <не цифра> - символ отображается "как есть"
	 */
	mask: string;
}```

Например, ```const mask = '+7(985)0II-**-**';```

## Как использовать

Создать компонент можно двумя способами:

1. Импортировать класс ```NumberGroupComponent``` и создать его экземпляр. Затем отрендерить. Например, 

```const element = new NumberGroupComponent(props);```,

где props - объект, содержащий ключ mask и значение маски

```element.render(parent)```,

где parent - родительский элемент, в который нужно добавить компонент

1. Импортировать функцию ```create(props,parent)```, которая всё сделает за вас :)

## Стек технологий

**JavaScript, node.js, npm**

Кроме того, добавлены
- Webpack - для сборки компонента 
- ESlint - линтер для создания красивого кода на js
- Babel - для поддержки разных версий js
- Docker - для создания эталонной инфраструктуры для запуска и прогона автотестов
- Storybook - для просмотра всех состояний компонента
- Jest-тесты - для функционального тестирования компонента
- CI/CD - для автоматической публикации пакета в npm при успешном прохождении всех тестов

Так же с выходом новой версии происходит новая публикация пакета npm ([ссылочка](https://www.npmjs.com/package/phone-component))

## Запуск тестов

Запустить тесты можно командой ```npm run test```

## Запуск докера

- ```docker build -t phone-component .```
- ```docker run -d --rm --name phone-component -p 3001:3001 phone-component```
