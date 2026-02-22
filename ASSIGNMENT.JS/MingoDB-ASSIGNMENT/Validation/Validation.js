

db.createCollection("reviews",{

validator:{
$jsonSchema:{

bsonType:"object",

required:["rating"],

properties:{

rating:{
bsonType:"int",
minimum:1,
maximum:5
}

}
}
}

})

print("Validation Applied")