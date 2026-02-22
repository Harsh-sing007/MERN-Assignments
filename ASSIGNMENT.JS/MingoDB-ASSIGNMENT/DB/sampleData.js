//use elearningDB

db.users.insertMany([
{
name:"Harsh",
email:"harsh@gmail.com",
password:"123",
role:"student",
isVerified:true
},
{
name:"John",
email:"john@gmail.com",
password:"123",
role:"instructor",
isVerified:true
}
])


db.categories.insertOne({
name:"Programming"
})


db.courses.insertOne({
title:"JavaScript Course",
description:"Learn JS",
price:1000,
instructorId:2,
categoryId:1,
rating:4.5,
totalStudents:1,
level:"Beginner"
})


db.lessons.insertOne({
courseId:1,
title:"Intro",
videoUrl:"youtube.com",
duration:10,
order:1
})


db.enrollments.insertOne({
studentId:1,
courseId:1,
paymentId:1
})


db.reviews.insertOne({
courseId:1,
studentId:1,
rating:5,
comment:"Good Course"
})


db.payments.insertOne({
studentId:1,
amount:1000,
paymentStatus:"Paid",
transactionId:"TXN123"
})

print("Sample Data Inserted")