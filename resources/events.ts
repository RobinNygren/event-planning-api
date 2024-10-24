// let events = [];

// module.exports = (server: any) => {

// server.get("/events", (req, res) => {
//     if (events.length != 0) {
//       res.send(events);
//     } else {
//       return res.status(404).send("No events to be listed");
//     }
//   });

//   server.get("/events/:id", (req, res) => {
//     const id = Number(req.params.id);
//     if (events[id]) {
//       res.status(200);
//       res.send(events[id]);
//     } else {
//       res.status(404);
//       res.send("Event not found");
//       res.end();
//     }
//   });
//   server.post("/events", (req, res) => {
//     events.push(req.body);
//     if (!req.body.name.length) {
//       throw new Error("Name is required");
//     }
//     res.status(201);
//     res.send(events);
//     console.log(events);
//   });

//   server.patch("/events/:id", (req, res) => {
//     const id = Number(req.params.id);
//     events[id] = {
//       ...events[id],
//       ...req.body,
//     };
//   });
//   server.delete("/events/:id", (req, res) => {
//     const id = Number(req.params.id);
//     events[id] = undefined;
//     events = events.filter((event) => !!event);
//     res.status(200);
//     res.send(events);
//   });
