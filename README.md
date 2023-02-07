# RandomPhotoApp

## Design
* Below are wireframes, which give a general view of what the pages
should look like
* The theme (e.g colors, fonts) you can choose by yourself
## Header
* Consists of 2 buttons and allows you to switch between your “Favorites”
library and a random photostream.
* An active view must be highlighted.
## “Photos” screen has an infinite scrollable list of photos
* Located at / path.
* Clicking a photo adds it to Favorites.
* When scrolling, new photos should be loaded. Loader icon should be
displayed.
* Use https://picsum.photos/200/300 to get random images (or any other
resource).
* Emulate real-world API, when getting photos. Loading new photos
should have a random delay of 200-300ms.
## “Favorites” screen
* Located at /favorites path.
* Contains a list of favorite photos (no need for infinite scrolling here, just
list of all photos).
* Clicking on a photo opens a single photo page.
* Favorites list should persist after a page refresh.
## Single photo page
* Located at /photos/:id path.
* Shows just a single full-screen photo, instead of a grid.
* Should contain the “Remove from favorites” button.
* The header remains the same on this page.
