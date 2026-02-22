

db.users.updateOne(
{email:"harsh@gmail.com"},
{$set:{isVerified:true}}
)

db.courses.updateOne(
{title:"JavaScript Course"},
{$set:{price:1200}}
)

print("Update Done")