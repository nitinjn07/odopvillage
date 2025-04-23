const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const applicationFrom = require("./routes/applicationRoute");
const cors = require("cors");
const app = express();
const { mongoDB } = require("./db");
// Middleware
app.use(cors());
mongoDB();
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(null, true);
      }
      return callback(null, true);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    credentials: true,
    maxAge: 86400, // 24 hours
  })
);
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);
//end default route
//start manual
app.use("/api/application", applicationFrom);

//end manual
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
app.listen(process.env.PORT, () => {
  console.log(`server is running at port ${process.env.PORT}`);
});
