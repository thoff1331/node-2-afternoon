let messages = [];
let id = 0;
let displayName = 'bill';


module.exports = {
 create: (req, res) => {
const { text, time, displayName } = req.body
messages.push({id, text, time, displayName });
id++;

res.status(200).json(messages); 
},

read: (req, res) => {
res.status(200).json(messages);
},
update: (req, res) => {
 const { text }  = req.body
 const updateID = req.params.id  
 const messageIndex = messages.findIndex(messages => messages.id === updateID );
 let message = messages[messageIndex];
 


 message[messageIndex] = {
     id: message.id,
     text: text || message.text,
     time: message.time,
     displayName: displayName.displayName
     
 };
 res.status(200).json(messages);

},
delete: (req, res) => {
    const deleteID = req.params.id
     messageIndex = messages.findIndex(messages => messages.id === deleteID)
    messages.splice(messageIndex, 1);
    res.status(200).json(messages);

}
};





