var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
return Object.assign({}, obj, {[key]: value})
}

var obj = { prop: 1 }
updateObjectWithKeyAndValue(obj, 'prop2', 2)


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
obj[key] = value

return obj
}
var obj = { prop: 1 }
destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)

function deleteFromObjectByKey(object, key){


}

var obj = { prop: 1 }
var newObj = deleteFromObjectByKey(obj, 'prop')
delete newObj.key
