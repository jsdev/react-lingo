import App from "./App";
import { AlertProvider } from "./context/AlertContext";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import axe from "@axe-core/react";
import React from "react";
import * as ReactDOMClient from "react-dom/client";
import {getAccessibleName} from 'accname';
import {getCssSelector} from 'css-selector-generator';
const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container as HTMLElement);
if (import.meta.env.NODE_ENV !== "production") {
  axe(React, ReactDOMClient, 1000);
  
  var checkbox = document.createElement ('input');
  checkbox.type = "checkbox";
  checkbox.id = "record";
  checkbox.name = "record";

  var button = document.createElement ('button');
  button.innerText = "Replay";
  button.id = "replay";
  
  var label = document.createElement ('label');
  label.htmlFor = "record";
  label.appendChild (document.createTextNode ('Record events'));
  
  var body = document.body;
  body.appendChild (checkbox);
  body.appendChild (label);
  body.appendChild (button);
  
  body.addEventListener ('click', function (e) {
    console.log('click heard');
    const element = e.target as HTMLElement;
    if (button.id === element.id) {
      replayEvents();
      return;
    }
    if (checkbox.checked){
      logEvent(e);
      recordEvent(e, Date.now());    
    }
  });
  
  body.addEventListener ('change', function (e) {
    console.log('change heard', checkbox.checked);
    if (checkbox.checked){
      logEvent(e);
      recordEvent(e, Date.now());    
    }
  });
  
  function logEvent (event: Event) {
    var element = event.target as HTMLElement;
    console.log(element);
    console.log(getAccessibleName(element));
    var accName = getAccessibleName(element); // the accessibility name of the element
    var cssSelector = getCssSelector(element); // the CSS selector of the element
    console.log (event.type, accName, cssSelector); // log the event type, the accessibility name and the CSS selector
  }
  
  // To replay the events recorded, you can use an array to store the event objects and their timestamps. For example:
  
  interface RecordedEvent {
    event: Event;
    timestamp: number;
  }
  var events: RecordedEvent[] = []; // an array to store the events
  
  function recordEvent(event: Event, timestamp: number) {
    const recordedEvent: RecordedEvent = { event, timestamp };
    events.push(recordedEvent); // store the event object and its timestamp
  }
  
  function replayEvent (event: { target: { selector: any; }; }, timestamp: any) {
    var element = document.querySelector (event.target.selector); // find the element by its CSS selector
    if (element) {
      element.dispatchEvent (event); // dispatch the event on the element
    }
  }
  
  function replayEvents () {
    var startTime = events[0].timestamp; // the start time of the recording
    for (var i = 0; i < events.length; i++) {
      var event = events[i].event; // the event object
      var timestamp = events[i].timestamp; // the event timestamp
      var delay = timestamp - startTime; // the delay from the start time
      setTimeout (replayEvent, delay, event, timestamp); // replay the event after the delay
    }
  }
  
  // To be able to stop recording and save the recording to the local storage, you can use a boolean variable to indicate the recording status and the localStorage.setItem () and localStorage.getItem () methods to store and retrieve the events array. For example:
  
  var recording = false; // a boolean variable to indicate the recording status
  
  checkbox.addEventListener ('change', function () {
    recording = checkbox.checked; // update the recording status based on the checkbox value
    if (recording) {
      events = []; // clear the events array if start recording
    } else {
      localStorage.setItem ('events', JSON.stringify (events)); // save the events array to the local storage if stop recording
    }
  });
  
  function loadEvents () {
    var data = localStorage.getItem ('events'); // get the events array from the local storage
    if (data) {
      events = JSON.parse (data); // parse the data to an array
    }
  }
}

root.render(
  <React.StrictMode>
    <AlertProvider>
      <App />
    </AlertProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
