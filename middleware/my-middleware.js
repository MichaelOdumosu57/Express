		module.exports = function(options) {
		  return function(req, res, next) {
		    // Implement the middleware function based on the options object
		    // options = { option1: '1', option2: '2' }
		    if(options.option1 == "1"){
		    	console.log(" reacting")
		    }
		    if(options.option2 == "2"){
		    	console.log(" reacting some more")
		    }		    
		    next()
		  }
		}

