import * as builder from "botbuilder";
import { ISettings, SettingsStore } from "../stores";

export const UnignoreUserLuisName = "UnignoreUser";
export const UnignoreUserialog: builder.IDialogWaterfallStep[] = [
  async function sendIgnoreMessage(session, args, next) {
    var message = new builder.Message();
    message.text("I'll send you again if there are any missing tags");

    const userId = session.message.user.id;
    const channel = session.message.source;
    const result = await SettingsStore.GetSettingsById(userId, channel);
    if (result.error) {
      session.send("Something went wrong, please try again later.");
    } else {
      const newSettings: ISettings = {
        botMutedUntill: null,
        channelId: result.data.channelId,
        userId: result.data.userId
      };

      await SettingsStore.SaveSettingsById(userId, newSettings);
      session.send(message);
    }
  }
];
