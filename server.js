const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.get('/', (req, res) => {
    res.send('ITP Backend API Running');
});


//set path to route
const dbConfig      = require('./db')
const roomsRoute    = require('./routs/roomsRoute')
const usersRoute    = require('./routs/userRoute')
const bookingRoute  = require('./routs/bookingsRoute')
const packageRoute  = require('./routs/packagesRoute')
const serviceRoute  = require('./routs/servicesRoute')
const feedbacks = require('./routs/Feedback')

//Utility Payment
const Payment = require('./Utility/models/paymentModel')
const paymentRoutes = require('./Utility/routes/paymentRoute')

//Event Management
const Events = require('./Events/EventModules/eventModule')
const EventRout = require('./Events/EventRouts/eventRout')
const Res = require('./Events/EventModules/resModel')
const ResRout = require('./Events/EventRouts/resRout')

//receve para in body
app.use(express.json())
app.use(express.static("public"))
app.use(cors());

//create access to roomsRoute
app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)
app.use('/api/bookings', bookingRoute)
app.use('/api/package', packageRoute)
app.use('/api/service', serviceRoute)
app.use("/api/addPayment", paymentRoutes)
app.use('/api/event',EventRout)
app.use("/api/eventres" , ResRout)
app.use('/api/feedback',feedbacks)

app.use('/employee', require('./routs/employee.route'));
app.use('/inventory', require('./routs/inventory.route'));
app.use('/inventoryOrders', require('./routs/inventoryOrders.route'));
app.use('/customer', require('./routs/customer.route'));
app.use('/customerFeedback', require('./routs/customerFeedback.route'));
app.use('/leave', require('./routs/leave.route'));
app.use('/user', require('./routs/user.route'));

const port = process.env.PORT || 5000

app.listen(port, () => console.log( `Server running on ${port} using nodemon`))