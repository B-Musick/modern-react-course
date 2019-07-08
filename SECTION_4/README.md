LEARN
- Learn about state and life cycle events

APP EXPLANATION
- Detects what season the user is experiencing outside
- Based on their location (hemisphere) and time of year

CHALLENGES
- Need to get the users physical location
- Need to determine current month
- Need to change the text and styling based on location + month

COMPONENTS
- App - determines location and month
    - Use Geolocation API --> https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
    - Passes location and month to SeasonDisplay
- SeasonDisplay - Shows different text/icons based on props

WHAT HAPPENS IN BROWSER
- JS file loaded by browser
- App component gets created
- Call geolocation service, takes some time (seconds)
- App return JSX, gets rendered to page as HTML
- Get result of geolocation (this is why using class components is used, so we can wait for success of the geolocation)
- Want to tell the compnent to rerender itself with this new information

CONSTRUCTOR 
- Good place for state initialization

STATE
- State of APP is the latitude

FLOW
- JS file loaded to browser --> Instance of App component made --> Constructor function called --> state object is made and this.state set --> call geolocation service (callback for position only called when get location --> React calls render() --> App returns JSX and is rendered as HTML --> Get gelocation --> we update our state with call 'this.setState' --> React sees we updated state of component --> React calls render() a second time --> render method returns updated JSX --> React takes JSX and updates content on screen

RENDER
- Return JSX

RENDER SCENARIOS
- If have latitude then show latitude
- If no latitude then show error
- While loading the location, want to show loading

componentDidMount
- Initial data loading (can use like constructor and recommended to do here instead

componentDidUpdate
- Data loading when state/props change (like user input)

SEASONDISPLAY COMPONENT
- Pass the latitude prop from the App (parent) component to it through the render method
- Then use the seasondisplay component to deal with displaying the season dependent on this latitude state passed in through the props argument
- Want to display 'burr its chilly' if winter

NORTHERN HEMISPHERE
- April --> Sep is summer

SOUTHER HEMISPHERE
- Oct --> Mar is summer

getSeason(lat, month)
- Check if between months 2-9 (Feb - Sep), if latitude is  > 0 then it will be summer and
- if 0 > then it will be winter

REFACTOR
- Add a configuration object when accessing the text and icon, instead of using a bunch of ternary operators, etc.

SRC/SEASONDISPLAY.CSS
- Import to component file
- Change icon sizes
- Change background colors

SPINNER COMPONENT
- Use this to show when the page is loading
- Most projects use this

SEMANTIC-UI
- Use Icon for the sun and snowflake images
- Use i tag with class icon and the name of icon we want to use
- <i class='icon iconname'>
- Create Spinner