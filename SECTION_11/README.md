YOUTUBE BROWSER APP
- User enters in search term
- Hit enter and makes search request
- Use youtube public API
- User can click  on video and feature in center

COMPONENTS
- App - Stores current search term, pass props to children
- SearchBar - text input, user hits enter and onSubmit form event to API request
- VideoItem - One particular item
- VideoList - List of VideoItems, pass props to VideoDetail to get info
- VideoDetail - Show video, description, title