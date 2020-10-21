export default {
    zh: {
        scene: {
            data_update: {
                start: "為了使漫遊器正常運行，您需要輸入組。\n",
                enter_group: "輸入您的群組。",
                success: "恭喜你！\n現在，您可以充分使用該機器人了。",
                end: "為您的日程安排寫“今天”或“明天”。"
            }
        },
        button: {
            today: "今天",
            tomorrow: "明天",
            after_tomorrow: "後天",
            detail: "更多細節",
            week: "一個星期",
            other: "其他",
            call_admins: "通話管理",
            reference: "機器人幫助",
            ads: "幫助寫作作品",
            prev: "返回時間表",
            see: "看",
            reset_data: "重置數據",
            unsubscribe: "退訂新聞",
            subscribe: "訂閱新聞",
            start: "開始",
            game: "玩"
        },
        ads: "緊急協助學生撰寫論文。\n\n" +
            "Zaochnik工作訂購流程。 很簡單 之後，您的私人助理將找到合適的專家，控制任務按時完成，並在付款後將工作轉移給您\n\n" +
            "您將能夠一天24小時跟踪任務的進度。 免費調整已完成的工作\n\n" +
            "服務的優勢在於公司與客戶之間存在正式協議。 這是對您所承擔義務的認真態度的保證，您的訂單將高質量，及時地完成。\n\n" +
            "查看價格 -> https://vk.cc/aAOc4w",
        call_admins: {
            caused: "政府急於提供幫助！\n" +
                "請期待",
            error: "抱歉，發生錯誤，郵件未送達。\n" +
                "請稍後再試"
        },
        newsletter: {
            subscribed: "您已經成功訂閱了機器人新聞。",
            unsubscribed: "您已成功取消訂閱機器人新聞。"
        },
        actual: "直接在VKontakte上的個人消息中獲取當前時間表！",
        timetable: {
            start: "⭕ 搜索時間表 ⭕",
            end: "⭕ 日程結束 ⭕",
            discipline: "學科：",
            teacher: "老師：",
            num: "對：不。",
            cabinet: "內閣。"
        },
        other: (context) => {
            let template = "其他可能性：\n\n"

            template += "📌 需要您的機器人幫助嗎？\n" +
                "單擊“關於機器人的幫助”，將打開有關該機器人，其命令和功能的說明的文章。 該幫助還包含一些常見問題的答案。\n\n"

            template += "🆘 有問題嗎？ 還是您想為機器人提出一個好主意？\n" +
                "單擊“呼叫管理”，我們將為您答复。\n\n"

            template += "⛔ 輸入數據時您是否犯了錯誤？ 想換組\n" +
                "點擊“重置數據”。\n\n"

            if (context.user.subscribe.param) {
                template += "🚀 不想再了解所有機器人新聞了嗎？\n" +
                    "點擊“退訂新聞”按鈕\n\n"
            } else {
                template += "🚀 您想知道所有機器人新聞嗎？\n" +
                    "單擊“訂閱新聞”按鈕，第一個了解該組的新聞和機器人更新。\n\n"
            }
            return template
        },
        not_found: "未找到",
        spam: "⚠ 我們警告您。 ⚠ \n\n" +
            "他們可以阻止垃圾郵件。\n" +
            "重複相同的請求之前，請確保是否需要，因為相同請求的答案不會改變\n\n" +
            "如果漫遊器未向您發送計劃，請檢查數據的正確性。 要更改數據-寫入“開始”。\n\n" +
            "如果您確定一切正確，並且網站上有要求的日程安排，請寫信給我們的主管部門，我們將盡力為您提供幫助"
    },
    name: "Китаиский"
}