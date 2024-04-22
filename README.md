# nextJS
Next.js — фреймворк на JavaScript, использующий React для построения Server Side Render-приложений (SSR) и статически-генерируемых сайтов. Наставник Хекслета Глеб Андреев рассказывает, кто создал Next.js, зачем его использовать и в чем его плюсы и минусы перед чистым React.
История Next.js

Фреймворк Next.js создан относительно недавно — в 2016 году внутри компании Vercel (ранее Zeit). Основная его задача — работа с Server Side Render-приложениями, написанными на React. Ее можно выполнять и самим с помощью ReactDOMServer и условного Express.js, но все-таки это не самый оптимальный способ, потому что разработчик в любом случае пишет много boilerplate-кода. Next.js выводит разработку SSR-приложений на следующий уровень и разбавляет ее различными оптимизациями.

В целом, SSR-приложения можно писать и самому, просто Next.js — более оптимизированный под такие задачи (Static Generation и так далее) фреймворк.

Работа Next.js следует шести основным принципам:

    Работа без настройки. Использование файловой системы в качестве API
    Только JavaScript. Все является функциями
    Автоматический Server Side Rendering и code-splitting
    Механизм получения данных определяется разработчиком
    Предзагрузка для увеличения производительности
    Простой деплой и развертывание

Спустя годы проект оброс фичами, в его разработку и оптимизацию внес вклад сам Google, а технологией пользуются крупные компании вроде Uber, Netflix, GitHub и других. И даже в самой документации React его включили как один из тул-чейнов для разработки.
