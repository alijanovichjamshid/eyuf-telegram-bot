const express = require("express");
const { Telegraf, Markup } = require("telegraf");

const BOT_TOKEN = process.env.BOT_TOKEN;
const MINI_APP_URL = process.env.MINI_APP_URL || "https://incredible-dasik-2baee7.netlify.app";
const PORT = process.env.PORT || 10000;

if (!BOT_TOKEN) {
  console.error("ERROR: BOT_TOKEN is missing. Add BOT_TOKEN in Render Environment Variables.");
  process.exit(1);
}

const app = express();

app.get("/", (req, res) => {
  res.send("EYUF Telegram bot is running");
});

app.listen(PORT, () => {
  console.log(`Health server running on port ${PORT}`);
});

const bot = new Telegraf(BOT_TOKEN);

bot.start(async (ctx) => {
  await ctx.reply(
    "Stajirovkalar haqida ma’lumot olish uchun quyidagi tugmani bosing.",
    Markup.inlineKeyboard([
      Markup.button.webApp("Stajirovkalar haqida", MINI_APP_URL)
    ])
  );
});

bot.catch((err, ctx) => {
  console.error(`Bot error for update ${ctx?.update?.update_id}:`, err);
});

bot.launch();

console.log("EYUF Telegram bot started");

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
