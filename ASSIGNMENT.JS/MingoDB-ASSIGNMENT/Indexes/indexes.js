

db.users.createIndex(
{email:1},
{unique:true}
)



db.enrollments.createIndex(
{courseId:1,studentId:1}
)


db.users.find({email:"harsh@gmail.com"}).explain()

print("Indexes Created")