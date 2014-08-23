function getShortMessages(messages) {
  var msgs = messages.map(function(e){
	return e.message;
  });
  var result = msgs.filter(function(element){
	return element.length < 50;
  });
  return result;
}
    
module.exports = getShortMessages;