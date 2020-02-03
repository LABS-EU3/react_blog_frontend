import Pusher from 'pusher-js';

export const pusher = new Pusher("9acd63d72b84f0f71b93", {
    cluster: 'eu',
    encrypted: true
});

export const notifications_channel = pusher.subscribe('notifications-channel');

// listen for a new notification
// appId: '939898',
//   key: '9acd63d72b84f0f71b93',
//   secret: '28603097d78537afc1cf',
//   cluster: 'eu',
//   encrypted: true