cd /d %~dp0
REM start the server
start cmd /k "node index.mjs"
REM wait for it to listen
timeout 5
REM make our request
curl -X POST http://localhost:3000/yumdocs -H 'Content-Type: application/json' -d '{"field":"Anything you see fit"}'