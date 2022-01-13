
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{	window.addEventListener('build', function (e) { window.location.href = "uniwebview://jsondata?json={data:abc}"; }, false);
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	runtime.globalVars.ReceivedData = window.data;
	window.data = undefined;
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
	
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}
