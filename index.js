var schedule = require('node-schedule');
var dateFormat = require('dateformat')

var messageText = "";

//Option 1 - Date-based Scheduling
//Schedule a Job for a particular Date/Time 
//The below would run on 23-Nov-2017 7:33pm
//NOTE: 2nd parameter 10 is for November. 
//In JavaScript - 0 = January, 11 = December. 
var date = new Date(2017, 10, 23, 19, 37, 00);
var onetimeJob = schedule.scheduleJob(date, function() {
    console.log('This is a one time job example');
});

//Option 2 - Cron-style Scheduling
//Schedule a Job for every X time   
//The below would run every one minute
//In JavaScript - 0 = January, 11 = December. 
var recurringJob = schedule.scheduleJob('*/1 * * * *', function() {
    var currentDateTime = new Date();

    messageText = "[" + dateFormat(currentDateTime, "dd-mmm-yyyy HH:MM:ss:") 
        + currentDateTime.getMilliseconds() + "]-";

    console.log(messageText + 'This timer job runs every 1 minute.');
});
