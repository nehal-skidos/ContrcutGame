function sendData(data){
// console.log("Data to be sent: "+data);
// window.location.href = "uniwebview://jsondata?json={'data:'"+data+"}";
}


const scriptsInEvents = {

		async EventSheet1_Event3_Act2(runtime, localVars)
		{
			sendData(localVars.data);
			window.location.href = "uniwebview://jsondata1";
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

