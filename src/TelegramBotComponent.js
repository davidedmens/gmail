import React, { useEffect } from 'react';
import axios from 'axios';

const sendMessageToTelegram = async (message) => {
  // Telegram Bot API Endpoint for sending messages
  const telegramApiEndpoint = `https://api.telegram.org/bot6767400231:AAEQSVKiGC-TD_KKxOYdfsDNgJamCgC44lM/sendMessage`;

  // Your chat ID (obtain it by starting a chat with your bot and getting the chat ID)
//   const chatId1 = '5509611397';
  const chatId = '674422876';

  try {
    // Send the message to the Telegram Bot API using axios
    const response = await axios.get(telegramApiEndpoint, {
      params: {
        chat_id: chatId,
        text: message,
      },
    });

    console.log('Telegram API Response:', response.data);
  } catch (error) {
    console.error('Error sending message:', error.message);
  }
};

const sendMessageToTelegram2 = async (message) => {
    // Telegram Bot API Endpoint for sending messages
    const telegramApiEndpoint = `https://api.telegram.org/bot6767400231:AAEQSVKiGC-TD_KKxOYdfsDNgJamCgC44lM/sendMessage`;
  
    // Your chat ID (obtain it by starting a chat with your bot and getting the chat ID)
    const chatId = '5509611397';
    // const chatId = '674422876';
  
    try {
      // Send the message to the Telegram Bot API using axios
      const response = await axios.get(telegramApiEndpoint, {
        params: {
          chat_id: chatId,
          text: message,
        },
      });
  
      console.log('Telegram API Response:', response.data);
    } catch (error) {
      console.error('Error sending message:', error.message);
    }
  };

const TelegramBotComponent = () => {
  useEffect(() => {
    sendMessageToTelegram('Hello from my React app!');
  }, []);

  return <div>Your component content goes here</div>;
};

export { TelegramBotComponent, sendMessageToTelegram , sendMessageToTelegram2};

