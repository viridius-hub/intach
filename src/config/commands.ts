import bot from "../services/bot";
import {Keyboard} from "vk-io";
import {randomInt} from "../utils/random";
import Luxon from "../classes/Luxon";
import {getTable} from "../classes/Timetable";
import {getAttachmentDayWeek} from "../utils/getAttachmentDayWeek";
import {templates} from "./templates";
import {keyboards} from "./keyboards";
import {peer} from "../services/peer";
import {admin} from "../services/admin";

/**
 * Команда ВЫЗОВА РЕКЛАМЫ
 * Отправляет пользователю рекламу
 * @beta
 **/
bot.command("users-admin", ["!users"], async (context) => {
    const isAdmin = await admin.isAdmin(context)
    if(isAdmin){
        const users = await peer.getUsers()
        return context.send({
            message: users.map((user) => {
                return `@id${user["peerId"]} - ${user["param"]}`
            })
        })
    }
})


/**
 * Команда ВЫЗОВА РЕКЛАМЫ
 * Отправляет пользователю рекламу
 * @beta
 **/
bot.command("ads", ["/ads"], async (context) => {
    return context.reply({
        message: templates.adsTemplate.zaochnik,
        attachment: "photo-147858640_457239306",
        keyboard: Keyboard.builder().urlButton({
            label: "Посмотреть",
            url: "https://vk.cc/aAOc4w"
        }).inline()
    })
})

/**
 * Команда ВОЗВРАТА НАЗАД
 * Отправляет клавиатуру расписания
 * @beta
 **/
bot.command("main", ["назад", "вернутся"], async (context) => {
    context.setActivity()
    return context.reply({
        message: "Получайте актуальное расписание прямо в личные сообщение ВКонтакте!",
        keyboard: keyboards.mainKeyboard
    })
})

/**
 * Команда НАЧАТЬ
 * Обновление или добавление личных данных пользователя
 * @beta
 **/
bot.command("start", ["начать", "start"], (context) => context.scene.enter("start-scene"))

/**
 * Команда получения расписания за СЕГОДНЯ.
 * @beta
 **/
bot.command('today', ["сегодня", "today"], async (context) => {
    await context.setActivity()
    const date = new Luxon()
    return context.send({
        message: await templates.tableTemplate(context, date),
        attachment: getAttachmentDayWeek(date.week()),
        keyboard: Keyboard.builder()
            .textButton({
                label: "Завтра",
                payload: {
                    command: "tomorrow"
                },
                color: Keyboard.POSITIVE_COLOR
            }).textButton({
                label: "Послезавтра",
                payload: {
                    command: "after-tomorrow"
                },
                color: Keyboard.NEGATIVE_COLOR
            })
            .inline()
    })
})

/**
 * Команда получения расписания на ЗАВТРА.
 * @beta
 **/
bot.command('tomorrow', ["завтра", "tomorrow"], async (context) => {
    await context.setActivity()
    const date = new Luxon().add(24)
    return context.send({
        message: await templates.tableTemplate(context, date),
        attachment: getAttachmentDayWeek(date.week()),
        keyboard: Keyboard.builder()
            .textButton({
                label: "Сегодня",
                payload: {
                    command: "today"
                },
                color: Keyboard.PRIMARY_COLOR
            }).textButton({
                label: "Послезавтра",
                payload: {
                    command: "after-tomorrow"
                },
                color: Keyboard.NEGATIVE_COLOR
            })
            .inline()
    })
})

/**
 * Команда получения расписания на Послезавтра.
 * @beta
 **/
bot.command('after-tomorrow', ["послезавтра", "after-tomorrow"], async (context) => {
    await context.setActivity()

    const date = new Luxon().add(48)
    return context.send({
        message: await templates.tableTemplate(context, date),
        attachment: getAttachmentDayWeek(date.week()),
        keyboard: Keyboard.builder()
            .textButton({
                label: "Сегодня",
                payload: {
                    command: "today"
                },
                color: Keyboard.PRIMARY_COLOR
            }).textButton({
                label: "Завтра",
                payload: {
                    command: "tomorrow"
                },
                color: Keyboard.POSITIVE_COLOR
            })
            .inline()
    })
})

/**
 * Команда получения расписания на НЕДЕЛЮ.
 * @beta
 **/
bot.command('week', ["На неделю", "week"], async (context) => {
    await context.setActivity()
    let time = 0
    for (let i = 0; i < 7; i++) {
        const date = new Luxon().add(time)

        if (date.week() !== 7) {
            const data = await getTable(context, date)
            if (data["count"] > 0) {

                let template = `📅 ${date.pin()}, ${context.user.peer.param.toUpperCase()}\n\n`
                template += templates.disciplineTemplate(data)

                await context.send({
                    message: template,
                    attachment: getAttachmentDayWeek(date.week()),
                })
            }
        }
        time += 24
    }

    return context.send("⭕ Расписание закончилось ⭕")
})

/**
 * Команда подписки на новости.
 * @beta
 **/
bot.command('subscribe-news', ["Подписаться на новости"], async (context) => {
    await context.setActivity()
    await peer.setSubscribe(context, true)
    return context.reply({message: templates.newsletterTemplate.subscribed, keyboard: keyboards.mainKeyboard})
})

/**
 * Команда отписки от новостей.
 * @beta
 **/
bot.command('unsubscribe-news', ["Отписаться от новостей"], async (context) => {
    await context.setActivity()
    await peer.setSubscribe(context, false)
    return context.reply({message: templates.newsletterTemplate.unsubscribed, keyboard: keyboards.mainKeyboard})
})

/**
 * Команда вызова администраторов.
 * @beta
 **/
bot.command('call', ["Вызвать администрацию"], async (context) => {
    await context.setActivity()

    const admins = await admin.getAdmins()
    if (admins) {
        await bot.api.messages.send({
            user_ids: admins.map(i => i["id"]),
            random_id: randomInt(0, 31),
            message: `@id${context.peerId} - вызвал админа.`,
            keyboard: Keyboard.builder().urlButton({
                label: "Открыть чат",
                url: `https://vk.com/gim${process.env.GROUP_ID}?sel=${context.peerId}`
            }).inline()
        })
        return context.reply(templates.callAdminsTemplate.caused)
    } else {
        return context.reply(templates.callAdminsTemplate.error)
    }
})

/**
 * Команда прочих команд
 * @beta
 **/
bot.command('other', ["другое", "other"], (context) => {
    context.setActivity()
    return context.send({
        message: templates.otherTemplate(context),
        keyboard: keyboards.otherKeyboard(context)
    })
})
