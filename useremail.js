let data = {
    emailName: 'gmail',
    mailboxes: {
        inbox: [], 
        junk: [],
        sent: [],
        draft: [],    
    },
    contacts: [
        {
        name: 'Google Photos', message: "Get 15% off your next print order"
    },
        {
        name: 'Google Play', message: "Your Google Play order receipt from Mar 19"
    }
]
}
console.log(data.mailboxes);
console.log(data.contacts);
console.log(data.contacts[1].message);

data.mailboxes.draft.push('this is a draft email', '2 this is a draft email');
data.mailboxes.sent.unshift(data.mailboxes.draft.pop());
//console.log(data.mailboxes.draft);
//console.log(data.mailboxes.sent);


