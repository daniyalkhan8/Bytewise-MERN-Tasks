const fsPromises = require('fs').promises;
const path = require('path');

const fileOPS = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'Files', 'starter.txt'), 'utf-8');
        await fsPromises.unlink(path.join(__dirname, 'Files', 'starter.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'Files', 'newReply.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'Files', 'newReply.txt'), '\nNice to meet you.');
        await fsPromises.rename(path.join(__dirname, 'Files', 'newReply.txt'), path.join(__dirname, 'Files', 'conversation.txt'));
        const newRead = await fsPromises.readFile(path.join(__dirname, 'Files', 'conversation.txt'), 'utf-8');
        console.log(newRead);
    } catch (error) {
        console.error(err);
    }
}

fileOPS();

// fsPromises.readFile(path.join(__dirname, 'Files', 'starter.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })

// fs.writeFile(path.join(__dirname, 'Files', 'reply.txt'), 'Nice To meet you', (err) => {
//     if (err) throw err;
//     console.log('Operation Complete');

//     fs.appendFile(path.join(__dirname, 'Files', 'reply.txt'), '\nYes it is.', (err) => {
//         if (err) throw err;
//         console.log('Append Complete');
//     })

//     fs.rename(path.join(__dirname, 'Files', 'reply.txt'), path.join(__dirname, 'Files', 'newReply.txt'), (err) => {
//         if (err) throw err;
//         console.log('Rename Complete');
//     })
// })

// Exit on uncaught errors
process.on('uncaughtException', err => {
    console.log(`There was an uncaught error: ${err}`);
    process.exit(1);
})