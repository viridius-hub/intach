export default {
    ru: {
        scene: {
            data_update: {
                start: "Для нормальной работы бота Вам нужно ввести свою группу.\n",
                enter_group: "Введите Вашу группу.",
                detail: "Необходимо ввести свою группу в точности как указано на сайте к примеру \"407\", \"102-тэоэ\".\n\n" +
                    "Если группа будет введена не верно, бот не сможет найти Ваше расписание, но вы можете запросто ввести свой данные заново - написав \"Начать\"\n\n" +
                    "Как правильно:\n✔ 107\n✔ 10\n✔ 201-3\n✔ 517з\n\n" +
                    "Как НЕ правильно:\n❌ \"107\"\n❌ группа 201-3",
                success: "Поздравляем!\n" +
                    "Теперь Вы можете полноценно пользоваться ботом.",
                end: "Напишите \"Сегодня\" или \"Завтра\", что бы узнать своё расписание."
            }
        },
        button: {
            today: "Сегодня",
            tomorrow: "Завтра",
            after_tomorrow: "Послезавтра",
            detail: "Подробнее",
            week: "На неделю",
            other: "Другое",
            call_admins: "Вызвать администрацию",
            reference: "Справка по боту",
            ads: "Помощь в написании работ",
            prev: "Вернутся к расписанию",
            see: "Посмотреть",
            reset_data: "Сбросить данные",
            unsubscribe: "Отписаться от новостей",
            subscribe: "Подписаться на новости",
            start: "Начать"
        },
        ads: "Срочная помощь студентам в написании работ.\n\n" +
            "Процесс заказа работы Zaochnik. Довольно прост. После ваш личный помощник найдет подходящего эксперта,проконтролирует, чтобы задание было выполнено в срок и после оплаты передаст работу вам\n\n" +
            "Вы сможете отслеживать процесс выполнения задания 24 часа в сутки. Корректировки в готовую работу вносятся бесплатно\n\n" +
            "Преимущество сервиса - наличие официального договора между компанией и клиентом. Это гарантия серьёзного отношения к своим обязательствам, и ваш заказ будет выполнен качественно и в срок\n\n" +
            "Посмотреть цены -> https://vk.cc/aAOc4w",
        call_admins: {
            caused: "Администрация спешит на помощь!\n" +
                "Пожалуйста ожидайте",
            error: "К сожалению произошла ошибка и сообщение не было доставлено.\n" +
                "Попробуйте повторить запрос немного позже"
        },
        newsletter: {
            subscribed: "Вы успешно подписались на новости бота.",
            unsubscribed: "Вы успешно отписались от новостей бота."
        },
        actual: "Получайте актуальное расписание прямо в личные сообщение ВКонтакте!",
        timetable: {
            start: "⭕ Идёт поиск расписания ⭕",
            end: "⭕ Расписание закончилось ⭕",
            discipline: "Дисциплина: ",
            teacher: "Преподаватель: ",
            num: "Пара: №",
            cabinet: "кб."
        },
        other: (context) => {
            let template = "Другие возможности:\n\n"

            template += "📌 Нужна справка по боту?\n" +
                "Нажмите \"Справка по боту\" и откроется статья с описанием бота, его команд и возможностей. В справке так же содержатся ответы на популярные вопросы.\n\n"

            template += "🆘 Возникли проблемы? Или Вы хотите предложить хорошую идею для бота? \n" +
                "Нажмите \"Вызвать администрацию\" и мы Вам ответим.\n\n"

            template += "⛔ Ошиблись при вводе данных? Хотите сменить группу\n" +
                "Нажмите \"Сбросить данные\".\n\n"

            if (context.user.subscribe.param) {
                template += "🚀 Больше не хотите быть вкурсе всех новостей бота?\n" +
                    "Нажмите на кнопку \"Отписаться от новостей\"\n\n"
            } else {
                template += "🚀 Хотите быть в курсе всех новостей бота?\n" +
                    "Нажмите на кнопку \"Подписаться на новости\" и узнавайте первыми о новостях группы и обновлениях бота.\n\n"
            }
            return template
        },
        not_found: "Не найдено",
        spam: "⚠ Предупреждаем. ⚠ \n\n" +
            "За спам могут выдать блокировку.\n" +
            "Прежде чем повторять тот же запрос убедитесь, нужно ли Вам это, ведь ответ на тот же запрос не изменится\n\n" +
            "Если бот не отправляет Вам расписание, проверьте корректность Ваших данных. Чтобы поменять данные - напишите \"Начать\".\n\n" +
            "Если вы уверены, что всё верно и на сайте присутствует расписание на запрашиваемый день, напишите нашей администрации, мы постараемся Вам помочь"
    },
    name: "Русский"
}
