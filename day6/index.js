const http = require('http');

const server = http.createServer((req, res) => {
    
    if (req.url === "/favicon.ico") return;
     if (req.url === "/login" && req.method === "POST") {
        let body = "";
         req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        });
          req.on("end", async () => {
            try {
                const userData = JSON.parse(body);
                
                const response = await userLogin(userData, "./users.json");

                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(response));
            } catch (err) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Invalid JSON or Login Failed" }));
            }
        });
    }
});

server.listen(5500, () => {
    console.log("Server is running at http://localhost:5500");
});