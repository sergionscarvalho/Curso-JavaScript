const ftp = require("basic-ftp")
const fs = require("fs")
 
example()
 
async function example() {
    const client = new ftp.Client()
    try {
        await client.access({
            host: "ftp.tbfiles.com",
            user: "123123",
            password: "123123",
            secure: false
        })
        console.log(await client.list())
        var a
        await client.download(a, '0asdsad.tif', 0)

        a.once('close', function() { c.end(); });
        stream.pipe(fs.createWriteStream('NNNNNN.tif'));
        /* {
          overwrite: 'all'
          }, function (result) {
              console.log(result);
          });*/

    }
    catch(err) {
        console.log(err)
    }
    client.close()
}