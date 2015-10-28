console.log("Loaded script...");

var email, first, last, info	;
function getInfo(_email, _first, _last) 
{
	email = _email;
	first = _first;
	last = _last;
	console.log(email);


    //keep the div with the canvas the size of the screen
console.log(email);
info = $.ajax({
    type: "POST",
    url:'https://apisandbox.moxtra.com/oauth/token?' +
        'client_id=' +
        '&client_secret=' +
        '&grant_type=http://www.moxtra.com/auth_uniqueid' +
        '&uniqueid=' + email +
        '&timestamp=' + Date.now() +
        '&firstname=' + first +
        '&lastname=' + last,
    dataType: 'json',
contentType:'application/x-www-form-urlencoded',    
    data:'',
    async: false,
    crossDomain: true,
    success: function(data) {
        console.log('success');
        console.log(data.access_token);
        init(data.access_token);
        addUserToBinder(email,"","")
    },
    error: function(response, text, err) {
        console.log(err);
    }
});

}

function init(access_token) {
console.log("Executing init...");


    var options = {
        mode: "sandbox", //for production environment change to "production"
        client_id: '',
        access_token: access_token, //valid access token from user authentication
        invalid_token: function(event) {
            console.log("Access Token expired for session id: " + event.session_id);
        }
    };

    Moxtra.init(options);
    	var options = {
		binder_id: "",
	    iframe: true,
	    tagid4iframe: "contain",
	    border: false,
	    iframewidth: "100%",
	    iframeheight: "100%",
	    autostart_meet: true,
	    start_chat: function(event) {
	        console.log("ChatView started binder Id: " + event.binder_id);
	    },
	    request_note: function(event) {
	        console.log("Note start request");
	    },
	    error: function(event) {
	        console.log("ChatView error code: " + event.error_code + " error message: " + event.error_message);
	    }
	};
	Moxtra.chatView(options);
}

function create_binder(bindername){
	console.log("Creating binder?");
	var options = {
		binder_name: bindername,
	    start_chat: function(event) {
	        console.log("ChatView started binder Id: " + event.binder_id);
	    },
	    request_note: function(event) {
	        console.log("Note start request");
	    },
	    error: function(event) {
	        console.log("ChatView error code: " + event.error_code + " error message: " + event.error_message);
	    }
	};
	Moxtra.setup(options);
}
function open_binder(binderid){
	var options = {
		binder_id: binderid,
	    iframe: true,
	    tagid4iframe: "contain",
	    border: false,
	    iframewidth: "100%",
	    iframeheight: "100%",
	    autostart_meet: true,
	    start_chat: function(event) {
	        console.log("ChatView started binder Id: " + event.binder_id);
	    },
	    request_note: function(event) {
	        console.log("Note start request");
	    },
	    error: function(event) {
	        console.log("ChatView error code: " + event.error_code + " error message: " + event.error_message);
	    }
	};
	Moxtra.chatView(options);
}

function addUserToBinder(uniqueid,binder_id,binder_owner_access_token){
	console.log("add user:"+binder_id+" "+binder_owner_access_token);	
	post_data = "{'users':[{'user':{'unique_id':'try@xyz.com'}}]}";
	$.ajax({
		type: "POST",
		url: "https://apisandbox.moxtra.com/v1/"+binder_id+"/addteamuser?access_token="+binder_owner_access_token,
		contentType: "application/json",
		data: post_data,
		success: {
			//process results
		}
	});
}