export default {
    ua: {
        scene: {
            data_update: {
                start: "Для нормальної роботи бота Вам потрібно ввести свою групу.\n",
                enter_group: "Введіть Вашу групу.",
                detail: "Необхідно ввести свою групу в точності як зазначено на сайті наприклад \"407\", \"102-тэоэ\".\n\nЯкщо група буде введена не вірно, бот не зможе знайти Ваше розклад, але ви можете запросто ввести свій дані заново - написавши \"Почати\"n\nЯк правильно:\n✔ 107\n✔ 10\n✔ 201-3\n✔ 517з\n\nЯк НЕ правильно:\n❌ \"107\"\n❌ группа 201-3",
                success: "Вітаємо!\nТепер Ви можете повноцінно користуватися ботом.",
                end: "Напишіть \"Сегодня\" або \"Завтра\", що б дізнатися свій розклад."
            }
        },
        button: {
            today: "Сьогодні",
            tomorrow: "Завтра",
            after_tomorrow: "Післязавтра",
            detail: "Детальніше",
            week: "На тиждень",
            other: "Iнше",
            call_admins: "Викликати адміністрацію",
            reference: "Довідка по боту",
            ads: "Допомога в написанні робіт",
            prev: "Повернуться до розкладу",
            see: "Подивитися",
            reset_data: "Скинути дані",
            unsubscribe: "Відмовитися від новин",
            subscribe: "Підписатись на новини",
            start: "Почати"
        },
        ads: "Термінова допомога студентам у написанні робіт.\n\n" +
            "Процес замовлення роботи Zaochnik. Досить простий. Після ваш особистий помічник знайде відповідного експерта, проконтролює, щоб завдання було виконано в строк і після оплати передасть роботу вамn\n" +
            "Ви зможете відслідковувати процес виконання завдання 24 години на добу. Коригування в готову роботу вносяться безкоштовно\n\n" +
            "Перевага сервісу - наявність офіційного договору між компанією і клієнтом. Це гарантія серйозного ставлення до своїх зобов'язань, і ваше замовлення буде виконано якісно і в строк\n\n" +
            "Подивитися ціни -> https://vk.cc/aAOc4w",
        call_admins: {
            caused: "Адміністрація поспішає на допомогу!\n" +
                "Будь ласка чекайте",
            error: "На жаль сталася помилка і повідомлення не було доставлено.\n" +
                "Спробуйте повторити запит трохи пізніше"
        },
        newsletter: {
            subscribed: "Ви успішно підписалися на новини бота.",
            unsubscribed: "Ви успішно відписалися від новин бота."
        },
        actual: "Отримуйте актуальний розклад прямо в особисті повідомлення ВКонтакте!",
        timetable: {
            start: "⭕ Йде пошук розкладу ⭕",
            end: "⭕ Розклад закінчилося ⭕",
            discipline: "Дисципліна: ",
            teacher: "Викладач: ",
            num: "Пара: №",
            cabinet: "кабінет."
        },
        other: (context) => {
            let template = "Інші можливості:\n\n"

            template += "📌 Потрібна довідка по боту?\n" +
                "Натисніть \"Довідка по боту\" і відкриється стаття з описом бота, його команд і можливостей. У довідці також містяться відповіді на популярні питання.\n\n"

            template += "🆘 Виникли проблеми? Або Ви хочете запропонувати хорошу ідею для бота? \n" +
                "Натисніть \"Викликати адміністрацію\" і ми Вам відповімо.\n\n"

            template += "⛔ Помилилися при введенні даних? Хочете змінити групу\n" +
                "Натисніть \"Скинути дані\".\n\n"

            if (context.user.subscribe.param) {
                template += "🚀 Більше не хочете бути викорис всіх новин бота?\n" +
                    "Натисніть на кнопку «Відмінити від новин\"\n\n"
            } else {
                template += "🚀 Хочете бути викорис всіх новин бота?\n" +
                    "Натисніть на кнопку \"Підписатися на новини\" та дізнавайтеся першими про новини групи і оновлення бота.\n\n"
            }
            return template
        },
        not_found: "Не знайдено",
        spam: "⚠ Попереджаємо. ⚠ \n\n" +
            "За спам можуть видати блокування.\n" +
            "Перш ніж повторювати той самий запит переконайтеся, чи потрібно Вам це, адже відповідь на той же запит не зміниться\n\n" +
            "Якщо бот не надсилає Вам розклад, перевірте коректність Ваших даних. Щоб поміняти дані - напишіть \"Почати\".\n\n" +
            "Якщо ви впевнені, що все вірно і на сайті присутня розклад на запитуваний день, напишіть нашої адміністрації, ми постараємося Вам допомогти"
    },
    name: "Украинский"
}
