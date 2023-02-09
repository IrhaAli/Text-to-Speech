const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: 'PiceaIrha',
    password: 'ivwjmc96ljs8420sl33u1brux0jvhi'
  },
  channels: [
    'mahum97'
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
  if (self) {
    return;
  } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();



  // If the command is known, let's execute it
  if (commandName === '!dice') {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`); 
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
}

// Function called when the "dice" command is issued
function rollDice() {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}


const ttsTest = function() {
  let message = new SpeechSynthesisUtterance();
  message.text = 'Hello, world!';
  message.lang = 'en-US';
  window.speechSynthesis.speak(message);
};

const cancel = function() {
  window.speechSynthesis.cancel();
};

function component() {
  const element = document.createElement('div');
  return element;
}

document.body.appendChild(element);