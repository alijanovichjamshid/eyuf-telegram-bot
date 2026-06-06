# EYUF Telegram Bot

This bot sends a `/start` message with a button that opens the Telegram Mini App.

## Files

- `bot.js` — bot logic
- `package.json` — dependencies and start command

## Render setup

1. Create a new **Web Service** or **Background Worker** on Render.
2. Upload/connect this project.
3. Set the start command:

```bash
npm start
```

4. Add Environment Variables:

```text
BOT_TOKEN=your Telegram bot token from BotFather
MINI_APP_URL=https://incredible-dasik-2baee7.netlify.app
```

5. Deploy.

When users press `/start`, the bot sends:

```text
Stajirovkalar haqida ma’lumot olish uchun quyidagi tugmani bosing.
```

with the button:

```text
Stajirovkalar haqida
```
