const webpush = require('web-push')
const vapIdKey = {
  publicKey: "BP1cJLW5fHgy1r12GklYJki0Jsc09aFbiSP0bvrm0rubNDd4uPTlswb1vyZ6s59BcXFOOdgTbOmjAGmUjneFr0g",
  privateKey: "0S-EY0o6vofvKjRctg5AApK4PAN-btSdG6WMJP-xlDA"
}
const sub = {
  endpoint : "https://fcm.googleapis.com/fcm/send/eC47psAK9SU:APA91bH2fhdyNkql14CgqBpKqfO0JMTwG9_0TxivX2zMC85RFZOqU5KC1J53TIpIqIqR4YFiwluX47g6zUBFt8_g5Bgvov6wcRkZ29VG8DaHUNU8sbyQFDklnC8nLzNlHKiNjvvSOlKV",
  expirationTime :null,
  keys: {
    auth:  "eoIGI85mk-iYNDKNp1IvFw",
    p256dh: "BC49h5PVqdp6zDZ-qBO9a_nRIRBCWLPm13V2zP-o74gD8uUpBVeo5dWW5D5tyCusUZ3ZlTwdUWRbaYGMWJeSo9k"
  }
}
webpush.setVapidDetails(sub.endpoint, vapIdKey.publicKey, vapIdKey.privateKey);

//backend side
//Step 3: Send notification
const payLoad = {
  notification: {
    data: { url: 'http://www.youtube.com' },
    title: 'push notification',
    vibrate: [100, 50, 100],
  },
};



webpush.sendNotification(sub, JSON.stringify(payLoad));
