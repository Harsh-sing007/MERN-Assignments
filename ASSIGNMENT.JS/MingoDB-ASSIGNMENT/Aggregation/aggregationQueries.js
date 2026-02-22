

// Top 3 rated courses

db.courses.find().sort({rating:-1}).limit(3)



// Revenue per course

db.payments.aggregate([
{
$group:{
_id:"$studentId",
totalRevenue:{$sum:"$amount"}
}
}
])



// Monthly revenue

db.payments.aggregate([
{
$group:{
_id:null,
total:{$sum:"$amount"}
}
}
])

print("Aggregation Done")