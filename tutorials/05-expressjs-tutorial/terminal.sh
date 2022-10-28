#!/bin/sh
cd "$(dirname "$0")"
# start the server (on macOS)
chmod u+x run_node.command
open run_node.command
# wait for it to listen
sleep 5
# make our request
curl -X POST http://localhost:3000/yumdocs -H 'Content-Type: application/json' -d '{"field":"Anything you see fit"}'
