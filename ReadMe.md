<h1>Assessment 1</h1>

<h2>HOW TO RUN</h2>

1. Navigate to "Assessment 1" folder. 
2. Open the index.html file in browser.
3. The webpage is responsive to all screensizes.

<h1>Assessment 2</h1>

<h2>TEST CASES</h2>
1. By default, the 'Adult' and 'Children' drop-down fields for rooms 2, 3, and 4 should be disabled.  Upon checking the checkbox of room 2, the drop-down fields associated with room 2 should be enabled.  

Adults drop-down field values: [1, 2]
Children drop-down field values: [0, 1, 2]

<h2>DONE</h2>
2. If the user checks the 'Room 3' checkbox, Room 2 should auto-check. (See Figure B in screenshot). If the user checks the 'Room 4' checkbox, Room 2 and Room 3 should auto-check.
<h2>DONE</h2>
3. Any room that is checked should have a selected state, whose presentation is identical to the 'Room 1' field, and it's corresponding Adults/Children drop-down fields should be enabled.
<h2>DONE</h2>
4. Any room that is unchecked should return to the unselected state, and it's corresponding Adults/Children drop-down fields should become disabled and return to default values.
<h2>DONE</h2>
5. If a user unchecks a room, that room plus any room after that room should return to its unselected state.  (For example, if all rooms are checked, and the user unchecks room 3, then both room 3 and room 4 should be unselected, and their drop-downs set to default values and disabled.)
<h2>DONE</h2>
6. Upon clicking 'Submit', save values, so that upon reload, all previously selected values are pre-populated.
<h2>DONE</h2>


<h2>HOW TO RUN</h2>

1. Navigate to "Assessment 1/test2-app" folder. 
2. Open Terminal/Commdand Prompt
3. npm install
4. execute "npm run dev"
5. type: "http://localhost:3000" in browser.