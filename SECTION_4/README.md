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